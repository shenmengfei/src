<template>
    <div>
            <router-view></router-view>
            <load v-show="this.$store.state.loading" ></load>
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" v-on:click="change(active)" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="fenlei"  v-on:click="change(active)" icon="search">分类</van-tabbar-item>
        <van-tabbar-item name="shopp"  v-on:click="change(active)" icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item name="me"  v-on:click="change(active)" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
import load from "./components/loading"
export default {
    data() {
        return {
   active: 'home',
        };
    },
    components: {
      load,
    },
    created() {

    },
    mounted() {

    },
    methods: {
      change(i){
        this.$router.push({
          path:i
        })
      }
    }
};
</script>

<style scoped>

</style>
