const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
            cartListHeight: "0",
            countdown: '優惠將在 01小時 " + "00分 " + "00秒後結束',
            initTime: 3599
        }
    },
    methods: {
        updateCart(cartlist) {
            this.cart.push(cartlist);
        },
        showCartList() {
           this.cartListHeight = `${this.cart.length * 100}px`;
        },
        hideCartList() {
            this.cartListHeight = "0"; 
        },
    },
    beforeCreate () {
        var that = this;
        setInterval(function() {
            let min = parseInt(that.initTime / 60).toString().length === 1 ? "0" + parseInt(that.initTime / 60).toString() : parseInt(that.initTime / 60).toString();
            let sec = (that.initTime % 60).toString().length === 1 ? "0" + (that.initTime % 60).toString() : (that.initTime % 60).toString();
            that.initTime -= 1;
            if(that.initTime === 0) {
                that.initTime = 3599;
            };
            that.countdown = "優惠將在 00小時 " + min + "分 " + sec + "秒後結束"
        }, 1000)
    },
  });
  