//creating vue instance //options object
const app = Vue.createApp({ 
    //data() is es6 shorthand
    data: function() { 
        return {
            cart: 0,
            premium: true,
            repo: "https://github.com/emeraldahp/vueJs",
        }
    },
    methods: {
        updateCart(value){
            this.cart+=value;
        }
    }
})

