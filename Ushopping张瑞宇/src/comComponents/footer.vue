<template>
  <div>
    <div class="footer">
      <router-link to="/home" activeClass="selected">
        <p class="iconfont icon-shouye size"></p>
        <!-- <img src="@/assets/images/iconIndex.jpg" alt="iconIndex" /> -->
        <p>首页</p>
      </router-link>
      <router-link to="/cart" activeClass="selected">
        <p class="iconfont icon-gouwuche size"></p>
        <!-- <img src="@/assets/images/iconCart.jpg" alt="iconIndex"> -->
        <p>购物车</p>
      </router-link>
      <router-link to="/mine" activeClass="selected">
          <p class="iconfont icon-wode size"></p>
          <!-- <img src="@/assets/images/iconMine.jpg" alt="iconIndex"> -->
          <p>我的</p>
        
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
.selected p {
  color: #ff5a05 !important;
}
.footer p.size{
  font-size: .53rem;
}
</style>
