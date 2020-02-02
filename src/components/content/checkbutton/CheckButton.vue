<template>
  <div class="check-button" :class="{active:checked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: ["checked"]
};
</script>

<style scoped>
.check-button {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ccc;
}
.check-button img {
  margin: 50% 50%;
  transform: translate3d(-50%, -50%, 0);
}
.check-button.active {
  background-color: red;
}
</style>