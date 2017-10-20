Ext.define('Ext4Example.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',

    requires: [
        'Ext4Example.view.TeamGrid'
    ],

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'stockgrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});