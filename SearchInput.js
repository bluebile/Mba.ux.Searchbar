Ext.define('Mba.ux.Searchbar.SearchInput', {
    extend: 'Ext.field.Input',

    xtype : 'searchinput',

    getTemplate: function() {
        var items = [
            {
                reference: 'input',
                tag: this.tag
            },
            {
                reference: 'mask',
                classList: [this.config.maskCls]
            },
            {
                reference: 'clearIcon',
                cls: 'x-clear-icon ontap-no-blur'
            }
        ];

        return items;
    }

});
