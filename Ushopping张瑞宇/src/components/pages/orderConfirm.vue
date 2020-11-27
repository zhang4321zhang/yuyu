<template>
  <div class="page">
    <!-- header头部 -->
    <header class="headCon">
      <a href="#" class="back"><img src="../../assets/images/arrowLeft (2).jpg" alt="" /></a>
      <h2>确认订单</h2>
      <div class="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- 收件人信息 -->
    <div class="consigneeInfo">
      <p class="userInfo">
        收货人：YouSu
        <span class="num">10000000000</span>
      </p>
      <p class="addrInfo">
        收货地址：<span class="address"
          >北京市海淀区隐牷路清林苑6号楼中公优就业总部3层</span
        >
      </p>
    </div>
    <!-- 订单信息 -->
    <div class="orderInfo">
      <div class="goodInfo">
        <div class="left">
          <a href="#" class="goodPic"
            ><img src="../../assets/images/shop_4.jpg" alt="shop_4"
          /></a>
          <div class="good">
            <a href="#" class="goodName">雅诗兰黛护肤霜</a>
            <p>规格：50g</p>
          </div>
        </div>
        <p class="price">&yen;123.00</p>
      </div>
      <div class="numInfo">
        <p class="txt">购买数量</p>
        <p class="square">
          <span class="addOrDesc">-</span>
          <input type="text" placeholder="1" />
          <span class="addOrDesc">+</span>
        </p>
      </div>
      <div class="deliver">
        <p>配送方式</p>
        <p>xx快递</p>
      </div>
    </div>
    <!-- 优惠信息 -->
    <div class="discount">
      <div class="coupon">
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div class="bounds">
        <p>使用积分</p>
        <div>
          <input type="text" placeholder="输入积分" />
          <a href="#">使用</a>
          <p>可用<span>50</span>积分</p>
        </div>
      </div>
    </div>
    <!-- 汇总信息 -->
    <div class="allInfo">
      <ul>
        <li>
          <p class="txt">商品金额</p>
          <p class="number">&yen;123.00</p>
        </li>
        <li>
          <p class="txt">运费</p>
          <p class="number">+&yen;0.00</p>
        </li>
        <li>
          <p class="txt">优惠券</p>
          <p class="number">-&yen;0.00</p>
        </li>
        <li>
          <p class="txt">会员优惠</p>
          <p class="number">-&yen;0.00</p>
        </li>
      </ul>
      <p class="payment">实付金额：<span>&yen;123.00</span></p>
      <a href="#" class="submit">提交订单</a>
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
@import '../../assets/css/orderConfirm.css'
</style>
