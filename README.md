# Plugin do sencha para searchbar.

Barra de busca personalizada

## Exemplo de utilização

``` javascript
Ext.define('Aplicacao.view.Main', {
    extend: 'Ext.Container',

    requires: ['Mba.ux.Searchbar']

    config: {
        items: [
            {
                xtype: 'searchbar',
                docked: 'top',
                placeholder: 'Exemplo de placeholder'
            },
            ...
        ]
    }

});
```
