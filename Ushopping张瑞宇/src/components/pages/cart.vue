<template>
  <div>
    <div class="page" id="box" v-cloak>
      <header class="headCon">
        <a href="#" class="back"
          ><img src="../../assets/images/arrowLeft (2).jpg" alt=""
        /></a>
        <h2>购物车</h2>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) in goodsList"
            :class="[index === idex ? 'active' : '']"
            @touchmove="change(index)"
            :key="item.id"
          >
            <div class="good">
              <input
                type="checkbox"
                v-model="item.choose"
                @change="changeOne"
              />
              <div style="width: 20%">
                <img :src="item.img" alt="iconCart" />
              </div>
              <div class="txt">
                <p class="name">{{ item.name }}</p>
                <p class="grammage">
                  规格：<span>{{ item.grammage }}g</span>
                </p>
                <p class="price">&yen;{{ item.price | toFloat }}</p>
              </div>
            </div>
            <p>
              <span class="addOrDesc desc" @click="sub(index)">-</span>
              <input
                type="text"
                class="number"
                v-model="item.num"
                value="item.num"
              />
              <span class="addOrDesc add" @click="add(index)">+</span>
              <a href="#" class="del" @click="del">删除</a>
            </p>
          </li>
          <li class="noCon">
            <p v-show="this.goodsList.length == 0">
              购物车空空如也，快去买买买！！！
            </p>
          </li>
        </ul>
      </div>
      <div class="settlement">
        <div>
          <p class="btn">
            <input
              type="checkbox"
              v-model="chooseAll"
              @change="allChoose"
            />全选
          </p>
          <div>
            <p class="count">
              总计：<span>{{ allSum | toFloat }}</span>
            </p>
            <p class="tip">不含运费，已优惠&yen;0.00</p>
          </div>
        </div>
        <router-link to="/orderConfirm"><a href="#">去结算（{{ allNum }}件）</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseAll: false,
      idx: 1,
      idex: 4,
      goodsList: [
        {
          name: "1珀莱雅面霜",
          price: 123,
          img: require('../../assets/images/shopCart.jpg'),
          grammage: "60",
          num: 1,
          choose: false,
        },
        {
          name: "2珀莱雅面霜",
          price: 234,
          grammage: "70",
          img: require('../../assets/images/shopCart.jpg'),
          num: 1,
          choose: false,
        },
        {
          name: "3珀莱雅面霜",
          price: 456,
          grammage: "80",
          img: require('../../assets/images/shopCart.jpg'),
          num: 1,
          choose: false,
        },
      ],
    };
  },
  filters: {
    toFloat(n) {
      return n.toFixed(2);
    },
  },
  computed: {
    allSum() {
      let sum = 0;
      this.goodsList.map((item, i) => {
        if (this.goodsList[i].choose) {
          sum += item.price * item.num;
        }
      });
      return sum;
    },
    allNum() {
      let count = 0;
      this.goodsList.map((item, i) => {
        if (this.goodsList[i].choose) {
          count += item.num;
        }
      });
      return count;
    },
  },
  methods: {
    change(m) {
      this.idex = m;
    },
    del(num) {
      this.goodsList.splice(num, 1);
    },
    changeOne() {
      this.chooseAll = this.goodsList.every((item) => item.choose);
    },
    allChoose() {
      this.goodsList.map((item) => (item.choose = this.chooseAll));
    },
    add(i) {
      this.goodsList[i].num++;
    },
    sub(i) {
      if (this.goodsList[i].num <= 1) {
        alert("不能再少了");
        return;
      }
      this.goodsList[i].num--;
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/cart.css";
</style>
