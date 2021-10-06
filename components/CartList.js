app.component('cart-list', {
    props: {
        cart: {
            type: Array,
            required: true
        },
        cartListHeight: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="cartlist" :style="{ height: cartListHeight }"></div>`
})