<!-- eslint-disable prettier/prettier -->
<template>
  <div class="top-head">
    <div class="container">
      <div class="hotline">
        <i class="fa fa-phone"></i>
        Hotline: <a href="tel:0985507150">0985507150</a>
      </div>
      <div class="cart">
        <i class="fa fa-shopping-cart"></i>
        <a href="/cartView">
          <b>Giỏ hàng 0</b>
        </a>
      </div>
      <div class="login">
        <!-- đã đăng nhập -->
        <ul v-if="isActive == true">
          <li>
            <a href="#"
              ><i class="fa fa-user-circle"></i> {{ userData.fullname }}</a
            >
            <ul class="info">
              <li id="user-profile">
                <a href="/user-profile">Thông tin cá nhân</a>
              </li>
              <li id="changePassword">
                <a href="/changePassword">Đổi mật khẩu</a>
              </li>
              <li><a href="/myOrder">Đơn Hàng Của Tôi</a></li>
              <li><a href="/">Thoát</a></li>
            </ul>
          </li>
          <li>
            <a @click="logout"><i class="fa fa-sign-out"></i>Đăng xuất</a>
          </li>
        </ul>
        <!-- chưa đăng nhập -->
        <ul v-else>
          <li>
            <a href="#">
              <i class="fa fa-unlock-alt"></i>
              Đăng Nhập
            </a>
            <ul>
              <li>
                <a href="/login" class="login">
                  <i class="fa fa-sign-in"></i>
                  Đăng Nhập
                </a>
              </li>
              <li>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook"></i>
                  Login with Facebook
                </a>
              </li>
              <li>
                <a href="#" id="customBtn" name="customBtn" class="google">
                  <i class="fa fa-google"></i>
                  Login with Google
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/signup">
              <i class="fa fa-user-plus"></i>
              Tạo Tài Khoản
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../api.js";
export default {
  data() {
    return {
      isActive: "",
      userData: {},
    };
  },
  //lấy thông tin đăng nhập
  async created() {
    const token = localStorage.getItem("access_token");
    console.log(token);
    const res = await api.getProfile(token);
    //console.log(res); //thông tin người dùng
    if (res.status == 200) {
      this.userData = res.data;
    }
    // console.log(this.userData);
    if (token == token) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
  methods: {
    // đăng xuất
    logout() {
      localStorage.removeItem("access_token");
      // location.reload(); //load lại trang
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.tophead {
  padding: 0 56px;
}
.top-head {
  width: 100%;
  float: left;
  background: #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0px 10%;
}
.hotline {
  float: left;
  padding-top: 0.5rem;
  color: #666;
  a {
    font-weight: bold;
    font-size: 14px;
  }
  i {
    font-size: 15px;
    color: #f00;
    float: left;
    margin-top: 3px;
    margin-right: 5px;
  }
}
.cart {
  float: right;
  background: #f28902;
  color: #fff;
  padding: 5px 10px;
  margin-left: 10px;
  font-size: 11px;
  i {
    margin-right: 5px;
    font-size: 20px;
  }
  a {
    color: #fff;
    font-size: 12px;
    b {
      color: #ff0;
      font-size: 14px;
    }
  }
}
.login {
  float: right;
  color: #333;
  position: relative;
  .info {
    width: 130px;
    left: 6px;
    top: 35px;
    a {
      background: #fff;
      color: #333;
      border-bottom: 0;
      margin: 0;
      padding: 0;
      &:hover {
        background: none;
        color: #f28902;
        border-bottom: 0;
      }
    }
  }
  ul > li {
    float: left;
    padding: 7px 0 5px 18px;
    text-transform: uppercase;
    i {
      margin-right: 5px;
    }
  }
  ul li a {
    font-weight: 600;
    font-size: 11px;
  }
  ul li ul {
    display: none;
    top: 35px;
    padding: 10px 15px;
    position: absolute;
    left: 0;
    width: 200px;
    background: #fff;
    z-index: 999;
    border: 1px solid #eee;
    border-top: none;
    li {
      width: 100%;
      padding: 0;
      margin: 5px 0;
      float: left;
      a {
        background: #999;
        color: #fff;
        padding: 4px 10px 4px 0;
        width: 100%;
        float: left;
        border-radius: 4px;
        font-weight: normal;
        text-transform: capitalize;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        i {
          width: 30px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 20px;
          margin-right: 10px;
        }
        &.login {
          background: #f28902;
        }
        &.facebook {
          background: #5670a3;
        }
        &.google {
          background: #dd4c39;
        }
        &:hover {
          background: #999;
          border-bottom: 2px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  ul li:hover ul {
    display: block;
  }
}
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    float: left;
  }
  h4 {
    font-size: 13px;
    float: left;
    margin: 0 10px;
    padding: 4px 0 0 0;
  }
  a {
    font-weight: bold;
    color: #f28902;
    font-size: 12px;
    padding: 2px 0 0 0;
    float: left;
    &:hover {
      color: #3daa12;
    }
  }
}
.col-signin-left {
  width: 50%;
  float: left;
  padding-right: 40px;
  border-right: 1px solid #ddd;
  ul li {
    width: 100%;
    margin: 10px 0;
  }
  input[type="textbox"],
  textarea {
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    border-radius: 3px;
    width: 100%;
    padding: 7px 7px;
  }
  input[type="submit"] {
    padding: 10px 35px;
    border-radius: 3px;
    border: none;
    background: #f28902;
    color: #fff;
    float: left;
    text-transform: uppercase;
    margin-right: 5px;
  }
}
.col-signin-right {
  width: 50%;
  float: left;
  padding-left: 40px;
  a:hover {
    color: #fff;
  }
}
.btn-facebook,
.btn-google-plus {
  color: #fff;
  position: relative;
  max-width: 250px;
  background-color: #3b5998;
  border-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}
.btn-google-plus {
  background-color: #dd4b39;
}
.btn-social :first-child {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  line-height: 34px;
  font-size: 1.6em;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.button-signin {
  clear: both;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
  button,
  input[type="submit"],
  input[type="reset"] {
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
@media (max-width: 1280px) {
  .top-head {
    width: 96%;
    padding: 0 2%;
  }
}
</style>
