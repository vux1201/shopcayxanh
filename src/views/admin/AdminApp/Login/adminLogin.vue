<template>
  <div class="login">
    <div class="container">
      <div class="content">
        <h3>Login Admin</h3>
        <br />
        <br />
        <form class="form-login" @submit.prevent="login">
          <ul>
            <li>
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  required
                  v-model="email"
                />
                <label class="form-label">User name</label>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <span class="errMes">{{ errLogin1 }}</span>
            </li>
            <li>
              <div class="input-group">
                <input
                  class="form-control"
                  type="password"
                  required
                  v-model="password"
                />
                <label class="form-label">Password</label>
                <i class="fa-solid fa-lock"></i>
              </div>
            </li>
          </ul>

          <span class="errMes">{{ errLogin2 }}</span>
          <button class="btn-login" type="submit" name="login">Login</button>
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
          this.$router.push({ path: "/product-management" });
          // location.reload();
        }
      } catch (error) {
        if (error.response.data.detail == "Không tồn tại user với email này") {
          this.errLogin1 = "Không tồn tại username với email này!";
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
  },
};
</script>

<style scoped>
.login {
  position: relative;
  background-image: url("https://congtycayxanhvietnam.com/wp-content/uploads/2018/05/banner.jpg");
  background-size: cover;
  height: 100vh;
}
.container {
  position: absolute;
  width: 26rem;
  margin-top: 8%;
  padding: 3rem;
  background: #ccc;
  border-radius: 2rem;
  left: 35%;
}
h3 {
  font-size: 33px;
  text-align: center;
  padding-top: 5%;
}
ul {
  list-style: none;
}
.input-group {
  position: relative;
  padding-left: 2rem;
  margin-top: 1em;
}
.input-group .form-label {
  position: absolute;
  transform: translateY(100%);
  left: 2.3em;
  color: #928383;
  padding-left: 0.6em;
  user-select: none;
  pointer-events: none;
  transition: 0.5s ease;
}

.form-control:not(:placeholder-shown) + .form-label,
.form-control:focus + .form-label {
  top: -2em;
  font-size: 12px;
  color: #000;
}

.input-group .fa-solid {
  transform: translateX(-100%);
  padding: 0.45em;
}
.form-control {
  width: 90%;
  height: 30px;
  border: 1px solid #8f7e7e;
  border-radius: 4px;
  margin-top: 16px;
  padding-left: 8px;
}
.form-control:focus {
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.errMes {
  font-size: 13px;
  color: red;
  padding-left: 2rem;
}
.btn-login {
  position: relative;
  float: right;
  margin-right: 31%;
  bottom: -1.5rem;
  width: 130px;
  border: none;
  height: 40px;
  border-radius: 6px;
  background-color: #5e72e4;
}
</style>
