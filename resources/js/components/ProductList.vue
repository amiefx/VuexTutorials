<template>
  <div class="d-flex flex-wrap justify-start">
      <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
import ProductCard from './ProductCard'
export default {
    components: {
        ProductCard
    },

    computed: {
        ...mapState(["products"])
        // products() {

        //     return this.$store.state.products;
        // }
    },

    mounted() {
       this.getProducts();
       // this.$store.dispatch("getProducts");
    },

    methods: {
         ...mapActions(["getProducts"])
    }


};
</script>

<style>

</style>
