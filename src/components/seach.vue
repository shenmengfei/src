<template>
  <div>
    <van-search placeholder="输入商品的名字" v-on:keydown.enter="add" v-model="value">
      <template #left>
        <van-icon name="arrow-left" size="25" v-on:click="goback" />
      </template>
    </van-search>
    <ul class="i">
        <li v-for="(item,index) in newarr"  :key="index"> {{ item }} </li>
    </ul>
    <dl class="dd">
      <dt></dt>
      <dd v-for="(item,index) in list" :key="index">
        <img :src="item.pic" alt />
        <p>{{item.name}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      all: [],
      local:[],
      newarr:[]
    };
  },
  created() {},
  computed: {
    list() {
      return this.all.filter(item => {
        return item.name.includes(this.value) ;
      });
    }
  },
  mounted() {
   

    this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
      this.all = res.data.data;
    });

     
   
       
    
      this.newarr = JSON.parse(localStorage.getItem('arr'))
      
  },
 
  methods: {
    goback() {
      this.$router.push({
        path: "fenlei"
      });
    },
    add(){  
       this.local.unshift(this.value) 
       let arr = JSON.stringify(this.local)
       localStorage.setItem('arr',arr)
        this.newarr = JSON.parse(localStorage.getItem('arr'))


    }
  }
};
</script>

<style lang="scss" scoped>
.i{
    display: flex;
    flex-wrap: wrap;
    >li{
        // width: 20px;
        // padding: .2rem 5rem;
        padding: 3px 20px;
        background-color: yellow;
        color: yellowgreen;
        margin: 3px 10px;
        border-radius: 20px;
    }
}
.dd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
  padding-bottom: 1rem;
  dt {
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background-color: #fff;
  }
  dd {
    width: 40%;
    height: 5.5rem;
    background-color: #fff;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 4rem;
    }
  }
}
</style>
