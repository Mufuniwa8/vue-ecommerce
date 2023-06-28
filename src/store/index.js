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
    mutations: {
      setBoot: (state, boot) => {
        state.boot = boot;
      },
  },
},

  actions: {
    getBoots: async (context) => {
      fetch("http://locaclhost:3000/boots")
      .then((res) => res.json())
      .then((boots) => context.commit("setboots", boots));
    },
    getBoot: async (context) => {
      fetch("http://locaclhost:3000/boots/" + id)
      .then((res) => res.json())
      .then((boot) => context.commit("setboot", boot));
    },
  },

  modules: {
  }
});



