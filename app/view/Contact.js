Ext.define('NewApp.view.Contact', {
   extend: 'Ext.form.Panel',
    xtype: 'contactform',

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Email'

    ],

    config: {
        title: 'Kontakt',
        iconCls: 'user',
        url: 'contact.php',

        items: [
            {
                xtype: 'fieldset',
                title: 'Kontaktirajte nas',
                instructions: '(e-pošta ni nujno potrebna)',

                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Ime'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'E-pošta'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'message',
                        label: 'Sporočilo'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Pošlji',
                ui: 'confirm',
                handler: function(){
                    this.up('contactform')
                }


            }

        ]


    }

});