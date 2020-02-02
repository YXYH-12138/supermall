<template>
  <div class="detail-param-info" v-if="Object.keys(goodsParams).length !== 0">
    <table class="info-size" v-for="item in goodsParams.tables" :key="item.id">
      <tr v-for="table in item" :key="table.id" class="table-tr-info">
        <td v-for="tableitem in table" :key="tableitem.id">{{tableitem}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="info in goodsParams.infos" :key="info.id">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.image.length !== 0">
      <img :src="img" v-for="img in images" :key="img.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DeatilParamInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      images: null
    };
  },
  watch: {
    goodsParams() {
      this.images = Array.isArray(this.goodsParams.image)
        ? goodsParams.image
        : Array.of(this.goodsParams.image);
    }
  }
};
</script>

<style scoped>
.detail-param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-param-info table {
  width: 100%;
  border-collapse: collapse;
}
.detail-param-info tr {
  height: 42px;
}
.info-size tr,
.info-param tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.table-tr-info td:first-child {
  width: 95px;
}
.param-key {
  width: 95px;
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>