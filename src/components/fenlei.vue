<template>
  <div>
    <van-search v-on:focus="focus" placeholder="请输入搜索关键词" />
    <van-tree-select
      height="100%"
    v-on:click-nav="nav(active)"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <ul>
          <router-link tag='li'   v-for="(item,index) in arr" :key="index" :to="'list/'+item.id">
           <img :src="item.icon" alt />
            <p>{{item.name}}</p>
          </router-link>
         
        </ul>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "所有分类" },
      ],
      cateId:[0],
      all: [],
      arr:[]
    };
  },
  computed: {

  },
  created() {},
  mounted() {

    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/category/all")
      .then(res => {
        this.all = res.data.data;
     
                this.arr = this.all
         
        this.all.forEach(item=>{
            if(item.pid == 0){
                this.items.push({text:item.name})
                this.cateId.push(item.id)
            }
        })
        console.log(this.items,this.cateId);
      });
  },
  methods: {
      nav(i){
          this.arr = this.all.filter((item)=>{
              return item.pid  == this.cateId[i]
           
          })
            if(i==0){
                this.arr = this.all
            }
            
      },
      focus(){
        this.$router.push({
          path:"/seach"
        })
      }
  
  }
};
</script>

<style lang="scss" scoped>
.van-sidebar-item {
  text-align: center;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  li {
    width: 33%;
    height: 3rem;
    img {
      width: 100%;
    }
    p {
      text-align: center;
      padding: 3px 0;
    }
  }
}
</style>
