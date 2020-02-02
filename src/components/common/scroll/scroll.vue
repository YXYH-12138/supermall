<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    this.scroll.on("scrollEnd", position => {
      this.$emit("scrollEnd");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    scrollBy(x, y, time = 500) {
      this.scroll && this.scroll.scrollBy(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getPosition() {
      return { x: this.scroll.x, y: this.scroll.y };
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>