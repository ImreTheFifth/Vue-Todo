<template>
   <button class="btn btn-primary" @click="deleteItem(index)">Delete me!</button> 
</template>

<script>
import { mapActions } from  'vuex';
import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component({
    methods: {
      ...mapActions ([
        'deleteItem'
      ])
    }
  })

  export default class DeleteButton extends Vue {
    @Prop() index
  } 
</script>

<style scoped>
    .btn-primary {
        background-color: black;
    }
</style>