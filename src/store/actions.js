
const actions = {
  togglePageLoader({ commit }, val = false) {
    commit("TOGGLE_LOADER", val);
  },
  fetchOrders({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/orders")
        .then((response) => {
          if(response.data.success){
            commit('SET_ORDERS', response.data.orders)
          }
          resolve(response)
        }).catch((error) => { reject(error) })
    })
  },
  fetchCategories({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/categories")
        .then((response) => {
          if(response.data.success){
            commit('SET_CATEGORIES', response.data.categories)
            let products = []
            response.data.categories.forEach(cat => products.push(...cat.products))
            commit('SET_PRODUCTS', products)
          }
          resolve(response)
        }).catch((error) => { reject(error) })
    })
  },
  getClientCountry({commit}, val = false){
    fetch('https://api.ipregistry.co/?key=tryout')
      .then(function (response) {
          return response.json();
      })
      .then(function (payload) {
        commit('SET_COUNTRY', payload.location.country);
      });
  },
}

export default actions
