<template>
  <div class="goods-item" @click="detailClick">
    <img :src="goodsItem.show.img" alt @load="imgLoad" />
    <div class="item-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    detailClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style>
.goods-item {
  width: 48%;
  font-size: 14px;
  text-align: center;
  position: relative;
  padding-bottom: 44px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item .price {
  color: var(--color-high-text);
}
.goods-item .price::after {
  content: "";
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-left: 8px;
  vertical-align: -1.5px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
.goods-item .item-info {
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}
</style>