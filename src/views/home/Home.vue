<template>
  <div id="home">
    <nav-bar ref="navBar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="fixed_tab_control"
      class="fixed-tab-control"
      v-show="isTabConShow"
    ></tab-control>
    <scroll
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scroll($event,300)"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tab_control"></tab-control>
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="topClick" v-show="backTopShow" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";
import Scroll from "components/common/scroll/scroll";
import NavBar from "components/common/navbar/NavBar";

import { getHomeDatas, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

export default {
  name: "Home",
  mixins: [backTopMixin],
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    NavBar,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      TabOffsetTop: 0,
      isTabConShow: false,
      saveY: 0
    };
  },
  created() {
    this.getHomeMultidata();
    //商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
      if (this.TabOffsetTop == 0)
        this.TabOffsetTop =
          this.$refs.tab_control.$el.offsetTop -
          this.$refs.navBar.$el.offsetHeight;
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getPosition().y;
  },
  methods: {
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
    tabClick(index) {
      this.currentType = ["pop", "new", "sell"][index];
      this.$refs.fixed_tab_control.currentIndex = index;
      this.$refs.tab_control.currentIndex = index;
    },
    scroll(position, y = 500) {
      this.backTopShow = Math.abs(position.y) >= y;
      this.isTabConShow = this.TabOffsetTop <= Math.abs(position.y);
    },
    getHomeMultidata() {
      getHomeDatas().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        //告诉 better-scroll 数据已加载
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 999;
  font-size: 20px;
}

.fixed-tab-control {
  position: fixed;
  top: 44px;
  width: 100%;
}
</style>