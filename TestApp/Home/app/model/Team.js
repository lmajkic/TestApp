Ext.define('Ext4Example.model.Team', {
	extend: 'Ext.data.Model',
	fields: [
	    {name: 'id', type:'int'},
        {name: 'name',      type: 'string'},
        { name: 'engine', type: 'string' },
    ]
});
Ext.define('Ext4Example.model.Driver', {
    extend: 'Ext.data.Model',
    fields: [
	    { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'team', type: 'string' },
        { name: 'racingNumber', type: 'int' },
    ]
});
Ext.define('Ext4Example.model.Track', {
    extend: 'Ext.data.Model',
    fields: [
	    { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'country', type: 'string' },
        { name: 'numberoflaps', type: 'int' },
    ]
});