export default {
  //勾选了的商品的数量
  cartLength(state, getters) {
    return getters.checkedCartItem.length
  },
  //全部商品
  fullCartList(state) {
    return state.cartList
  },
  //勾选了的商品
  checkedCartItem(state) {
    return state.cartList.filter(item => item.checked)
  }
}
