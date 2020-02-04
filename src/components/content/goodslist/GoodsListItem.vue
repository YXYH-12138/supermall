<template>
  <div class="goods-item" @click="detailClick">
    <img v-lazy="showImage" alt @load="imgLoad" />
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
      if (this.$route.path.includes("home")) {
        this.$bus.$emit("itemImgLoad");
      }
    },
    detailClick() {
      let id = this.goodsItem.iid;
      if (id) this.$router.push("/detail/" + id);
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.show
        ? this.goodsItem.show.img
        : this.goodsItem.image;
    }
  }
};
</script>

<style>
.goods-item {
  width: 48%;
  font-size: 16px;
  text-align: center;
  position: relative;
  padding-bottom: 44px;
  height: 316px;
}
.goods-item img {
  width: 100%;
  height: 270px;
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