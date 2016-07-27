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
                var search = this.parent.down('#searchBarField');
                search.setValue(null);
                search.blur();
                this.hide();
                search.removeCls('search-focused');
                search.fireEvent('cancel');
            }
        }, {
            xtype: 'searchfield',
            itemId: 'searchBarField',
            listeners: {
                focus: function() {
                    this.parent.down('#cancelSearch').show();
                    if (this.getCls().indexOf('search-focused') === -1) {
                        this.addCls('search-focused');
                    }
                }
            }
        }, {
            xtype: 'button',
            hidden: true,
            ui: 'plain',
            text: 'Cancelar',
            cls: 'cancel-search',
            itemId: !Ext.os.is.Android ? 'cancelSearch' : 'cancelSearchAndroid',
            handler: function() {
                var search = this.parent.down('#searchBarField');
                search.setValue(null);
                search.blur();
                this.hide();
                search.removeCls('search-focused');
                search.fireEvent('cancel');
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
