<template>
  <div>
      <v-card
      class="d-flex justify-center"
      flat
      tile
    >
      <v-text-field label="New Todo" v-model="newTodoItem">
          <v-btn slot="append" class="mb-2 mr-2" @click="addNewTodoItem()">
              <v-icon  color="red">mdi-plus</v-icon>
          </v-btn>
      </v-text-field>

      </v-card>
  </div>
</template>

<script>
export default {
    data() {
        return{
            newTodoItem: ""
        };
    },
    methods: {
        addNewTodoItem() {
            this.$store.dispatch("addNewTodo", this.newTodoItem);
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>
