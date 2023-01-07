app.component('review-list',{
    template:
    /*html*/
    `
    Reviews:<br>
    <ul>
    <li v-for="(review, index) in reviews" :key='index'>{{review.name}} rated {{review.rate}} points and said {{review.desc}}</li>
    </ul>
    `,

    props:{
        reviews:{}
    }
})