import { createStore } from 'vuex'

const mufuniwa = "https://mufuniwa8.github.io/data/db.json"

export default createStore({

  state: {
    shop: null,
    products: null,
  },

  mutations: {
    setShops: (state, shops) => {
      state.shops = shops;
    },
    setProducts: (state, Products) => {
      state.Products = Products;
    },
},

  actions: {
    getShops: async (context) => {
      fetch("mufuniwa")
      .then((response) => response.json())
      .then((shops) => context.commit("setShops", shops));
    },
    getProducts: async (context) => {
      fetch("mufuniwa")
      .then((response) => response.json())
      .then((products) => context.commit("setProducts", products));
    },
  },

});



