<template>
  <div>
    <page-header></page-header>
    <add-new-item></add-new-item>
    <list-items></list-items>
  </div>
</template>

<script>
  import ListItems from './ListItems.vue';
  import PageHeader from './PageHeader.vue';
  import AddNewItem from './AddNewItem.vue';
  import { Vue, Component} from 'vue-property-decorator'

  @Component({
    components: {
      pageHeader: PageHeader,
      listItems: ListItems,
      addNewItem: AddNewItem,
    }
  })

  export default class HomePage extends Vue {
    
  }
</script>