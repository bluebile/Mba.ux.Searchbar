Ext.define('Mba.ux.Searchbar.Search', {
    override: 'Ext.field.Search',

    requires: [
        'Mba.ux.Searchbar.SearchInput'
    ],

    config: {
        component: {
            xtype: 'searchinput',
            type: 'search'
        }
    }

});
