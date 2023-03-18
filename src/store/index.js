import { createStore } from "vuex";

export default createStore({
  state: {
    id: "",
  },
  getters: {
    ID_PRODUCT: (state) => {
      return state.id;
    },
  },
  mutations: {
    SET_ID: (state, id) => {
      state.id = id;
    },
  },
});
