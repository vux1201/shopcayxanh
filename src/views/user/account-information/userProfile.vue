<template>
  <div class="personal-info">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <navbar></navbar>
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Thông tin tài khoản</span>
        </div>
      </div>
    </section>
    <section class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <form class="content-page" @submit.prevent="updateProfile">
          <div class="title-signin">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div class="content-payment">
            <div class="account-col">
              <h2>
                <i>
                  <img src="https://vuoncayviet.com/img/user2-160x160.jpg"
                /></i>
                <p>{{ userData.fullname }}</p>
              </h2>
              <ul>
                <li>
                  <a href="/user-profile" class="active">Thông tin cá nhân</a>
                </li>
                <li>
                  <a href="/changePassword">Đổi mật khẩu</a>
                </li>
                <li><a href="/myOrder">Đơn Hàng Của Tôi</a></li>
                <li><a href="/">Thoát</a></li>
              </ul>
            </div>
            <div class="account-content">
              <div class="account-main formcus-cart">
                <h3 class="text-center">Thông Tin Tài Khoản</h3>
                <div class="form-group">
                  <label> Họ &amp; tên <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      v-model="userData.fullname"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Email <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa-light fa-envelope" aria-hidden="true"></i>
                    </div>
                    <input
                      v-model="userData.email"
                      disabled
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Điện thoại <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <input
                      v-model="userData.phone_number"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Địa Chỉ</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-home"></i>
                    </div>
                    <input
                      v-model="userData.address"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="button-signin">
                  <button type="submit">Cập nhật</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="footer">
      <footer1></footer1>
      <contact></contact>
    </div>
  </div>
</template>

<script>
import TopHead from "@/components/head/top-head.vue";
import Head from "@/components/head/head.vue";
import navbar from "@/components/section/navbar.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";
import { api } from "@/api";

export default {
  data() {
    return {
      userData: {
        fullname: "",
        email: "",
        phone_number: "",
        address: "",
      },
    };
  },
  methods: {
    //cập nhật thông tin
    async updateProfile() {
      const token = localStorage.getItem("access_token");
      const data = this.userData;
      const res = await api.updateProfile(token, data);
      console.log(res);
      location.reload();
    },
  },
  //hien thi thong tin
  async created() {
    const token = localStorage.getItem("access_token");
    console.log(token);
    const res = await api.getProfile(token);
    if (res.status == 200) {
      this.userData = res.data;
    }
  },
  components: {
    TopHead,
    Head,
    navbar,
    footer1,
    contact,
  },
};
</script>
<style lang="scss" scoped>
.content-page {
  width: 100%;
  float: left;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
}
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
  .account-col {
    width: 300px;
    height: max-content;
    margin-right: 20px;
    float: left;
    border: 1px solid #ddd;
    h2 {
      display: flex;
      font-size: 16px;
      background: #ddd;
      i img {
        width: 70px;
        border-radius: 100%;
        overflow: hidden;
        padding: 3px;
      }
      p {
        margin-top: 33px;
      }
    }
    ul {
      padding: 15px;
      li {
        width: 100%;
        float: left;
        a.active {
          color: #f28902;
        }
        a {
          border-bottom: 1px dashed #ccc;
          padding-bottom: 10px;
          margin-bottom: 10px;
          display: block;
        }
      }
    }
  }
  .account-content .account-main {
    width: 808px;
    float: left;
    border: 1px solid #ddd;
    padding: 15px;
    position: relative;
    min-height: 300px;
    h3 {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0 0 20px 0;
    }
    .form-group {
      margin-bottom: 15px;
      label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
      }
      .input-group {
        display: flex;
        position: relative;
        border-collapse: separate;
        .input-group-addon {
          padding: 8px 20px;
          background-color: #eee;
          border-radius: 5px 0 0 5px;
        }
        .form-control {
          width: 85%;
          padding: 0 2%;
          border: 1px solid #ccc;
          &:focus {
            border: 1px solid #66afe9;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
              0 0 8px rgba(102, 175, 233, 0.6);
          }
        }
      }
    }
    .button-signin {
      clear: both;
      width: 100%;
      margin-top: 20px;
      border-top: 1px solid #ddd;
      padding-top: 20px;
      float: left;
      button {
        padding: 10px 20px;
        background: #f28902;
        float: left;
        color: #fff;
        border: none;
        text-transform: uppercase;
        margin-right: 5px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
