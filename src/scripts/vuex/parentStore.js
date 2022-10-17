import { createStore } from 'vuex';
// import { db, auth } from '@/components/firebaseInit.js'
const store = createStore({
    modules: {
    },
    state() {
        return {
           orderItemsCount: 0
        }
    },
    mutations: {
        countItems(state) {
            state.orderItemsCount++
        }
    },
    actions: {
        countItems(context) {
            context.commit("countItems")
        }
    },
    getters: {
        currentOrderItemsCount(state) {
            return state.orderItemsCount
        }
    }
})

export default store;
