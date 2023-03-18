<template>
  <section class="bg-dark" style="padding-top: 20px">
    <div class="container">
      <form class="content-page" @submit.prevent="signup">
        <div class="title-signin">
          <h2>Tạo Tài Khoản</h2>
          <h4>Bạn đã có tài khoản?</h4>
          <a href="/login">Đăng Nhập</a>
        </div>
        <div class="col-signin-left">
          <ul>
            <!-- <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-user"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập họ &amp; tên..."
                  required
                  v-model="firstname"
                />
              </div>
            </li>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-home"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập địa chỉ..."
                  required
                  v-model="address"
                />
              </div>
            </li>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-home"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập số điện thoại..."
                  required
                  v-model="phone_number"
                />
              </div>
            </li> -->
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa-light fa-envelope"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="Nhập email..."
                  required
                  v-model="email"
                />
              </div>
            </li>
            <div class="errMes">{{ errSignup1 }}</div>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-key"></i>
                </div>
                <input
                  id="password"
                  type="text"
                  class="form-control"
                  placeholder="Nhập mật khẩu..."
                  @change="isPasswordValid"
                  required
                  v-model="password"
                />
              </div>
            </li>
            <div class="errMes">{{ errSignup2 }}</div>
          </ul>
        </div>

        <div class="col-signin-right">
          <div class="clear hidden-xs" style="height: 12px"></div>
          <center>Đăng nhập bằng tài khoản mạng xã hội</center>
          <div class="clear" style="height: 10px"></div>
          <a class="btn btn-block btn-social btn-facebook"
            ><i class="fa fa-facebook"> </i><span>Login with Facebook</span> </a
          ><a href="#" class="btn btn-block btn-social btn-google-plus">
            <i class="fa fa-google-plus"></i>Login with Google
          </a>
        </div>
        <div class="button-signin">
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { api } from "@/api";
export default {
  data() {
    return {
      // firstname: "",
      // address: "",
      // phone_number: "",
      email: "",
      password: "",
      res: "",
      errSignup1: "",
      errSignup2: "",
    };
  },
  methods: {
    async signup() {
      try {
        const data = {
          // firstname: this.firstname,
          // address: this.address,
          // phone_number: this.phone_number,
          email: this.email,
          password: this.password,
        };
        const res = await api.register(data);
        if (res.status == 200) {
          this.res = res;
          console.log("Active", res);
          this.$route.push({ path: "/" });
        }
      } catch (error) {
        if (
          error.response.data.detail == "User with this email already exist"
        ) {
          this.errSignup1 = "Email đã tồn tại, vui lòng nhập email khác!";
        } else {
          this.errSignup1 = "";
        }
        if (
          error.response.data.detail ==
          "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt"
        ) {
          this.errSignup2 =
            "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt";
        } else {
          this.errSignup2 = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.bg-dark {
  background: #eee;
  width: 100%;
  float: left;
}
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
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.title-signin h2 {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  float: left;
}
.title-signin h4 {
  font-size: 13px;
  float: left;
  margin: 0 10px;
  padding: 4px 0 0 0;
}
.title-signin a {
  font-weight: bold;
  color: #f28902;
  font-size: 12px;
  padding: 2px 0 0 0;
  float: left;
}
.title-signin a:hover {
  color: #3daa12;
}
.form-control {
  width: 500px;
  border: 1px solid #ccc;
}
.form-control:focus {
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.col-signin-left {
  width: 50%;
  float: left;
  padding-right: 40px;
  border-right: 1px solid #ddd;
}
.input-group {
  display: flex;
  height: 35px;
}
.input-group input {
  padding: 7px 10px;
}
.input-group-addon {
  padding: 0 20px;
  background-color: #eee;
  padding-top: 1.3%;
  border-radius: 5px 0 0 5px;
}
.errMes {
  font-size: 12px;
  color: red;
  padding-left: 6px;
}
.col-signin-right {
  float: left;
  display: grid;
  margin-left: 8%;
  /* padding-left: 40px; */
}
.col-signin-left ul li {
  width: 100%;
  margin-top: 10px;
}
a {
  width: 1000px;
}

.btn-facebook,
.btn-google-plus {
  color: #fff;
  position: relative;
  max-width: 250px;
  border-radius: 5px;
  background-color: #3b5998;
  border-color: rgba(0, 0, 0, 0.2);
  margin: 3px auto;
}
.btn-google-plus {
  background-color: #dd4b39;
}
.btn-social :first-child {
  /* position: absolute; */
  left: 0;
  top: 0;
  bottom: 0;
  width: 32px !important;
  line-height: 34px !important;
  font-size: 1.5em !important;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.col-signin-right a:hover {
  color: #fff;
}
.button-signin {
  clear: both;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
}
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
</style>
