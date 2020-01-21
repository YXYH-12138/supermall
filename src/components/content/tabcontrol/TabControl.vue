<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item.id"
      class="tab-control-item"
      :class="{active:currentIndex==index}"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  position: sticky;
  top: 44px;
}
.tab-control-item {
  flex: 1;
  position: relative;
}
.tab-control-item.active {
  color: var(--color-high-text);
}
.tab-control-item.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>