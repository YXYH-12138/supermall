<template>
  <swiper ref="homeSwiper">
    <swiper-item v-for="(item) in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  activated() {
    this.$refs.homeSwiper.startTimer();
  },
  deactivated() {
    this.$refs.homeSwiper.clearTimer();
  }
};
</script>

<style scoped>
#swiper-dv {
  height: 195px;
}
</style>