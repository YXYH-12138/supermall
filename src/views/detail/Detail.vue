<template>
  <div class="detaila">
    <div class="detail-nav">
      <nav-bar-detail
        class="nav-bar-detail"
        @topClick="navBarClick"
        ref="navBarDetail"
        v-show="imgLoadEnd"
      />
    </div>
    <scroll
      ref="scroll"
      @scroll="scrollDetail($event,300)"
      :probeType="3"
      @scrollEnd="scrollEnd"
      class="content"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :datas="datas"></detail-base-info>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <DeatilParamInfo :goodsParams="goodsParams" ref="paramInfo" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="commentInfo" />
      <GoodsList :goods="recommends" class="goods-list" ref="recommends" />
    </scroll>
    <back-top @click.native="topClick" v-show="backTopShow" />
    <DetailBottomBar @addClick="addClick" />
  </div>
</template>

<script>
import NavBarDetail from "./childComps/NavBarDetail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DeatilParamInfo from "./childComps/DeatilParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "components/content/goodslist/GoodsList";
import Scroll from "components/common/scroll/scroll";

import { backTopMixin } from "common/mixin";

import {
  getDetailDatas,
  Goods,
  Shop,
  GoodsParams,
  getRecommend
} from "network/detail";

export default {
  name: "Detail",
  mixins: [backTopMixin],
  components: {
    NavBarDetail,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DeatilParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return {
      id: null,
      topImages: [],
      datas: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      topBarScrollY: [],
      imgLoadEnd: false,
      flag: true
    };
  },
  created() {
    this.id = this.$route.params.id;
    getDetailDatas(this.id).then(res => {
      // console.log(res);
      const result = res.result;
      //轮播图数据
      this.topImages = result.itemInfo.topImages;
      //商品信息
      this.datas = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      //店铺信息
      this.shop = new Shop(result.shopInfo);
      //商品详情数据
      this.detailInfo = result.detailInfo;
      this.goodsParams = new GoodsParams(
        result.itemParams.info,
        result.itemParams.rule
      );
      //获取评论信息
      if (result.rate.cRate !== 0) {
        this.commentInfo = result.rate.list[0];
      }
      //详情页展示数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.imgLoadEnd = true;
      //异步的Dom渲染完毕后执行
      this.$nextTick(() => {
        // this.topBarScrollY = [];
        let navBarHeight = this.$refs.navBarDetail.$el.offsetHeight;
        this.topBarScrollY.push(0);
        this.topBarScrollY.push(
          this.$refs.paramInfo.$el.offsetTop - navBarHeight
        );
        this.topBarScrollY.push(
          this.$refs.commentInfo.$el.offsetTop - navBarHeight
        );
        this.topBarScrollY.push(
          this.$refs.recommends.$el.offsetTop - navBarHeight
        );
      });
    },
    navBarClick(index) {
      this.flag = false;
      this.$refs.scroll.scrollTo(0, -this.topBarScrollY[index]);
    },
    scrollDetail(position, y = 500) {
      this.backTopShow = Math.abs(position.y) >= y;
      if (!this.flag) return;
      this.topBarScrollY.forEach((value, index, arr) => {
        if (Math.abs(position.y) > value) {
          this.$refs.navBarDetail.currentIndex = index;
        }
      });
    },
    scrollEnd() {
      this.flag = true;
    },
    addClick() {
      const product = {
        image: this.topImages[0],
        title: this.datas.title,
        lowNowPrice: this.datas.lowNowPrice,
        id: this.id,
        count: 1,
        desc: this.datas.desc,
        checked: true
      };
      this.$store.dispatch("addCart", product);
    }
  }
};
</script>

<style scoped>
.detaila {
  position: relative;
  z-index: 9;
}
.nav-bar-detail {
  border-bottom: 2px solid #eee;
}
.detail-nav {
  height: 44px;
}
.goods-list {
  padding-top: 10px;
}
.content {
  background-color: #fff;
  height: calc(100vh - 44px - 49px);
}
</style>