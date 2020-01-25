<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.nav-bar-left,
.nav-bar-right {
  width: 60px;
}
.nav-bar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>