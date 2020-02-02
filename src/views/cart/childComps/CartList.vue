<template>
  <Scroll class="cart-scroll">
    <CartListItem v-for="(item,index) in fullCartList" :key="index" :cartGoods="item" />
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/scroll";

import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["fullCartList"])
  }
};
</script>

<style scoped>
.cart-scroll {
  height: calc(100vh - 44px - 49px - 40px);
}
</style>