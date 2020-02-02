<template>
  <v-container>
      <v-row class="d-flex">

              <v-col class="col-md-4">
                  <v-card  v-if="product">

                    <v-img
                    height="220"
                    :src="product.image"
                    ></v-img>
                  </v-card>

          </v-col>

          <v-col class="col-md-8">
              <v-card  v-if="product">
                    <v-card-title>
                        {{product.title}}
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

                    <div class="my-1 subtitle-1 yellow--text">
                        ${{product.price}}
                    </div>

                    <div>
                        <v-row class="align-self-end">
                            <v-col cols="3" md="3">
                                <v-text-field v-model.number="quantity" label="Quantity" type="number"></v-text-field>
                            </v-col>

                            <v-col class="align-self-center">
                                <v-btn
                                color="deep-purple accent-4"
                                @click="addToCart()"
                                >
                                    Add to Cart
                                </v-btn>
                            </v-col>

                        </v-row>
                    </div>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <div class="mx-4">{{product.description}}</div>


                    <v-card-actions class="d-flex justify-start">

                    </v-card-actions>
            </v-card>

          </v-col>

      </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    props: ["id"],

    data() {
        return {
            quantity: 1
        }
    },

    computed: {
        ...mapState({
            product: state => state.product.product
        })

    },

    mounted() {
        this.getProduct(this.id);
       // this.$store.dispatch("getProduct", this.id);
    },

    methods: {
        ...mapActions(["getProduct", "addProductToCart"]),

        addToCart() {
            this.addProductToCart({
                product: this.product,
                quantity: this.quantity
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
