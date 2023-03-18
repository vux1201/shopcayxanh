<template>
  <div class="signin">
    <div class="container">
      <div>
        <h3>Login Admin</h3>
        <br />
        <br />
        <form role="form" @submit.prevent="login">
          <ul>
            <li>
              <div class="input-group">
                <input
                  class="form-control"
                  placeholder="Username"
                  type="text"
                  name="username"
                  v-model="email"
                />
              </div>
              <span class="errMes">{{ errLogin1 }}</span>
            </li>
            <li>
              <div>
                <input
                  class="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  v-model="password"
                />
              </div>
            </li>
          </ul>

          <span class="errMes">{{ errLogin2 }}</span>
          <button class="login" type="submit" name="login">Login</button>
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
          this.$router.push({ path: "/dashboard" });
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
.container {
  width: 30%;
  margin-top: 8%;
  padding: 30px;
  background: #ccc;
}
h3 {
  font-size: 33px;
  text-align: center;
  padding-top: 5%;
}
ul {
  list-style: none;
}
.form-control {
  width: 90%;
  height: 30px;
  border: none;
  border-radius: 4px;
  margin-top: 16px;
}
.errMes {
  font-size: 12px;
  color: red;
  padding-left: 6px;
}
.login {
  margin: 8% 0 0 30%;
  width: 130px;
  border: none;
  height: 40px;
  border-radius: 6px;
  background-color: #5e72e4;
}
</style>
