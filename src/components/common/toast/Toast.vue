<template>
  <transition>
    <div class="toast" v-show="isShow">{{message}}</div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;
      this.duration = duration;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>