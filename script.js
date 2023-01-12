const app = Vue.createApp({
    data(){
        return {
            
            items:[
                {text:'Fare i compiti',done:true},
                {text:'Fare la spesa',done:false},
                {text:'Fare il bucato',done:true},
            ]
        }
    },

    // computed:{
    //     newItem(){
    //         return this.items.text.push(addItem);
    //     }
    // },

    methods:{

        addItem(){
            if(this.newItem){
                const item = {done:false, text:this.newItem};
                this.items.push(item);
            }
        },

        deleteItem(i){
            this.items.splice(i, 1);
        }
    }

});


app.mount('#root');