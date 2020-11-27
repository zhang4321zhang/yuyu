<template>
  <div class="page">
    <header class="headCon">
      <a href="#" class="back"><img src="../../assets/images/arrowLeft (2).jpg" alt="" /></a>
      <h2>商品详情====={{$route.query.id}}</h2>
      <div class="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <div class="intro">
      <a href="#" class="goodPic"
        ><img src="../../assets/images/picDetail_1.jpg" alt="picDetail_1"
      /></a>
      <a href="#" class="goodName">
       {{title}}
      </a>
      <p><span>&yen;123.00</span>（此价格不与套装优惠同享）</p>
    </div>
    <div class="main">
      <dl class="discount">
        <dt class="title">促销:</dt>
        <dd><span>满减</span> 满2件9折；3件8折</dd>
      </dl>
      <dl class="number">
        <dt class="title">购买数量</dt>
        <dd>
          <span class="addOrDesc add">-</span><span class="one">1</span
          ><span class="addOrDesc desc">+</span>
        </dd>
      </dl>
      <dl class="attribute">
        <dt>商品属性</dt>

        <dd>规格<span class="red">30g</span><span class="grey">5g</span></dd>
      </dl>
    </div>
    <div class="detail">
      <h3>商品详情</h3>
      <img src="../../assets/images/picDetail_3.jpg" alt="picDetail_3" />
      <img src="../../assets/images/picDetail_4.jpg" alt="picDetail_4" />
      <img src="../../assets/images/picDetail_5.jpg" alt="picDetail_5" />
      <img src="../../assets/images/picDetail_6.jpg" alt="picDetail_6" />
      <img src="../../assets/images/picDetail_7.jpg" alt="picDetail_7" />
    </div>
    <div class="comment">
      <h4>商品评价</h4>
      <a href="#" class="userName">1235668fg</a>
      <p class="con">效果很好，物流到位，下次继续来。</p>
      <div class="pic">
        <img src="../../assets/images/picDetail_8.jpg" alt="picDetail_8" />
        <img src="../../assets/images/picDetail_9.jpg" alt="picDetail_9" />
        <img src="../../assets/images/picDetail_10.jpg" alt="picDetail_10" />
      </div>
      <p class="date">2020-01-22</p>
      <div class="num">
        <p>共<span>1000+</span>评论</p>
        <a href="#" class="more">查看更多</a>
0      </div>
    </div>
    <div class="foot">
      <a href="#" class="active">
        <div>
          <img src="../../assets/images/iconCart.jpg" alt="iconCart" />
          <span>2</span>
        </div>
        <p>购物车</p>
      </a>
      <div class="btn">
        <a href="cart.html" class="cart"> 加入购物车 </a>
        <a href="orderConfirm.html" class="now"> 立即购买 </a>
      </div>
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
@import '../../assets/css/detail.css'
</style>