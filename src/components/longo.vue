<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow />
    <div class="box">
      <van-field label="手机号" right-icon="graphic" v-model="phone" />
      <van-field label="用户名" right-icon="friends-o" v-model="user" />

      <!-- 密码 -->
      <van-field
        label="密码"
        v-model="psw"
        :right-icon="isShow ?'closed-eye':'eye-o'"
        :type="isShow ?'password':'text'"
        v-on:click-right-icon="isShow = !isShow"
      />

      <!--确认 密码 -->
      <van-field
        label="确认密码"
        v-model="newpsw"
        :right-icon="isShowto ?'closed-eye':'eye-o'"
        :type="isShowto ?'password':'text'"
        v-on:click-right-icon="isShowto = !isShowto"
      />

      <!-- 图片验证码 -->
      <van-field v-model="ma">
        <template #right-icon>
          <van-image :src="img" @click="imgtab" />
        </template>
      </van-field>
      <!-- 手机验证码 -->
      <van-field v-model="phonema">
        <template #right-icon>
          <van-button plain hairline type="info" :disabled="btnIsDisabled" v-on:click="faa">{{ fa }}</van-button>
        </template>
      </van-field>
      <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info" v-on:click="add()">按钮</van-button>
    </div>
  </div>
</template>

<script>
import "@/assets/reset.css";
export default {
  data() {
    return {
      isShow: true,
      isShowto: true,
      psw: "",
      newpsw: "",
      btnIsDisabled: false,
      phone: "",
      user: "",
      ma: "",
      phonema: "",
      // 验证码
      img: "",
      num: "",
      // 手机验证码
      fa: "点击发送"
    };
  },
  created() {},
  mounted() {
    this.imgtab();
  },
  methods: {
    ti() {
      let time = 60;

      //倒计时间歇
      let timer = setInterval(() => {
        // 读秒结束
        if (time < 1) {
          // this.btnIsDisabled =false;
          //清除定时器
          clearInterval(timer);
          this.fa = `重新发送`;
          return false;
        }
        // 正在倒计时的时候
        this.fa = `${time}s后再试`;
        time--;
      }, 1000);
    },
    faa() {
      this.$axios({
        url: "https://api.it120.cc/small4/verification/sms/get",
        params: {
          mobile: this.phone,
          key: this.num,
          picCode: this.ma
        }
      }).then(res => {
        console.log(res);
        //校验失败的时候

        if (this.phone == "") {
          //提示错误信息
          this.$toast.fail("请输入手机号");
          return false;
        }
        var reg = /^1[345678]{1}\d{9}$/;
        if (!reg.test(this.phone)) {
          this.$toast.fail("手机号错误");
          return false;
        }
        if (res.data.code != 0) {
          this.$toast.fail(res.data.msg);
        }
        //   this.btnIsDisabled =true;
        this.ti();
      });
    },
    add() {
      //验证表单的基本信息不能为空
      if (
        this.phone == "" ||
        this.pwd == "" ||
        this.newpsw == "" ||
        this.user == "" ||
        this.ma == "" ||
        this.phonema == ""
      ) {
        //提示错误信息
        this.$toast.fail("手机号,密码，验证码不能为空");
        return false;
      }
      var reg = /^1[345678]{1}\d{9}$/;
      if (!reg.test(this.phone)) {
        this.$toast.fail("手机号错误");
        return false;
      }
      if (this.psw != this.newpsw) {
        this.$toast.fail("两次密码不一致");
        return false;
      }
      this.$toast.success("注册成功");
    },
    imgtab() {
      this.num = new Date().getTime();
      let url = "https://api.it120.cc/small4/verification/pic/get";
      this.img = `${url}?key=${this.num}`;
      console.log(this.num);
      console.log(url);
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  // border: .01rem solid #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-cell {
    border: 1px solid yellow;
    width: 80%;
    border-radius: 0.4rem;
    margin-top: 0.6rem;
  }
  .van-button--block {
    width: 80%;
    border-radius: 0.4rem;
    margin-top: 0.6rem;
  }
}
</style>
