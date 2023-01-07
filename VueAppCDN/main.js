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
            
            onSale: true,
            qty: 7,
            repo: "https://github.com/emeraldahp/vueJs",
        }
    }
})

const mountedApp = app.mount('#app')