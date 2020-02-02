export default {
  //增加同一商品的数量
  addCount(state, payload) {
    payload.count++;
  },
  //添加到购物车
  addToCart(state, payload) {
    state.cartList.push(payload)
  },
  toggleCartList(state, payload) {
    state.cartList.forEach(item => {
      if (item.checked !== payload) {
        item.checked = !item.checked
      }
    })
  },
  //变换当前商品是否是选中状态
  toggleCartItem(state, payload) {
    payload.checked = !payload.checked
  }
}
