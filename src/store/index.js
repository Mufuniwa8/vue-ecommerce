import { createStore } from 'vuex'

export default createStore({

  state: {
    shop: null,
    shops: null,
  },

  mutations: {
    setShops: (state, shops) => {
      state.shops = shops;
    },
    setShop: (state, shop) => {
      state.boot = shop;
    },
},

  actions: {
    getShops: async (context, id) => {
      fetch("https://mufuniwa8.github.io/data/db.json/"+ id)
      .then((response) => response.json())
      .then((shops) => context.commit("setShops", shops));
    },
    getShop: async function (context) {
      fetch("https://mufuniwa8.github.io/data/db.json")
        .then((response) => response.json())
        .then((shop) => context.commit("setShop", shop));
    },
  },

});



