Ext.define("SearchHash.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'SearchHash.view.MainField'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: {xtype: 'mainfield' }
    }
});
