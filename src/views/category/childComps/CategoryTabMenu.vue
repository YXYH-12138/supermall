<template>
  <Scroll>
    <ul class="tab-menu">
      <li
        v-for="(item,index) in categories"
        :key="item.maitKey"
        class="tab-menu-item"
        @click="menuClick(index)"
        :class="{active:currenIndex===index}"
      >{{item.title}}</li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/scroll";

export default {
  name: "CategoryTabMenu",
  data() {
    return {
      currenIndex: 0
    };
  },
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    menuClick(index) {
      this.currenIndex = index;
      this.$emit("menuClick", index);
    }
  }
};
</script>

<style scoped>
.tab-menu {
  width: 100px;
  background-color: rgb(246, 246, 246);
  text-align: center;
  font-size: 16px;
}
.tab-menu-item {
  height: 44px;
  line-height: 44px;
}
.tab-menu-item.active {
  background-color: #fff;
  border-left: 2px solid var(--color-high-text);
}
</style>