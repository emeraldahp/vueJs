app.component('fruits-display',{
    template:
    //using es6 string html extension to display
    /*html*/ 
    `<div class="product_image">
        <!-- AttributeBinding, shorthand : = v-bind: -->
        <img v-bind:src="image" alt="img">
    </div>

    <div class="product_desc">
        <p>Usertype:{{premium}}</p>
        <!-- reactivity -->
        <!-- styles binding -->
        <!-- computed properties -->
        <h1 :style="styles">{{title}}</h1>
        <p>Description: {{desc}}</p>

        <!-- list rendering -->
        <ul>
            <li v-for="info in infos">{{info}}</li>
        </ul>
        <div v-for="type in types" :key="type.id">{{type.size}}</div>
        
        <!-- list rendering -->
        <!-- style binding -->
        <!-- using index -->
        <div 
            v-for="(fruit, index) in fruits" 
            :key="fruit.id" 
            @mouseover="selectItem(index)"
            class="itemColor"
            :style = "{ backgroundColor: fruit.color}"
        >
                {{fruit.name}}
        </div>

        <!-- v-show adds display:none -->
        <!-- computed properties -->
        <p v-show="onSale">{{sale}}</p>
        <!-- conditional rendering -->
        <p v-if="qty>10">In Stock</p>
        <p v-else-if="qty>0 && qty<=10">Almost gone</p>
        <p v-else>Out of Stock</p>
        <p>Available:{{qty}}</p>

        <!-- class binding -->
        <button v-on:click="addToCart(item)" :disabled="qty==0" class="button" :class="{disabledButton: qty==0}">Add To Cart</button>
        <!-- class binding with ternaray operator -->
        <button @click="removeFromCart(item)" :disabled="cart==0" class="button" :class="cart==0 ? 'disabledButton': '' "> Remove From Cart</button>
    </div>`,

    props:{
        cart:{}, premium:{}
    },

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