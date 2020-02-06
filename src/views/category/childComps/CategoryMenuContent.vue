<template>
  <Scroll ref="scroll">
    <div class="category-menu-content">
      <div class="menu-content-top">
        <div class="menu-content-item" v-for="item in categoryDataItem" :key="item.link">
          <a :href="item.link">
            <div class="item-image">
              <img :src="item.image" alt @load="imgLoad" />
            </div>
            <div class="item-text">{{item.title}}</div>
          </a>
        </div>
      </div>
      <div class="menu-content-bottom" v-if="Object.keys(menuDetail).length>0">
        <TabControl :titles="['综合', '新品', '销量']" @tabClick="tabClick" />
        <GoodsList :goods="menuDetail" class="category-goods" />
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/scroll";

import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";

export default {
  name: "CategoryMenuContent",
  components: {
    Scroll,
    TabControl,
    GoodsList
  },
  data() {
    return {
      imgLength: 0
    };
  },
  props: {
    categoryDataItem: {
      type: Array,
      default() {
        return [];
      }
    },
    menuDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.imgLength === this.categoryDataItem.length) {
        this.imgLength = 0;
        this.$refs.scroll.refresh();
      }
    },
    tabClick(index) {
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.menu-content-top {
  display: flex;
  flex-wrap: wrap;
}
.menu-content-item {
  text-align: center;
  width: 33.333%;
  font-size: 16px;
  margin-top: 10px;
}
.item-image img {
  width: 55px;
}
.item-text {
  padding: 3px 0 10px;
}
</style>

<style >
.category-goods .goods-item {
  height: 250px;
}
.category-goods .goods-item img {
  height: 200px;
}
</style>