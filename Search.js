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
    },

    getValue: function() {
        var value = this.callOverridden();
        if (value) {
            value = value.toLowerCase();
            value = value.replace(/[âáã]/g, 'a');
            value = value.replace(/[êé]/g, 'e');
            value = value.replace(/[îí]/g, 'i');
            value = value.replace(/[ôóõ]/g, 'o');
            value = value.replace(/ú/g, 'u');
            value = value.replace(/ç/g, 'c');
            value = value.trim();
        }
        return value;
    }

});
