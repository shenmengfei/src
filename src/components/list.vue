<template>
    <div>
       <van-nav-bar  @click-left="home"  title="分类商品" left-arrow/>
       
        <dl class="dd"  v-if="all.length>0">
            <dt></dt>
            <dd  v-for="(item,index) in all" :key="index">
                <img :src="item.pic" alt="">
                <p> {{item.name}} </p>
              

            </dd>
         </dl>
<van-empty description="没有商品了兄嘚！" v-else />
    </div>
</template>

<script>
export default {
    data() {
        return { 
            id:0,
            all:''
        };
    },
    created() {

    },
  
    mounted() {
        this.id = this.$route.params.id
         this.$axios
      .get("https://api.it120.cc/small4/shop/goods/list")
      .then(res => {

        this.all = res.data.data;

            this.all = this.all.filter((item)=>{

                 return item.categoryId == this.id
            })

      
      });
    },
    methods: {
        home(){
         
            this.$router.push({
                path:'/fenlei'
            })
        }
    }
};
</script>

<style lang="scss" scoped>

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
</style>
