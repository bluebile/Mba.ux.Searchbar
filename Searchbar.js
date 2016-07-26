Ext.define('Mba.ux.Searchbar.Searchbar', {
    extend: 'Ext.Container',
    xtype: 'searchbar',

    requires: [
        'Mba.ux.Searchbar.Search',
        'Ext.field.Search'
    ],

    config: {
        cls: 'searchbar',
        layout: 'hbox',
        placeholder: 'Pesquise aqui...',
        items:[{
            xtype: 'button',
            hidden: true,
            ui: 'plain',
            iconCls: 'ion-md-arrow-back',
            cls: 'cancel-search-android',
            itemId: Ext.os.is.Android ? 'cancelSearch' : 'cancelSearchAndroid',
            handler: function() {
                this.parent.down('#searchBarField').setValue(null);
                this.parent.down('#searchBarField').blur();
                this.hide();
                this.parent.down('#searchBarField').fireEvent('cancel');
            }
        }, {
            xtype: 'searchfield',
            itemId: 'searchBarField',
            flex: 2,
            listeners: {
                focus: function() {
                    this.parent.down('#cancelSearch').show();
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
            itemId: Ext.os.is.iOS ? 'cancelSearch' : 'cancelSearchAndroid',
            handler: function() {
                this.parent.down('#searchBarField').setValue(null);
                this.parent.down('#searchBarField').blur();
                this.hide();
                this.parent.down('#searchBarField').fireEvent('cancel');
            }
        }]
    },

    /**
     * Atualizando placeholder do campo de busca da searchBar
     * @param value
     */
    updatePlaceholder: function(value) {
        this.down('#searchBarField').setPlaceHolder(value);
    }

});
