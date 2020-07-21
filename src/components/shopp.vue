<template>
    <div>
            <van-nav-bar title="专栏详情" left-arrow v-on:click-left="goback" />
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newarr:[]
        };
    },
    created() {
   this.newarr = JSON.parse(localStorage.getItem('arr'))
    },
    mounted() {

    },
    methods: {
goback(){
    this.$router.go(-1)
    
       console.log(this.newarr)
}
    }
};
</script>

<style scoped>

</style>
