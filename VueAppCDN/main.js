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
    computed:{
        title(){
            return "Fruit: " + this.item
        },
        sale(){
            return "Fruit: " + this.item + " is on Sale."
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
        selectItem(index){
            this.item = this.fruits[index].name;
            this.image = this.fruits[index].image;
            this.infos[1] = this.fruits[index].color;
            this.qty = this.fruits[index].qty;
        }


    }
})

