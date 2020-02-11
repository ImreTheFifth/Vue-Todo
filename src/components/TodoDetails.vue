<template>
  <div>
    <page-header></page-header>
    <p> {{ getItems[index].name }} </p>
    <home-button></home-button>
  </div>
</template>

<script>
  import { Vue, Component, Prop} from 'vue-property-decorator';
  import {mapGetters} from 'vuex';
  import PageHeader from './PageHeader.vue';
  import HomeButton from './HomeButton';

  @Component({
    components: {
      pageHeader: PageHeader,
      homeButton: HomeButton
    },
    computed: {
        ...mapGetters([
            'getItems'
        ])
    }    
  })

  export default class TodoDetails extends Vue {
    @Prop() index
  }
</script>

<style scoped>
  p {
    text-align: center;
  }
</style>