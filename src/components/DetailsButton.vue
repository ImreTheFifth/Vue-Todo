<template>
  <router-link :to="{ name:'detailsOfTodo',
    params: { id: index, index}}" 
    tag="button" class="btn btn-primary" >Details</router-link>
</template>

<script>
  import { Vue, Component, Prop} from 'vue-property-decorator';

  @Component

  export default class DetailsButton extends Vue {
    @Prop() index
  }
</script>