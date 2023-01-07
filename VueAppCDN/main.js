//creating vue instance //options object
const app = Vue.createApp({ 
    //data() is es6 shorthand
    data: function() { 
        return {
            cart: [],
            premium: true,
            repo: "https://github.com/emeraldahp/vueJs",
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeInCart(id){
            //to check if the element exists if so remove it
            const index = this.cart.indexOf(id)
            if(index>-1){
                this.cart.splice(index,1)
            }
            console.log(index)
        }

    }
})

