Ext.define('NewApp.view.Video', {
    extend: 'Ext.Container',
    xtype: 'videopage',

    requires: [
        'Ext.Video'
    ],

    config: {
        title: 'Video',
        iconCls: 'action',
        layout: 'fit',

        items:[
            {
                xtype: 'video',
                url: [
                    '..NewApp/resources/videos/Wildlife.webm'


                ],
                loop: true,
                posterUrl: '../NewApp/resources/media/zidane.jpg'
            }
        ]

    }


});