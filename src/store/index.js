import { createStore } from 'vuex'

export default createStore({

  state: {
    boot: null,
    boots: null,
  },

  getters: {
  },
  
  mutations: {
    setBoots: (state, boots) => {
      state.boots = boots;
    },
    setBoot: (state, boot) => {
      state.boot = boot;
    },
},

  actions: {
    getBoots: async (context) => {
      fetch("http://locaclhost:3000/boots")
      .then((res) => response.json())
      .then((boots) => context.commit("setBoots", boots));
    },
    getBoot: async (context,id) => {
      fetch("http://locaclhost:3000/boots/" + id)
      .then((res) => response.json())
      .then((boot) => context.commit("setBoot", boot));
    },
  },

  modules: {
  }
});



