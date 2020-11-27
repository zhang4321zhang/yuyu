<template>
  <div>
    <div class="page">
      <!-- header头部 -->
      <header class="headCon">
        <a href="#" class="back"
          ><img src="../../assets/images/arrowLeft (2).jpg" alt=""
        /></a>
        <h2>我的订单</h2>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="userArea">
        <div class="mine">
          <a href="#" class="minePic"></a>
          <div class="nameAndLevel">
            <a href="#" class="name">悠溯</a>
            <a href="#" class="level">V1</a>
          </div>
        </div>
        <a href="#" class="register">每日签到</a>
      </div>
      <!-- icons -->
      <div class="icons">
        <a href="#">
          <img src="../../assets/images/iconMine_1.jpg" alt="iconMine_1" />
          <p>全部订单</p>
        </a>
        <a href="#">
          <img src="../../assets/images/iconMine_2.jpg" alt="iconMine_1" />
          <p>待付款</p>
        </a>
        <a href="#">
          <img src="../../assets/images/iconMine_3.jpg" alt="iconMine_1" />
          <p>待收货</p>
        </a>
      </div>
      <!-- manageArea -->
      <ul class="manageArea">
        <li class="address">
          <a href="#">地址管理</a>
        </li>
        <li class="wallet">
          <a href="#">我的钱包</a>
        </li>
        <li class="coupon">
          <a href="#">我的优惠券</a>
        </li>
        <li class="erweima">
          <a href="#">我的二维码</a>
        </li>
        <li class="friends">
          <a href="#">我的小伙伴</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/mine.css";
</style>