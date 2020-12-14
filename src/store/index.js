import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import CatsService from "@/services/CatsService.js";
import  CategoriesObject  from "../../db.js";

export default new Vuex.Store({
    state: {
        categories: [],
        cart: []
    },
    mutations: {
        GET_CATS(state, categories) {
            state.categories = categories;
        },
        ADD_TO_CART(state, newItem) {
            const index = state.cart.findIndex(item => item.id === newItem.id);
            if (index === -1) {
                state.cart.push(newItem);            
            } else {
                state.cart[index] = newItem;
            }
        },
        REMOVE_FROM_CART(state, itemId) {
            const index = state.cart.findIndex(item => item.id === itemId);
            state.cart.splice(index, 1);
        }
    },
    actions: {
        getCategories({ commit }) {
            // **************IF you run json-server ******************//
            // When I use free host i need a server and I dont have to put so much effort on this
            // so I use CategoriesObject file to get the categories from
            // and if I or anybody uses json-server localy it will run proberly
            let jsonResponse = null;
            CatsService.getCats().then(response => {
                if (response.status == 200) {
                    jsonResponse = response.data;
                }
            });

            if (jsonResponse) {
                commit("GET_CATS", jsonResponse);
            } else {
                commit("GET_CATS", CategoriesObject)
            }
        },
        addToCart({ commit }, payload) {
            commit("ADD_TO_CART", payload);
        },
        removeFromCart({ commit }, payload) {
            commit("REMOVE_FROM_CART", payload);
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
            var i = 0, 
                allProducts = [];
                for ( i; i < state.categories.length; i++ ) {
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
