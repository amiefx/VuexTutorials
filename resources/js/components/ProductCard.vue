<template>
  <v-card
    class="mx-2 my-2"
    max-width="250"
  >
    <v-img
      height="100"
      :src="product.image"
    ></v-img>

    <v-card-title>
        <router-link :to="{name: 'product', params: {id: product.id}}">{{product.title}}</router-link>
    </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 yellow--text">
        ${{product.price}}
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="deep-purple accent-4"
        @click="addToCart()"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from "vuex";
export default {
    props: ["product"],
    methods: {
        ...mapActions(["addProductToCart"]),
        addToCart() {
            this.addProductToCart({
                product: this.product,
                quantity: 1
            });
        }
        // addToCart() {
        //     this.$store.dispatch("addProductToCart", {
        //         product: this.product,
        //         quantity: 1
        //     });
        // }
    }
}
</script>

<style>

</style>
