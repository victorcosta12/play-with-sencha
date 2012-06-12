Ext.define('SearchHash.view.MainField', {
    extend: 'Ext.form.Panel',
    xtype: 'mainfield',
    config: {
        title: 'Welcome',
        url: 'test.php',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: [
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'SearchHash'
        },
        {
            xtype: 'textfield',
            placeHolder: 'Enter your hashtag',
        },
        {
            xtype: 'button',
            text: 'Search',
            ui: 'confirm',
            handler: function() {
                this.up('formpanel').submit();
            }
        }

        ] 


    }

});
