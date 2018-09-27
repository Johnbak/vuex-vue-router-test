const state = {
    all: [
      { id: 1, text: 'water', done: true },
      { id: 2, text: 'food', done: false },
      { id: 3, text: 'snack', done: true },
      { id: 4, text: 'fruit', done: true }
    ] ,
    count : 1
  }

  // getters
const getters = {
  doneProduct: (state) => {
    return state.all.filter(all => all.done)
  },getProductById: (state) => (id) => {
    return state.all.find(all => all.id === id)
  },getCountMutiple:(state)=>(num)=>{
    return state.count*num
  }
}

// Actions can contain arbitrary asynchronous operations.
const actions = {
  increment: ({ commit }, num) => commit('INCREMENT_COUNT', num),
  decrement:({commit},num)=> commit('DECREMENT_COUNT',num),
  removeItem:({commit},key)=> commit('REMOVE_ITEM',key)
}

// mutations
const mutations = {
  INCREMENT_COUNT (state,num) {
    state.count+=num
  },DECREMENT_COUNT (state,num) {
    state.count-=num
  },REMOVE_ITEM: (state, key) => {        // Add this:
    console.log(key);
     state.all.splice(state.all.findIndex(v => v.id === key), 1); 
    // state.all.splice(key, 1)
  }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }