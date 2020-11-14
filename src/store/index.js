import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import CatsService from "@/services/CatsService.js";

export default new Vuex.Store({
    state: {
        categories: []
    },
    mutations: {
        GET_CATS(state, categories) {
            state.categories = categories;
        }
    },
    actions: {
        getCategories({ commit }) {
            CatsService.getCats().then(response => {
                commit("GET_CATS", response.data);
            });
        }
    },
    getters: {
        getRecentProducts: state => {
            var recentProducts = [],
                i = 0;

            for (i; i < state.categories.length; i++) {
                if (state.categories[i].sorts) {
                    for (let z = 0; z < state.categories[i].sorts.length; z++) {
                        let recentTwo =
                            state.categories[i].sorts[z].products[0];

                        recentProducts.push(recentTwo);
                    }
                }

                if (!state.categories[i].sorts) {
                    let recentTwo = state.categories[i].products.slice(0, 2);
                    for (let z = 0; z < recentTwo.length; z++) {
                        recentProducts.push(recentTwo[z]);
                    }
                }
            }
            return recentProducts;
        },
        getAllProducts(state) {
            var i = 0, allProducts = [];
                
                for (i; i < state.categories.length; i++) {
                    if (state.categories[i].sorts) {
                        for (let z = 0; z < state.categories[i].sorts.length; z++) {    
                            for (let n = 0; n < state.categories[i].sorts[z].products.length; n++) {
                                allProducts.push(state.categories[i].sorts[z].products[n])
                            }
                        }
                    }

                    if (!state.categories[i].sorts) {
                        for (let z = 0; z < state.categories[i].products.length; z++) {
                            allProducts.push(state.categories[i].products[z]);
                        }
                    }
                }   
                return allProducts; 
        }
    }
});
