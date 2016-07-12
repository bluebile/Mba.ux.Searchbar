Ext.define('Mba.ux.Searchbar', {
    extend: 'Ext.Container',
    xtype: 'searchbar',

    requires: 'Ext.field.Search',

    config: {
        cls: 'searchbar',
        layout: 'hbox',
        items:[{
            xtype: 'searchfield',
            placeHolder: 'Pesquise aqui...',
            itemId: 'searchBarField',
            flex: 2,
            listeners: {
                focus: function() {
                    this.parent.down('#cancelSearch').show();
                    this.toggleCls('search-focused');
                },
                blur: function() {
                    this.parent.down('#cancelSearch').hide();
                    this.toggleCls('search-focused');
                }
            }
        }, {
            xtype: 'button',
            hidden: true,
            ui: 'plain',
            flex: 1,
            text: 'Cancelar',
            cls: 'cancel-search',
            itemId: 'cancelSearch',
            handler: function() {
                this.parent.down('#searchBarField').setValue(null);
                this.parent.down('#searchBarField').blur();
            }
        }]
    }

});
