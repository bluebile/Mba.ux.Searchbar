Ext.define('Mba.ux.Searchbar.Searchbar', {
    extend: 'Ext.Container',
    xtype: 'searchbar',

    requires: [
        'Mba.ux.Searchbar.Search',
        'Ext.field.Search'
    ],

    constructor: function() {
        this.callParent(arguments);
        var buttonCancel = {
            xtype: 'button',
            ui: 'plain',
            iconCls: !Ext.os.is.Android ? '' :  'icon-arrow-back',
            text: !Ext.os.is.Android ? 'Cancelar' : '',
            cls: !Ext.os.is.Android ? 'cancel-search' : 'cancel-search-android',
            itemId: 'cancelSearch',
            handler: function() {
                var search = this.parent.down('#searchBarField');
                if (search.fireEvent('cancel', this) === true) {
                    search.setValue(null);
                    search.blur();
                    search.removeCls('search-focused');
                }
            }
        };
        if (Ext.os.is.Android) {
            this.insert(0, buttonCancel);
            return;
        }
        this.add(buttonCancel);
    },

    config: {
        cls: 'searchbar',
        layout: 'hbox',
        placeholder: 'Pesquise aqui...',
        items:[{
            width: Ext.os.is.Android ? '88%' : '',
            xtype: 'searchfield',
            itemId: 'searchBarField'
        }],
        listeners: {
            painted: function() {
                if (this.down('#searchBarField').getCls().indexOf('search-focused') === -1) {
                    this.down('#searchBarField').addCls('search-focused');
                }
            }
        }
    },

    /**
     * Atualizando placeholder do campo de busca da searchBar
     * @param value
     */
    updatePlaceholder: function(value) {
        this.down('#searchBarField').setPlaceHolder(value);
    }

});
