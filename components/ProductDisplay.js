app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p class="priceText">勁爆優惠價: {{ shipping }}</p>
        <s>建議售價: 990 元</s>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div style="display: flex;">
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            style="margin: 0px 10px"
            :style="{ backgroundColor: variant.color }">
          </div>
        </div>

        <div class="optionContainer">
          <label for="size">尺寸:</label>
          <select id="size" v-model="size" style="width: 200px">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          </select>
          
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            @click="addToCart">
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div style="display: flex">
      <review-form @review-submitted="addReview"></review-form>
      <review-list v-if="reviews.length > 0" :reviews="reviews"></review-list>
    </div>
  </div>`,
  data() {
    return {
        product: '衣',
        brand: '新垣結',
        selectedVariant: 0,
        details: ['100% 台灣棉'],
        variants: [
          { size: { S: 7, M: 8, L: 5, XL: 0 }, color: 'pink', image: './assets/images/cutegirl_pink.png'},
          { size: { S: 5, M: 40, L: 0, XL: 2 }, color: '#33F9FF', image: './assets/images/cutegirl_blue.png'},
        ],
        reviews: [],
        size: ''
    }
  },
  methods: {
      addToCart() {
        this.$emit('add-to-cart', {product: "新垣結 衣", color: this.variants[this.selectedVariant].color, image: this.variants[this.selectedVariant].image , size: this.size});
        this.variants[this.selectedVariant].size[`${this.size}`] -= 1;
      },
      updateVariant(index) {
        this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review);
      }
  },
  computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].size[`${this.size}`] > 0
      },
      shipping() {
        if (this.premium) {
          return '0'
        }
        return "499 元"
      }
  }
})