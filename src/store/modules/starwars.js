import StarwarService from '@/api/StarwarService'

const state = {
    posts : "hi",
    profile : []
}

const getters = {}

const mutations = {
    SET_PROFILE (state,data) {
        state.profile = data
      }
}
const actions = {
    loadProfile : ({commit}) => 
    StarwarService.getStarwar().then(
        post=>{
            commit('SET_PROFILE',post)
        }
    ).catch(error=> console.log(error))
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
