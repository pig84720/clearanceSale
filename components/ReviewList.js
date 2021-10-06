app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
        <h3>商品評價:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} 給予此商品 {{ review.rating }} 的評價
            <br/>
            "{{ review.review }}"
            <br/>
            </li>
        </ul>
    </div>`
})