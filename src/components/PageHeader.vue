<template>
    <h1>Welcome to todo app!</h1>
</template>

<script>
  import { Vue, Component} from 'vue-property-decorator';

  @Component
  export default class PageHeader extends Vue {
    
  }
</script>

<style>
    h1 {
        font-size: 40px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        text-align: center;
        margin: 40px;
    }
</style>
