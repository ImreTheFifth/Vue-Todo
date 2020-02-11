import Vue from "vue";
import Vuex from "vuex";
import uuid from "uuid";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [
      {
        name: "kutyát sétáltatni",
        id: uuid.v4(),
        isCompleted: false
      },
      {
        name: "futni",
        id: uuid.v4(),
        isCompleted: false
      },
      {
        name: "ebédelni",
        id: uuid.v4(),
        isCompleted: true
      }
    ],
    itemToAdd: ""
  },
  mutations: {
    deleteItem(state, index) {
      state.items.splice(index, 1);
    },

    updateAddItem(state, itemToAdd) {
      state.itemToAdd = itemToAdd;
    },

    addItem(state) {
      if (state.itemToAdd) {
        state.items.push({
          name: state.itemToAdd,
          id: uuid.v4(),
          isCompleted: false
        });
      }
      state.itemToAdd = "";
    }
  },
  actions: {
    addItem: ({ commit }) => {
      commit("addItem");
    },

    deleteItem: ({ commit, state }, index) => {
      commit("deleteItem", index);
    },

    updateAddItem: ({ commit }) => {
      commit("updateAddItem");
    }
  },
  getters: {
    getItems: state => state.items
  }
});
