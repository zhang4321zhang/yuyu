<template>
  <div class="page">
    <!-- header头部 -->
    <header class="headCon">
      <a href="#" class="back"
        ><img src="../../assets/images/arrowLeft.jpg" alt=""
      /></a>
      <a href="index.html" class="logo"
        ><img src="../../assets/images/logo.jpg" alt="logo"
      /></a>
      <div class="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- search搜索框 -->
    <div class="search">
      <input type="search" placeholder="搜索商品" />
    </div>
    <!-- list商品列表 -->
    <p>商品列表====={{ $route.query.id }}</p>
    <ul class="list">
      <li v-for="item in goodList" :key="item.id">
       
          <img :src="item.img" alt="pic" />
          <div class="good">
            <h4>
              <a href="#">{{ item.name }}</a>
            </h4>
            <p class="price">&yen;{{ item.price }}</p>
            <p class="comment">{{ item.commend }}条评论</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList: [
        {
          id: 1,
          name: "阿道夫修护滋养洗发香乳洗发水持久留香1",
          img: require("../../assets/images/pic.jpg"),
          price: 134,
          commend: 3600,
        },
        {
          id: 2,
          name: "阿道夫修护滋养洗发香乳洗发水持久留香2",
          img: require("../../assets/images/pic.jpg"),
          price: 135,
          commend: 3601,
        },
        {
          id: 3,
          name: "阿道夫修护滋养洗发香乳洗发水持久留香3",
          img: require("../../assets/images/pic.jpg"),
          price: 136,
          commend: 3602,
        },
        {
          id: 4,
          name: "阿道夫修护滋养洗发香乳洗发水持久留香4",
          img: require("../../assets/images/pic.jpg"),
          price: 137,
          commend: 3603,
        },
      ],
    };
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/list.css";
.wid{
  width: 100%;
}
</style>