Ext.define('Ext4Example.view.TeamGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stockgrid',

    title: 'Json Grid',

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    },

    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {

        this.store = 'Ext4Example.store.Store';

        this.columns = [{
            text: 'Name',
            flex: 1,
            sortable: false,
            dataIndex: 'name'
        },
        {
            text: 'Engine',
            width: 75,
            sortable: true,
            //renderer: 'usMoney',
            dataIndex: 'engine'
        },
        //{
        //    text: 'Change',
        //    width: 75,
        //    sortable: true,
        //    renderer: this.change,
        //    dataIndex: 'change'
        //},
        //{
        //    text: '% Change',
        //    width: 75,
        //    sortable: true,
        //    renderer: this.pctChange,
        //    dataIndex: 'pctChange'
        //},
        //{
        //    text: 'Last Updated',
        //    width: 85,
        //    sortable: true,
        //    renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        //    dataIndex: 'lastChange'
        //},
        {
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'icon-delete',
                tooltip: 'Sell stock',
            }, {
                getClass: function (v, meta, rec) {
                    if (rec.get('engine')=='Mercedes') {
                        this.items[1].tooltip = 'Hold stock';
                        return 'icon-alert';
                    } else {
                        this.items[1].tooltip = 'Buy stock';
                        return 'icon-buy';
                    }
                }
            }]
        }];

        this.callParent(arguments);
    }
});