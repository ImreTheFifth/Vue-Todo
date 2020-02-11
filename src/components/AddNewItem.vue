<template>
    <div>
        <input v-model='itemToAdd' @keypress.enter="addItem()" placeholder="Add todo">
        <button class="btn btn-primary" @click="addItem()">Add to todos!</button>    
    </div>
</template>

<script>
import uuid from 'uuid';
import { mapActions, mapGetters } from  'vuex';
import { Vue, Component} from 'vue-property-decorator'

  @Component({
    computed: {
        ...mapGetters ([
            'getItems'
        ]),
        itemToAdd: {
            get () {
                return this.$store.state.itemToAdd
            },
            set (value) {
                this.$store.commit('updateAddItem', value)
            }
        }
    },
    methods: {
        ...mapActions ([
            'deleteItem',
            'addItem',
            'updateAddItem'
        ])
    }
  })

  export default class AddNewItem extends Vue {
    
  }
</script>

<style scoped>
    .btn-primary {
        background-color: black;
    }
</style>