<template>
        <div>
            <ul class="list-group">
                <li class=list-group-item 
                    :class="{'is-complete':item.isCompleted}"
                    v-for="(item, index) in getItems" 
                    :key="index"
                    @click.self="item.isCompleted = !item.isCompleted">{{ item.name }}
                    <delete-button class="deleteButton" :index="index"></delete-button>
                    <details-button class="detailsButton" :index="index"></details-button>   
                </li>
            </ul>
        </div>  
</template>

<script>
import DeleteButton from './DeleteButton.vue';
import DetailsButton from './DetailsButton.vue';
import { mapGetters } from  'vuex';
import { Vue, Component } from 'vue-property-decorator';

  @Component({
    computed: {
        ...mapGetters([
            'getItems'
        ])
    },
    components: {
        deleteButton: DeleteButton,
        detailsButton: DetailsButton
    },
  })

  export default class ListItems extends Vue {
    
  }
  
</script>>

<style scoped>

    li {
        text-align: center;
        cursor: pointer;
    }

    .deleteButton {
        float: right;
    }

    .detailsButton {
        float: right;
        
    }

    .is-complete {
        text-decoration: line-through;
    }
</style>