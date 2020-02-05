<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <svg :fill="item.iconColor" class="icon">
        <use :xlink:href="item.icon" />
      </svg>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  overflow: hidden;
  width: 50px;
}

.item .info {
  height: 100%;
  flex: 1;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
