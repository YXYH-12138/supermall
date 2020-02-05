<template>
  <div id="user-info" class="clear-fix">
    <div class="user-icon">
      <slot name="user-icon">
        <img src="~assets/img/profile/profile.jpg" alt />
      </slot>
    </div>
    <div class="login-info left">
      <slot name="user-nickname">
        <div>登录/注册</div>
      </slot>
      <div class="phone">
        <slot name="user-phone">暂无绑定手机号</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style scoped>
.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.user-icon img {
  width: 40px;
}
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
  position: relative;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 50px;
}

#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}
</style>
