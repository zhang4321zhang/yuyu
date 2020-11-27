<template>
  <div class="page" id="box" v-cloak>
    <!-- header头部 -->
    <header class="headCon">
      <a class="logo" href="index.html">
        <img src="../../assets/images/logo.jpg" alt="logo" />
      </a>
      <input class="search" type="search" placeholder="寻找商品" />
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- nav导航 -->
    <nav class="navbar">
      <ul class="clearfix">
        <li class="active">
          <a href="#">推荐</a>
        </li>

        <!-- <li v-for="item in classify" :key="item.id">
          <router-link :to="'/goodList?id=' + item.id">{{
            item.name
          }}</router-link>
        </li>-->
      </ul>
      <div></div>
    </nav>
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="blue">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img
          style="width:100%;height:4rem"
          :src="item.img?$imgUrl + item.img:'https://tse2-mm.cn.bing.net/th/id/OIP.MKBq1HRhxIaBkBCZkLIGKQHaET?w=290&h=180&c=7&o=5&dpr=1.25&pid=1.7'"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格展示 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item text="限时抢购">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span class="gridTitle">限时抢购</span>
      </van-grid-item>
      <van-grid-item text="积分商城">
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span class="gridTitle">积分商城</span>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="gridTitle">联系我们</span>
      </van-grid-item>
      <van-grid-item to="/sort" text="商品分类">
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="gridTitle">商品分类</span>
      </van-grid-item>
    </van-grid>
    <!-- 限时秒杀limitTime -->
    <div class="limitTime">
      <div class="itemsL">
        <h3>
          <a href="#">限时秒杀</a>
        </h3>
        <p class="txt">
          <a href="#">每天零点场 优惠秒不停</a>
        </p>
        <p class="time clearfix">
          <span class="dotted">02</span>
          <span class="dotted">16</span>
          <span>45</span>
          <span class="yellow">秒杀</span>
        </p>
        <div class="img">
          <a href="#">
            <img src="../../assets/images/shop_5.jpg" alt="shop_5" />
          </a>
        </div>
        <div class="posi">&yen;14.8</div>
      </div>
      <div class="itemsR">
        <div class="brand">
          <div class="txt">
            <h3>
              <a href="#">品牌上新</a>
            </h3>
            <p>
              <a href="#">每日九点 抢大牌</a>
            </p>
            <a href="#" class="pic">
              <img src="../../assets/images/brand.jpg" alt="brand" />
            </a>
          </div>
          <a href="#" class="picR">
            <img src="../../assets/images/indexshop.jpg" alt="shop" />
          </a>
        </div>
        <div class="item">
          <div class="left">
            <h3>
              <a href="#">每日十件</a>
            </h3>
            <p>
              <a href="#">只为你选好货</a>
            </p>
            <a href="#" class="itemPic">
              <img src="../../assets/images/indexship2.jpg" alt="shop" />
            </a>
          </div>
          <div class="right">
            <h3>
              <a href="#">拼啊</a>
            </h3>
            <p>
              <a href="#">超级好价拼团</a>
            </p>
            <a href="#" class="itemPic2">
              <img src="../../assets/images/shop_3.jpg" alt="shop" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- tab标签页 -->
    <van-tabs type="card">
      <van-tab title="发现新品" style="height:5rem
    ">
        <!-- 商品卡片 -->
        <van-card
         @click="goDetail(item.id)"
          v-for="item in newsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="热门推荐" style="height:4rem
    ">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in hotsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品" style="height:5rem
    ">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in goodsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
    </van-tabs>
    <!-- <ul class="con">
        <li v-for="item in goodslist" :key="item.id">
          <div class="goodPic" style="width: 40%">
            <a href="#"><img :src="item.img" alt="shop_4" /></a>
          </div>
          <div class="goodInfo">
            <h4>
              <a href="#">{{ item.name }}</a>
            </h4>
            <p class="price">&yen;{{ item.price }}</p>
            <p class="bought">已售{{ item.bought }}件</p>

            <router-link to="/cart">
              <a href="#" class="btn">立即抢购</a>
            </router-link>
          </div>
        </li>
    </ul>-->
  </div>
</template>

<script>
import { getBanner, getIndexGoods } from "../../util/axios";
//单独调用axios
import axios from "axios";
//调用轻提示
import { Toast } from "vant";
export default {
  data() {
    return {
      bannerList: [],
      newsList: [],
      hotsList: [],
      goodsList: []
    };
  },
  mounted() {
    //组件加载获取轮播图接口
    //组件加载获取商品信息
    /* 
    并发处理
    import axios from 'axios'
    axios.all([接口1，接口2...])
    .then(axios.spread((响应1,响应2)=>{

    }))
    */
    //并发处理
    axios.all([getBanner(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        console.log(bannerList, "响应1");
        console.log(indexGoods, "响应2");
        if (bannerList.code == 200) {
          this.bannerList = bannerList.list;
          //   Toast.success(bannerList.msg);
        } else {
          Toast.fail(bannerList.msg);
        }
        if (indexGoods.code == 200) {
          this.newsList = indexGoods.list[0].content;
          this.hotsList = indexGoods.list[1].content;
          this.goodsList = indexGoods.list[2].content;
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },
  methods: {
    //封装一个跳转详情事件
    goDetail(id){
      this.$router.push({
        path:'/goodDetail',query:{
          id
        }
      })
    }
  }
};
</script>

<style lang="" scoped>
@import "../../assets/css/index.css";
</style>    