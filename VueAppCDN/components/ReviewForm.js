app.component('review-form',{
    template: 
    //v-model creates a 2 way binding
    /*html*/
    `
    <form @submit.prevent='emitData()'>
    Rate The Product: <br>
    Name: <input type='text' v-model='name'> <br>
    Rating: <input type='number' v-model.number='rate'> <br>
    Description: <input type='text' v-model='desc'> <br>
    Recommend: <input type='checkbox' v-model='rcmd'> <br>
    <input type='submit'>
    </form>
    `,
    data(){
        return{
            name: "",
            rate: null,
            desc: "",
            rcmd: null,
        }
    },
    methods: {
        emitData(){
            if(this.name == "" || this.rate == null || this.desc == "" || this.rcmd == null){
                alert("please complete the form")
                return
            }
            reviewData = {
                name : this.name,
                rate : this.rate,
                desc : this.desc,
                rcmd : this.rcmd
            }
            
            this.$emit('revdata',reviewData)

            this.name = "" 
            this.rate = null 
            this.desc = "" 
            this.rcmd = null
        }
    }
})