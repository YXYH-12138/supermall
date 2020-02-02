export default {
  addCart({
    state,
    commit
  }, payload) {
    let objProduct = state.cartList.find(obj => obj.id == payload.id)
    if (objProduct) {
      commit('addCount', objProduct)
    } else {
      commit('addToCart', payload)
    }
  }
}
