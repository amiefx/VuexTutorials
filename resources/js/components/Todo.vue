<template>
  <div>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ todo.title }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon @click="deleteTodo()">
          <v-icon color="pink">mdi-minus</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
    props: ["todo"],

    methods: {
        deleteTodo() {
            this.$store.dispatch("deleteTodo", this.dodo);
        }
    }
}
</script>

<style>

</style>
