//creating vue instance //options object
const app = Vue.createApp({ 
    //data() is es6 shorthand
    data: function() { 
        return {
            item: "apple",
            desc: "its a fruit",
            image: "./res/apple.jpg",
            repo: "https://github.com/emeraldahp/vueJs",
            onSale: true,
            qty: 7
        }
    }
})

const mountedApp = app.mount('#app')