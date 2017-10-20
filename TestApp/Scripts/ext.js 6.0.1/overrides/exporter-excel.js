Ext.define('overrides.exporter.Excel', {
    override: 'Ext.exporter.Excel',

    config: {
    },

    buildHeader: function () {
        var me = this,
            ret = {},
            keys,
            row,
            i,
            j,
            len,
            lenCells,
            col,
            columns;
        columns = me.getData().columns;
        me.buildHeaderRows(me.getData().columns, ret);
        keys = Ext.Object.getKeys(ret);
        len = keys.length;

        var columnWidth = this.exportConfig && this.exportConfig.columnWidth ? this.exportConfig.columnWidth : '';
        var headerHeight = this.exportConfig && this.exportConfig.headerHeight ? this.exportConfig.headerHeight : 20;

        if (!Ext.isEmpty(columnWidth)) {
            /*it's correct only in case of one header row (without group headers)*/
            for (i = 0; i < columns.length; i++) {
                me.table.addColumn({
                    width: columnWidth
                });
            }
        }
        for (i = 0; i < len; i++) {
            row = me.table.addRow({
                height: headerHeight,
                styleId: me.tableHeaderStyleId
            });
            lenCells = ret[keys[i]].length;
            for (j = 0; j < lenCells; j++) {
                row.addCell(ret[keys[i]][j]);
            }
        }
    },
    buildHeaderRows: function (columns, result) {
        var col, count, s;
        if (!columns) {
            return;
        }

        for (var i = 0; i < columns.length; i++) {
            col = columns[i];
            count = this.getColumnCount(col.columns);
            result['s' + col.level] = result['s' + col.level] || [];
            s = {
                value: this.sanitizeHtml(col.text)
            };
            if (count > 1) {
                Ext.apply(s, {
                    mergeAcross: count - 1
                });
            }
            result['s' + col.level].push(s);
            this.buildHeaderRows(col.columns, result);
        }
    },


    sanitizeHtml: function (value) {

        if (this.exportConfig && this.exportConfig.escapeEncoding) {
            value = String(value).replace(/<br>/g, "~skipencoding&#10;skipencoding~");
            value = value.replace(/<br\/>/g, "~skipencoding&#10;skipencoding~");
        } else {
            value = String(value).replace(/<br>/g, " ");
            value = value.replace(/<br\/>/g, " ");
        }
        // strip html tags
        return value.replace(/<\/?[^>]+>/gi, '');
    }
});

Ext.define('overrides.exporter.file.excel.Cell', {
    override: 'Ext.exporter.file.excel.Cell',

    tpl: [
        '               <Cell',
        '<tpl if="this.exists(index)"> ss:Index="{index}"</tpl>',
        '<tpl if="this.exists(styleId)"> ss:StyleID="{styleId}"</tpl>',
        '<tpl if="this.exists(mergeAcross)"> ss:MergeAcross="{mergeAcross}"</tpl>',
        '<tpl if="this.exists(mergeDown)"> ss:MergeDown="{mergeDown}"</tpl>',
        '<tpl if="this.exists(formula)"> ss:Formula="{formula}"</tpl>',
        '>\n',
        '                   <Data ss:Type="{dataType}">{[this.formatValue(values.value)]}</Data>\n',
        '               </Cell>\n',
        {
            exists: function (value) {
                return !Ext.isEmpty(value);
            },

            formatValue: function (value) {

                var format = Ext.util.Format;

                /*find all occurences between markers*/
                //this.arrayOfEscapeEncodingSentences = value ? value.match(new RegExp(this.startMarker + '(.*?)' + this.endMarker, 'gm')) : '';
                var re = /~skipencoding(.*?)skipencoding~/gm;
                var arrayOfEscapeEncodingSentences = [];
                var tempOccurrencesArray;
                while ((tempOccurrencesArray = re.exec(value)) != null) {
                    arrayOfEscapeEncodingSentences.push(tempOccurrencesArray[0]);
                }

                if (arrayOfEscapeEncodingSentences && arrayOfEscapeEncodingSentences.length) {
                    /*remove all strings between markers, supposed to be escaped*/
                    var valueWithoutEscapedSentences = value.replace(/(~skipencoding)(.+?)(?=skipencoding~)/g, "$1");

                    /*do encoding of value without escaped strings*/
                    var encodedValue = format.htmlEncode(format.htmlDecode(valueWithoutEscapedSentences));

                    /*put back skipped sentences*/
                    for (var i = 0; i < arrayOfEscapeEncodingSentences.length; i++) {
                        encodedValue = encodedValue.replace(this.startMarker + this.endMarker, arrayOfEscapeEncodingSentences[i].replace(this.startMarker, "").replace(this.endMarker, ""));
                    }
                    return encodedValue;

                } else {

                    return (value instanceof Date ? Ext.Date.format(value, 'Y-m-d\\TH:i:s.u') : format.htmlEncode(format.htmlDecode(value)));
                }

            },
            startMarker: "~skipencoding",
            endMarker: "skipencoding~",
        },

    ],
});