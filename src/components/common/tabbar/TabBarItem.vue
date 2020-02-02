<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-active-img"></slot>
    <div :style="fontColor" class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    fontStyle: {
      type: String,
      default: "hotpink"
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    fontColor() {
      return this.isActive ? { color: this.fontStyle } : {};
    }
  }
};
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 16px;
}

.tabbar-item img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>