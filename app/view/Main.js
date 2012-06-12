Ext.define("SearchHash.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                xtype: 'formpanel',
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



            },
                ]
    }
});
