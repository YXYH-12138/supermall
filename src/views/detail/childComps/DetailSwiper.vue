<template>
  <swiper class="detail-swiper">
    <SwiperItem v-for="item in topImages" :key="item.id" class="detail-swiper-item">
      <img :src="item" alt />
    </SwiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
.detail-swiper-item {
  height: 300px;
}
</style>