<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
  background-color: #fff;
  z-index: 999999;
}
</style>