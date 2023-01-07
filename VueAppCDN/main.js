//creating vue instance //options object
const app = Vue.createApp({ 
    //data() is es6 shorthand
    data: function() { 
        return {
            item: "apple",
            desc: "its a fruit",
            image: "./res/apple.jpg",
            infos: ["fresh", "red"],
            types: [
                {id:0001, size: 'large'},
                {id:0002, size: 'small'}
            ],

            fruits: [
                {id: 0101, name: 'apple', qty:50, image: "./res/apple.jpg", color: "red"},
                {id: 0102, name: 'orange', qty: 20, image: "./res/orange.jpg", color: "orange"}
            ],
            
            onSale: true,
            qty: 50,
            repo: "https://github.com/emeraldahp/vueJs",
            cart: 0
        }
    },
    methods: {
        addToCart(fruitName) {
            this.cart+=1;
        },
        removeFromCart(fruitName) {
            if(this.cart>0)
                this.cart-=1;
        },
        selectItem(fruitName){
            this.fruits.forEach(fruit => {
                if(fruit.name == fruitName)
                {
                    this.item = fruit.name;
                    this.image = fruit.image;
                    this.infos[1] = fruit.color;
                    this.qty = fruit.qty;
                }
            });
        }


    }
})

const mountedApp = app.mount('#app')