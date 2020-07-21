<template>
  <div>
    <van-nav-bar title="专栏详情" left-arrow @click-left="goBack" />
    <div>
        <h1 v-html="data.title"></h1>
      <img :src="data.pic" alt />
      <p class="con" v-html="data.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {},
  mounted() {
    this.$axios({
      url: "https://api.it120.cc/small4/cms/news/detail",
      methods: "post",
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      console.log(res);
      this.data = res.data.data;
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
p{
    text-indent: 1rem;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
}
h1{
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: bold;
}
</style>
