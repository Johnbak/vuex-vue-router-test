import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import starwars from './modules/starwars'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    starwars
  }
})
