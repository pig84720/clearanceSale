app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>留下您的評論</h3>
        <label for="name">名稱:</label>
        <input id="name" v-model="name">

        <label for="review">您的回饋:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">滿意度:</label>
        <select id="rating" v-model.number="rating">
        <option>★★★★★</option>
        <option>★★★★☆</option>
        <option>★★★☆☆</option>
        <option>★★☆☆☆</option>
        <option>★☆☆☆☆</option>
        </select>

        <input class="button" type="submit" value="送出">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if(!this.name || !this.review || !this.rating) {
                Swal.fire('請確認評論區欄位是否填寫完畢!');
                return;
            };
            let reviewContent = {
                name: this.name,
                review: this.review,
                rating: this.rating
            };
            this.$emit('review-submitted', reviewContent);

            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});