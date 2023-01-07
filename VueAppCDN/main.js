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
                {id: 0101, name: 'apple', qty:20, image: "./res/apple.jpg", color: "red"},
                {id: 0102, name: 'orange', qty: 10, image: "./res/orange.jpg", color: "orange"}
            ],
            
            onSale: true,
            qty: 20,
            repo: "https://github.com/emeraldahp/vueJs",
            cart: 0,
            //styles binding
            styles: {
                color: 'blue'
            }
            
            
        }
    },
    methods: {
        addToCart(fruitName) {
            this.cart+=1;
            this.qty-=1;
            this.fruits.forEach(fruit => {
                if(fruit.name == fruitName){
                    fruit.qty = this.qty
                }
            });
        },
        removeFromCart(fruitName) {
            if(this.cart>0){
                this.cart-=1;
                this.qty+=1;
                this.fruits.forEach(fruit => {
                    if(fruit.name == fruitName){
                        fruit.qty = this.qty
                    }
                });
            }
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