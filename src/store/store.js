
// import {App} from 'vue'
import {createStore} from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

// App.use(Vuex)

const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export default store;

// export default new Vuex.Store({
//     // state,
//     actions,
//     getters,
//     mutations,
//     modules: {
//     },
//     strict: process.env.NODE_ENV !== 'production'
// })

