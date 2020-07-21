<template>
  <div>
    <van-nav-bar title="专栏详情" left-arrow v-on:click-left="goback" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner.pics" :key="index">
        <img :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>
    <p v-html="banner.content"></p>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="this.$store.state.is" />
      <van-goods-action-icon icon="star-o" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="jia" />
      <van-goods-action-button type1  ="danger" text="立即购买" />
    </van-goods-action>
    <!-- 商品规格 -->
    <van-sku v-model="show" :sku="sku"   @add-cart="onAddCartClicked" @stepper-change="change"
 :goods="goods" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],

      // sku的商品数据
      show: false,
      num:'',
      sku: {
        // sku的规格类目，比如商品的颜色啥的
        tree: [
          {
            k: "颜色",
            k_s: "c1",
            v: [
              { id: 1, name: "白的" },
              { id: 2, name: "红的" },
              { id: 3, name: "黑的" }
            ]
          }
        ],
        list: [
          { id: 1000, c1: 1, price: 2000, stock_num: 12 },
          { id: 1000, c1: 2, price: 4000, stock_num: 2 },
          { id: 1000, c1: 3, price: 6000, stock_num: 32 }
        ],

        price: 1000,
        stock_num: 100
      },
      // 商品图片信息
      goods: {
        picture: ""
      }
    };
  },
  created() {},
  mounted() {
    this.$axios({
      url: "https://api.it120.cc/small4/shop/goods/detail",
      methods: "post",
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      console.log(res);
      this.banner = res.data.data;
      this.ssku(res.data.data.properties);
            this.goods.picture = this.banner.pics[0].pic;
            console.log(this.banner.pics[0].pic)
            console.log(res)
    });
  },
  methods: {
    change(num){

      this.num = num
      
      console.log(this.num)
    },
    jia() {
      this.show = true;
    },
    ssku(property) {

      // 定义的属性不存在的时候
      if (property == undefined) {
        return false;
      }
      let tree = []; //商品的规格信息
      let list = [];
      property.forEach(item => {
        let obj = new Object();
        obj.k = item.name;
        obj.v = item.childsCurGoods;
        obj.k_s = `c_${item.id}`;
           obj.v = item.childsCurGoods;
        tree.push(obj);
        ;
          });
        tree.forEach(e => {
        //  console.log(e)
         e.v.forEach((i)=>{
  
           let obj = new Object();
           obj.id = e.k_s.split('_')[1]
           obj[e.k_s] = i.id
           obj.price = this.banner.basicInfo.minPrice*100
           obj.stock_num = 120
         list.push(obj)
         })
        });
        this.sku.list = list;
        this.sku.tree = tree;
     
    },
    goback() {
      this.$router.go(-1);
    },
    // 跳转购物车存储到本地
    onAddCartClicked(){
        let object = new Object()
        console.log(this.banner.basicInfo)
        object.name = this.banner.basicInfo.name
        object.name = this.banner.basicInfo.name
        console.log(object)
    }
  }
};
</script>

<style lang="scss"  >
.van-swipe-item {
  margin: 0;
  height: 4rem;
  > img {
    width: 100%;
    height: 100%;
  }
}
p > img {
  width: 100% !important;
}
.van-goods-action {
  z-index: 11;
}
.content {
  padding: 16px 16px 160px;
}
</style>
