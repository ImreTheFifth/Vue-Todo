<template>
    <router-link :to="{ name:'homePage'}" 
    tag='button' class='btn btn-primary' >Home</router-link>
</template>

<script>
    import { Vue, Component } from 'vue-property-decorator';

    @Component

    export default class HomeButton extends Vue {
    
  }

</script>