<template>
    <div>
        <van-nav-bar title="专栏详情" left-arrow @click-left="goBack" />

    <ul class="sswiper">
    
          <router-link tag="li"  alt="van-swipe-item" :to="'/good/'+item.id"   v-for="(item,index) in data"  :key="index"  >
            <img :src="item.pic" >
          </router-link>
          

    </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:''
        };
    },
    created() {
   this.$axios.get("https://api.it120.cc/small4/cms/news/list",{
      params:{
                  id: this.aid
              }
    }).then(res => {
      // console.log(res)
      this.data = res.data.data
 
    });



    },
    mounted() {

    },
    methods: {
        goBack(){
            this.$router.push({
                path:'/home'
            })
        }
    }
};
</script>

<style scoped>
img{
    width: 100%;
    height: 3rem;
}
li{
    margin: 10px 0;
}
</style>
