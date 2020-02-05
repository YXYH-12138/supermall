<template>
  <div class="bottom-bar">
    <div class="check-all">
      <CheckButton :class="{active:isCheck}" @click.native="checkAllClick" />
      <span class="check-text">全选</span>
    </div>
    <div class="money-sum">
      <span>合计:￥</span>
      <span>{{cartSum}}</span>
    </div>
    <div class="to-calculate" @click="calculateClick">去计算({{cartLength}})</div>
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
  computed: {
    ...mapGetters(["cartLength", "checkedCartItem", "fullCartList"]),
    cartSum() {
      return this.checkedCartItem
        .reduce((acc, cur) => {
          return acc + parseFloat(cur.lowNowPrice);
        }, 0)
        .toFixed(2);
    },
    isCheck() {
      return (
        this.fullCartList.length > 0 &&
        !this.fullCartList.some(item => !item.checked)
      );
    }
  },
  methods: {
    checkAllClick() {
      this.$store.commit("toggleCartList", !this.isCheck);
    },
    calculateClick() {
      if (!this.checkedCartItem.length) {
        this.$toast.show("无商品");
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
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