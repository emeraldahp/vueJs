//creating vue instance //options object
const app = Vue.createApp({ 
    //data() is es6 shorthand
    data: function() { 
        return {
            item: "apple",
            desc: "its a fruit"
        }
    }
})

const mountedApp = app.mount('#app')