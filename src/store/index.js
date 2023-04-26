import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {
      token: "",
      isAuthenticated: false,
    },
    userGroups: [], // add a new property to store user groups
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.user.token = localStorage.getItem("token");
        state.user.isAuthenticated = true;
      } else {
        state.user.token = "";
        state.user.isAuthenticated = false;
      }
    },
    setToken(state, token) {
      state.user.token = token;
      state.user.isAuthenticated = true;
    },
    removeToken(state) {
      state.user.token = "";
      state.user.isAuthenticated = false;
    },
    setUserGroups(state, groups) {
      // add a new mutation to update user
      state.userGroups = groups;
    },
  },
  actions: {
    fetchUserGroups({ commit }) {
      axios
        .get("authentication/group-view/")
        .then((response) => {
          commit("setUserGroups", response.data.groups);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
