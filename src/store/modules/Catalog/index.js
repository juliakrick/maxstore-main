import state from './store'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}