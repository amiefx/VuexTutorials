<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="indigo"
          dark
          v-on="on"
        >
          {{cartItemCount}} Cart
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item v-for="item in cart" :key="item.product.id">
            <!-- <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-item-avatar> -->

            <v-list-item-content>
              <v-list-item-title>{{item.product.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.quantity}} X ${{item.product.price}} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                class="red--text"
                icon
                @click="removeProductFromCart(item.product)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title>Total: ${{cartTotalPrice}}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="clearCartItems()">Clear Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),

    computed: {
        ...mapState(["cart"]),
        ...mapGetters(['cartItemCount', 'cartTotalPrice'])
    },

    // computed: {
    //     cart() {
    //         return this.$store.state.cart;
    //     },

    //     cartItemCount() {
    //         return this.$store.getters.cartItemCount;
    //     },

    //     cartTotalPrice() {
    //         return this.$store.getters.cartTotalPrice;
    //     }
    // },
    mounted() {
        this.getCartItems();
    },
    methods: {
        ...mapActions(["removeProductFromCart", "clearCartItems", "getCartItems"])

    }
}
</script>

<style>

</style>
