<template>
  <div class="detail-shop-info">
    <div class="shop-info-top clear-fix">
      <img class="shop-info-logo left" :src="shop.logo" />
      <h3 class="logo-name left">{{shop.name}}</h3>
    </div>
    <div class="shop-info-bottom">
      <div class="sells-count-info">
        <div class="info-sells">
          <div>{{fixedNum(shop.sells) | strNum}}</div>
          <div class="info-text">总销量</div>
        </div>
        <div class="info-count">
          <div>{{shop.goodsCount}}</div>
          <div class="info-text">全部宝贝</div>
        </div>
      </div>
      <div class="score-info">
        <div class="score" v-for="item in shop.score" :key="item.id">
          <span>{{item.name}}</span>
          <span class="item-score" :style="{color:setColor(item.isBetter)}">{{item.score}}</span>
          <span
            :style="{backgroundColor:setColor(item.isBetter)}"
            class="item-better"
          >{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom-enter">
      <span class="enter-text">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    setColor(isBetter) {
      return isBetter ? "rgb(254,77,56)" : "rgb(91,145,54)";
    },
    fixedNum(num) {
      return (num / 10000).toFixed(1);
    }
  },
  filters: {
    strNum(num) {
      if (isNaN(num)) return 0;
      return num + "万";
    }
  }
};
</script>

<style scoped>
.detail-shop-info {
  padding: 0 0 20px;
  border-bottom: 5px solid rgb(244, 244, 247);
}
.shop-info-top {
  padding: 20px 0;
}
.shop-info-logo {
  margin-left: 10px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.logo-name {
  padding-left: 10px;
  font-size: 16px;
  margin-top: 20px;
  font-weight: normal;
}
.shop-info-bottom {
  display: flex;
}
.shop-info-bottom > div {
  flex: 1;
}
.sells-count-info {
  display: flex;
  padding: 0 0 20px 10px;
  text-align: center;
}
.info-sells,
.info-count {
  flex: 1;
  color: #000000;
  font-weight: 700;
  font-size: 24px;
}
.info-count {
  border-right: 1px solid #ccc;
}
.info-text {
  padding-top: 10px;
  font-size: 12px;
  font-weight: 400;
}
.score-info {
  margin-left: 20px;
  font-size: 14px;
  margin-top: -5px;
}
.item-score {
  width: 40px;
  display: inline-block;
  margin-left: 15px;
}
.score-info .score + .score {
  margin-top: 5px;
}
.item-better {
  color: #ffffff;
}
.shop-bottom-enter {
  text-align: center;
  margin-top: 10px;
}
.enter-text {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>