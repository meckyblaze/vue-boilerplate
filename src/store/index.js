import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

import auth from "./modules/auth";

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({
      key: process.env.VUE_APP_NAME,
      Storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
