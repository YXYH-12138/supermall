<template>
  <div class="detaila">
    <nav-bar-detail class="nav-bar-detail"></nav-bar-detail>
  </div>
</template>

<script>
import NavBarDetail from "./childComps/NavBarDetail";

import { getDetailDatas } from "network/detail";

export default {
  name: "Detail",
  components: {
    NavBarDetail
  },
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    getDetailDatas(this.id).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
.nav-bar-detail {
  border-bottom: 2px solid #eee;
}
</style>