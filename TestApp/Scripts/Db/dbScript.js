Ext.define('MyApp.model.Base',
    {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        }],
        schema: {
            namespace: 'MyApp.model',
            proxy: {
                type: 'sessionstorage',
                id: 'myProxyKey',
            }
        }
    });
Ext.define('MyApp.model.Team', {
    extend: 'MyApp.model.Base',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }]
});
Ext.define('MyApp.model.Driver', {
    extend: 'MyApp.model.Base',

    fields: [{
        name: 'teamId',
        reference: 'Team', // the entityName for MyApp.model.User
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    },
    {
        name: 'number',
        type:'int'
    }
    ]
});
new Ext.data.Store({
    model: 'MyApp.model.Team',
    data: [{
        id: 1,
        name: "AMG Mercedes Petronas"

    }, {
        id: 2,
        name: "Scuderia Ferrari"
    }, {
        id: 3,
        name: "Red Bull"

    }, {
        id: 4,
        name: "Esteban Ocon"

    }]
});
var store1 = new Ext.data.Store({
    model: 'MyApp.model.Driver',
    proxy: {
        type: 'sessionstorage',
        id: 'myProxyKey'
    },
    data: [{
        id: 1,
        name: "Sebastian Vettel",
        teamId: "2",
        number: "5",
    }, {
        id: 2,
        name: "Lewis Hamilton",
        teamId: "1",
        number: "44",
    }, {
        id: 3,
        name: "Max Verstappen",
        teamId: "3",
        number: "33",
    }, {
        id: 4,
        name: "Esteban Ocon",
        teamId: "4",
        number: "31",
    }]
});
var store = new Ext.data.Store({
    model: 'MyApp.model.Driver'
});
var a = newExt.data.proxy.WebStorage();
store1.load({
    callback: function () {
        var first_name = store1.first().data.name;
        console.log(first_name);
    }
});
