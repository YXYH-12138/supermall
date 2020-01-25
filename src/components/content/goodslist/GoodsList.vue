<template>
  <div class="goods">
    <goods-item :goodsItem="item" v-for="item in goods" :key="item.id" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>