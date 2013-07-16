Ext.define('NewApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Domov',
        iconCls: 'home',
        cls: 'home',
        scrollable: true,
        styleHtmlContent: true,

        html: [
            '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Začetna stran :)</h1>',
            "<p>Gradnja aplikacij s pomočjo</p>",
            '<h2>Sencha Touch</h2>'
        ].join("")

    }


})