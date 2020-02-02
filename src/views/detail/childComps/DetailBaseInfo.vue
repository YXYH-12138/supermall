<template>
  <div class="detail-base-info" v-if="Object.keys(datas).length>=0">
    <p class="info-title">{{datas.title}}</p>
    <div class="info-base-price">
      <span class="price">{{datas.price}}</span>
      <span v-if="datas.oldPrice" class="oldPrice">{{datas.oldPrice}}</span>
      <span v-if="datas.discountDesc" class="discountDesc">{{datas.discountDesc}}</span>
    </div>
    <div class="info-columns">
      <div v-for="item in datas.columns" :key="item.id" class="col-item">{{item}}</div>
    </div>
    <div class="info-services">
      <div v-for="item in datas.services" :key="item.id">
        <img v-if="item.icon" :src="item.icon" class="services-icon" />
        <span class="services-name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    datas: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detail-base-info {
  padding: 15px 8px 0;
  border-bottom: 2px solid #eee;
}
.info-title {
  color: black;
  font-size: 18px;
}
.info-base-price {
  padding: 10px 0 20px;
}
.price {
  color: var(--color-high-text);
  font-size: 20px;
}
.oldPrice {
  font-size: 12px;
  margin: 0 10px;
  text-decoration: line-through;
}
.discountDesc {
  color: #ffffff;
  background-color: var(--color-high-text);
  font-size: 12px;
  border-radius: 10px;
  padding: 1px 3px;
  vertical-align: top;
}
.info-columns {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding-bottom: 8px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.2);
}
.col-item {
  flex: 1;
}
.col-item:first-child {
  text-align: left;
}
.col-item:last-child {
  text-align: right;
}
.info-services {
  display: flex;
  font-size: 14px;
  padding: 20px 0;
  white-space: nowrap;
  flex-wrap: wrap;
}
.info-services > div {
  flex: 1;
}
.services-icon {
  width: 14px;
  height: 14px;
  vertical-align: -2px;
}
</style>