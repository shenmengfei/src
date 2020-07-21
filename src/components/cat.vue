<template>
    <div>
                <div class="minprice">
                    <dl>
                        <dt> <span v-on:click="home"> &lt; </span> 全民砍价</dt>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            priclist:[]
        };
    },
    created() {

    },
    mounted() {
  this.$axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
     
        // this.priclist = res.data.data.goodsMap;
        console.log(res.data.data.goodsMap)
        let arr = Object.keys(res.data.data.goodsMap)
        
        let tmp = [];
        arr.forEach(item=>{
            tmp.push(res.data.data.goodsMap[item]);
        })
        this.priclist = tmp;
      });
    },
    methods: {
        home(){
               this.$router.push({
                    path:'/home'
                })
        }
    }
};
</script>

<style lang="scss" scoped>
.minprice {
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
</style>
