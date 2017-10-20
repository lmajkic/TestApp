Ext.define('Ext4Example.controller.TeamController', {
    extend: 'Ext.app.Controller',

    stores: ['Ext4Example.store.Store'],

    models: ['Ext4Example.model.Team'],

    views: ['Ext4Example.view.TeamGrid'],
    
    init: function() {
        this.control({
            'actioncolumn': {
        		click: this.onAction
        	}
        });
    },
    
    onAction: function(view,cell,row,col,e){
    	
        var m = e.getTarget().className.match(/\bicon-(\w+)\b/);
        
        var rec = this.getExt4ExampleStoreStoreStore().getAt(row);
        
        if(m){
            switch(m[1]){
                case 'buy':
                	alert("Buy " + rec.get('name'));
                    break;
                case 'alert':
                    alert("Hold " + rec.get('name'));
                    break;    
                case 'delete':
                    alert("Sell " + rec.get('name'));
                    break;
            }
        }
    }
});