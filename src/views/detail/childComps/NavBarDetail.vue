<template>
  <nav-bar>
    <div slot="left" @click="backClick">
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
    }
  }
};
</script>

<style scoped>
.titles {
  flex: 1;
  font-size: var(--font-size);
}
.back {
  vertical-align: middle;
}
.titles.active {
  color: var(--color-tint);
}
</style>