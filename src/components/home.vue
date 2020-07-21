<template>
  <div class="box">
    <div class="top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiper" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>

      <ul class="nav">
        <li>
          <van-icon name="youzan-shield" color="red" />
          <p>签到</p>
        </li>
        <li>
          <van-icon name="invition" color="red" />
          <p>礼卷</p>
        </li>
        <li>
          <van-icon name="hot-sale" color="red" />
          <p>砍价</p>
        </li>
        <li>
          <van-icon name="bookmark" v-on:click="deti" color="red" />
          <p>专栏</p>
        </li>
      </ul>
    </div>
    <div class="minprice">
      <dl v-on:click="cat">
        <dt>全民砍价 ></dt>
        <dd v-for="(item,index) in priclist" :key="index">
          <img :src="item.pic" alt />
          <div>
            <div>
              <p>{{ item.name }}</p>
              <p class="pp">{{ item.characteristic }}</p>
            </div>
            <ol>
                <li class="lll">
                    <p> {{ item.minPrice }} </p>
                    <p> 低价 </p>
                </li>
                 <li class="ll">
                    <p> {{ item.originalPrice }} </p>
                    <p> 原价 </p>
                </li>
                 <li class="ll">
                    <p class="ll"> {{ item.stores }} </p>
                    <p> 限量 </p>
                </li>
            </ol>
          </div>
        </dd>
      </dl>
   
   
   
   
   
   
   
   
    </div>





    <div class="sswiper">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <router-link tag="van-swipe-item"  alt="van-swipe-item" :to="'/good/'+item.id"   v-for="(item,index) in good"  :key="index"  >
            <img :src="item.pic" >
          </router-link>
          
        </van-swipe>
    </div>






    <dl class="dd" >
      <dt> 人气推荐 </dt>
      
  
         <router-link tag="dd"   v-for="(item,index) in list" :key="index" :to="'/shop/'+item.id"> 
                      
                      <img :src="item.pic" alt="">
                          <p> {{item.name}} </p>
                          <p>￥ {{ item.originalPrice }} </p>
        </router-link>
                          

    </dl>


  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: "",
      priclist: [],
      good:'',
      list:'',
      aid:''
    };
  },
  created() {},
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      this.swiper = res.data.data;
    });
    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
     
        // this.priclist = res.data.data.goodsMap;
        // console.log(res.data.data.goodsMap)
        let arr = Object.keys(res.data.data.goodsMap).splice(-3);
        
        let tmp = [];
        arr.forEach(item=>{
            tmp.push(res.data.data.goodsMap[item]);
        })
        this.priclist = tmp;
      });
      // 文章精选
    this.$axios.get("https://api.it120.cc/small4/cms/news/list",{
      params:{
                  id: this.aid
              }
    }).then(res => {
      // console.log(res)
      this.good = res.data.data
      // console.log(this.good)
    });








      this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
  //  this.list = res.data.data
      let arr =  res.data.data.filter((item)=>{
        return item.name.indexOf("测试")==-1;
      })
    
      this.list =arr
    
    });
       
    
  },
 
  methods: {
    cat(){
      this.$router.push({
        path:'/cat'
      })
    },
    deti(){
        this.$router.push({
        path:'/detil'
      })
    }
   


  }
};
</script>

<style lang="scss">
.dd{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 background-color: #fff;
 padding-bottom: 1rem;
 dt{
   width: 100%;
   height: 1rem;
   text-align: center;
   line-height: 1rem;
   background-color: #fff;
 }
 dd{
     width: 40%;
   height: 5.5rem;
   background-color: #ccc;
   margin-bottom: 10px;

img{
   width: 100%;
   height: 4rem;
 }
 }
 
 
}
.ll{
    color: #aaa;
        text-align: center;
}
.lll{
    color: red;
    font-weight: bold;
    text-align: center;
}
.sswiper{
    img{
        width: 100%;
        height: 4rem;
      
    }
}
.van-swipe-item{
  margin-right: 15px;
}
.swiper{
    width: 100%;
    height: 3rem;
    .van-swipe__track{
          height: 3rem;
    }
}
html,
body {
  height: 100%;
}
#app {
  background-color: #ccc;
  height: 100%;
}
.my-swipe {
  img {
    width: 100%;
    height: 4rem;
  }
}
.box {
  background-color: #ccc;
  height: 100%;
  > .top {
    position: relative;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  > .minprice {
      .pp{
          color: #aaa;
          padding-top: 10px;
      }
    > dl {
      > dt {
        width: 100%;
        background-color: #fff;
        height: 1rem;
        font-size: 0.5rem;
        text-align: center;

        line-height: 1rem;
      }
      > dd {
        width: 100%;
        height: 3rem;
        background-color: #fff;
        border-top: 1px solid #aaa;
        display: flex;
        padding: 20px 0;
        box-sizing: border-box;
        > img {
          width:30%;
          height: 100%;
        }
    >div{
               width:70%;
               display: flex;
               flex-direction: column;
               justify-content: space-between;
        >ol{
            display: flex;
            justify-content: space-around;
        }
    }
      }
    }
  }
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #fff;
  height: 2rem;
  position: absolute;
  left: 0;
  bottom: 10px;
  border-radius: 0.6rem 0.6rem 0 0;
  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .van-icon {
      font-size: 1rem;
    }
  }
}
</style>
