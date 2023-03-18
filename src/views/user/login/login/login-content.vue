<template>
  <div class="bg-dark">
    <div class="container">
      <div class="content-page">
        <form @submit.prevent="login">
          <div class="title-signin">
            <h2>Đăng Nhập</h2>
          </div>
          <div class="col-signin-left">
            <ul>
              <li>
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa-light fa-envelope"></i>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    style="width: 80%; padding: 0 1.5%; border: 1px solid #ccc"
                    placeholder="Nhập email.."
                    required
                    v-model="email"
                  />
                </div>
              </li>
              <div class="errMes">{{ errLogin1 }}</div>
              <li>
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-key"></i>
                  </div>
                  <input
                    class="form-control"
                    :type="inputType"
                    style="width: 74%; padding: 0 1.5%; border: 1px solid #ccc"
                    placeholder="Nhập mật khẩu.."
                    required
                    v-model="password"
                  />
                  <div
                    @click.prevent="showpw"
                    style="
                      background: rgb(204, 204, 204);
                      width: 36px;
                      text-align: center;
                      padding-top: 7px;
                    "
                  >
                    <span v-if="inputType == 'password'"
                      ><i class="fa fa-eye-slash"></i
                    ></span>
                    <span v-else><i class="fa fa-eye"></i></span>
                  </div>
                </div>
              </li>
              <div class="errMes">{{ errLogin2 }}</div>
            </ul>
          </div>
          <div class="col-signin-right">
            <center>Đăng nhập bằng tài khoản mạng xã hội</center>
            <!-- <div class="clear" style="height: 10px"></div> -->
            <a class="btn btn-block btn-social btn-facebook" style="margin: 3px"
              ><i class="fa fa-facebook"> </i> Đăng nhập với Facebook </a
            ><a href="#" class="btn btn-block btn-social btn-google-plus">
              <i class="fa fa-google-plus"></i> Login with Google
            </a>
          </div>
          <div class="button-signin">
            <button type="submit">Đăng nhập</button>
            <p style="margin-top: 20px; color: #f28902">
              <a href="/forgot-password">Quên mật khẩu</a>
              |
              <a href="/signup" title="Đăng Ký">Đăng ký</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from "@/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      res: "",
      inputType: "password",
      inputpw: "password",
      errLogin1: "",
      errLogin2: "",
    };
  },
  methods: {
    async login() {
      try {
        const res = await api.login(this.email, this.password);
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem("access_token", res.data.access_token);
          this.$router.push({ path: "/" });
        }
      } catch (error) {
        if (error.response.data.detail == "Không tồn tại user với email này") {
          this.errLogin1 = "Không tồn tại user với email này!";
        } else {
          this.errLogin1 = "";
        }
        if (error.response.data.detail == "Authenticate failed") {
          this.errLogin2 = "Sai mật khẩu!";
        } else {
          this.errLogin2 = "";
        }
      }
    },
    showpw() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
};
</script>
<style scoped>
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
.form-control:focus {
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
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
  margin: 10px 0;
}
a {
  width: 1000px;
}
.col-signin-left input[type="textbox"],
.col-signin-left textarea {
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  border-radius: 3px;
  width: 100%;
  padding: 7px 7px;
}

.btn-facebook,
.btn-google-plus {
  color: #fff;
  position: relative;
  max-width: 250px;
  border-radius: 5px;
  background-color: #3b5998;
  border-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
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
  display: grid;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
}
button {
  padding: 10px 20px;
  background: #f28902;
  float: left;
  width: 150px;
  color: #fff;
  border: none;
  text-transform: uppercase;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>
