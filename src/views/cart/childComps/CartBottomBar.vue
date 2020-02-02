<template>
  <div class="bottom-bar">
    <div class="check-all">
      <CheckButton :class="{active:isActive}" @click.native="checkAllClick" />
      <span class="check-text">全选</span>
    </div>
    <div class="money-sum">
      <span>合计:￥</span>
      <span>{{cartSum}}</span>
    </div>
    <div class="to-calculate">去计算({{cartLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data() {
    return {
      isActive: false
    };
  },
  activated() {
    this.isActive = this.fullCartList.length > 0 && !this.checkIsFalse;
  },
  mounted() {
    this.$bus.$on("checkClick", () => {
      this.isActive = !this.checkIsFalse;
    });
  },
  computed: {
    ...mapGetters(["cartLength", "checkedCartItem", "fullCartList"]),
    cartSum() {
      return this.checkedCartItem
        .reduce((acc, cur) => {
          return acc + parseFloat(cur.lowNowPrice);
        }, 0)
        .toFixed(2);
    },
    //判断购物车中是否有没有选中的商品
    checkIsFalse() {
      return this.fullCartList.some(item => !item.checked);
    }
  },
  methods: {
    checkAllClick() {
      if (this.fullCartList.length === 0) return;
      this.isActive = !this.isActive;
      this.$store.commit("toggleCartList", this.isActive);
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: relative;
  background-color: rgba(236, 236, 236);
  display: flex;
  font-size: 16px;
}
.check-all {
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 10px;
  flex: 1;
}
.check-text {
  margin-left: 3px;
}
.money-sum {
  flex: 2;
  display: flex;
  align-items: center;
}
.to-calculate {
  flex: 1;
  line-height: 40px;
  text-align: center;
  background-color: rgb(255, 82, 0);
  color: #fff;
}
</style>