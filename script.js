const app = Vue.createApp({
    data(){
        return {
            tasks:[
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        }
    },

    methods:{
        deleteItem(i){
            this.tasks.splice(i, 1);

        }
    }
});


app.mount('#root');