<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-header">
      <div class="header-appraise left">用户评价</div>
      <div class="header-more right">更多</div>
    </div>
    <div class="info-detail">
      <div class="user-info">
        <img :src="commentInfo.user.avatar" class="user-img" alt />
        <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
      <div class="user-comment">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      // return new Intl.DateTimeFormat("zh-CN").format(value).replace(/\//g, "-");
      return dateTimeFormat(value * 1000, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comment-info {
  padding: 0px 15px 25px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.comment-header {
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.user-info {
  padding: 10px 0 5px;
}
.user-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user-name {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.user-comment p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}
.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>