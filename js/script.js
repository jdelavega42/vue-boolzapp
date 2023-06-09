const { createApp } = Vue;
createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabiana',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeChat: null,
            messageSelected: null,
            disabled: true,
            myMessage: '',
            autoMessage: 'Ok',
            finder: '',
            timestamp: new Date().toLocaleString(),
        }
    },

    methods: {
        activeChatSelected(element) {
            this.activeChat = element;
            this.disabled = false;
            // this.addContactProperty(element)
        },
        messageColor(element) {
            if (element.status === 'received') {
                return 'received';
            } else {
                return 'sent';
            }
        },
        messageGenerator(thisChat) {
            if (this.myMessage != ''){
                thisChat.messages.push({ date: this.timestamp, message: this.myMessage, status: 'sent' });
                setTimeout(() => {
                    thisChat.messages.push({ date: this.timestamp, message: this.autoMessage, status: 'received' })
                }, 1000);
                this.myMessage = '';
            }
        },
        filter() {
            this.contacts.forEach(element => {
                const name = element.name.toLowerCase();
                let finder = this.finder.toLowerCase();
                if (!name.includes(finder)) {
                    element.visible = false;
                } else {
                    element.visible = true;
                };
            });
        },
        // addContactProperty(object) {
        //     // for (key in this.contacts) {
        //     //     const currentContact = this.contacts[key];
        //     //     for (messages in currentContact.messages) {
        //     //         const currentMessage = currentContact.messages[messages];
        //     //         currentMessage.menuToggler = false;
        //     //     }
        //     // }
        //     const messages = object.messages;
        //     messages.forEach( message => {
        //         message.menuToggler = false
        //     })  
        // },
        messageSelector(element) {
            this.messageSelected = element;
            console.log(this.messageSelected);
        },
        // chevronToggler(element){
        //     element.menuToggler = !element.menuToggler;
        //     console.log(element.menuToggler);
        // },
        // toggle(element){
        //         element.menuToggler = !element.menuToggler;
        // },
        toggle(message){
            if (message === this.messageSelected){
                message.menuToggler = true;
            } else {
                message.menuToggler = false;
            }
            console.log(message);
        },
        deleteMessage(array, object, index){
            array.splice(index, 1)
        }
    }

}).mount("#app");

// controllare la data
// ! per array utilizza for each
// bug flag