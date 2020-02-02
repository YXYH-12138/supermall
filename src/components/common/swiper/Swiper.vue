<template>
  <div id="swiper-dv">
    <div class="swiper" ref="swiper">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator">
        <div
          v-for="(item,index) in slideCount"
          :key="item.id"
          class="ind-item"
          :class=" {active:index==currentIndex-1}"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    }
  },
  data() {
    return {
      slideCount: 0, // 元素个数
      currentIndex: 1, // 当前的index
      timer: null,
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      isScroll: true //滚动是否完成
    };
  },
  updated() {
    if (this.slideCount == 0)
      this.slideCount = this.$refs.swiper.children.length;
  },
  methods: {
    //注册相应事件
    addEvent() {
      //开始点击的坐标
      let startX = 0;
      //拖动的距离
      let distance = 0;
      let swiper = document.querySelector(".swiper");
      //给swiper注册过渡完成事件
      swiper.addEventListener("transitionend", () => {
        // this.isScroll = true;
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
          this.setTransform(-this.totalWidth, 0);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.totalWidth * this.currentIndex, 0);
        }
      });
      swiper.addEventListener("touchstart", e => {
        this.clearTimer();
        startX = e.touches[0].clientX;
      });
      swiper.addEventListener("touchmove", e => {
        distance = e.touches[0].clientX - startX;
        this.setTransform(-this.totalWidth * this.currentIndex + distance, 0);
      });
      swiper.addEventListener("touchend", e => {
        if (Math.abs(distance) >= this.totalWidth * this.moveRatio) {
          distance > 0 ? this.currentIndex-- : this.currentIndex++;
        }
        this.setTransform(-this.totalWidth * this.currentIndex);
        distance = 0;
        this.startTimer();
      });
    },
    //Dom的相关处理 --记录指示器数量 克隆图片 事件注册等
    handleDom() {
      let swiper = this.$refs.swiper;
      let swiperItem = swiper.children;
      //记录指示器数量
      this.slideCount = swiperItem.length;
      if (this.slideCount <= 1) return;
      //记录宽度
      this.totalWidth = swiper.offsetWidth;
      //记录样式
      this.swiperStyle = swiper.style;
      //克隆第一张图片到最后
      swiper.appendChild(swiperItem[0].cloneNode(true));
      //克隆最后一张图片到第一张
      swiper.insertBefore(
        swiperItem[this.slideCount - 1].cloneNode(true),
        swiperItem[0]
      );
      //显示第二张图片
      this.setTransform(-this.totalWidth, 0);
      this.addEvent();
    },
    startTimer() {
      if (this.timer || this.slideCount <= 1) return;
      this.timer = setInterval(() => {
        this.currentIndex++;
        this.setTransform();
      }, this.interval);
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    setTransform(
      distance = -this.totalWidth * this.currentIndex,
      duration = this.animDuration
    ) {
      this.swiperStyle.transition = `transform ${duration}ms`;
      this.swiperStyle.transform = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${distance}px, 0, 0)`;
      // this.isScroll = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      //开启定时器
      this.startTimer();
    }, 200);
  }
};
</script>

<style scoped>
#swiper-dv {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  position: absolute;
  bottom: 8px;
  justify-content: center;
  width: 100%;
}
.ind-item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 5px;
}
.ind-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>