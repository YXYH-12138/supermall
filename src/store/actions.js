export default {
  addCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      let objProduct = state.cartList.find(obj => obj.id == payload.id)
      if (objProduct) {
        commit('addCount', objProduct)
        resolve("当前商品数量增加成功")
      } else {
        commit('addToCart', payload)
        resolve("商品添加成功")
      }
    })
  }
}
