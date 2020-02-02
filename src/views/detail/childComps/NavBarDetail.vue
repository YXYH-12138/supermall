<template>
  <nav-bar>
    <div slot="left" @click="backClick" class="detail-navbar-left">
      <img src="~assets/img/common/back.svg" alt class="back" />
    </div>
    <div
      slot="center"
      v-for="(item,index) in titles"
      :key="item.id"
      class="titles"
      @click="itemClick(index)"
      :class="{active:currentIndex===index}"
    >{{item}}</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "NavBarDetail",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("topClick", index);
    }
  }
};
</script>

<style scoped>
.detail-navbar-left {
  width: 100%;
  height: 100%;
  position: relative;
}
.titles {
  flex: 1;
  font-size: 16px;
}
.back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.titles.active {
  color: var(--color-tint);
}
</style>