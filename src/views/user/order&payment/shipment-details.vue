<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Details">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <navbar></navbar>
    <section class="sub-bg">
      <div class="container">
        <div class="sub-head">
          <a href="/"><i class="fa fa-home"></i>Trang chủ </a>
          <span> Thông tin giao hàng</span>
        </div>
      </div>
    </section>
    <div class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Thông tin giao hàng</h2>
          </div>
          <div class="part-buy">
            <ul>
              <li class="left active">
                <h4>Đăng nhập</h4>
                <span>1</span>
                <div class="part-line"></div>
              </li>
              <li class="mid active">
                <h4>Địa chỉ giao hàng</h4>
                <span>2</span>
                <div class="part-line"></div>
              </li>
              <li class="right">
                <h4>Thanh Toán</h4>
                <span>3</span>
                <div class="part-line"></div>
              </li>
            </ul>
          </div>
          <div class="content-payment">
            <div class="col-signin-left address-delivery">
              <h3>Thêm Địa chỉ mới</h3>
              <p style="color: #f00"></p>
              <ul>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      name="vnOrderCheckB21:txtCusname"
                      type="text"
                      value="Nguyễn Vũ"
                      id="vnOrderCheckB21_txtCusname"
                      class="form-control"
                      placeholder="Nhập họ &amp; tên"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <input
                      name="vnOrderCheckB21:txtCusTel"
                      type="text"
                      id="vnOrderCheckB21_txtCusTel"
                      class="form-control"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-home"></i>
                    </div>
                    <input
                      name="vnOrderCheckB21:txtCusAddress"
                      type="text"
                      id="vnOrderCheckB21_txtCusAddress"
                      class="form-control"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                </li>
              </ul>
              <div class="button-signin">
                <router-link to="/paymentView">
                  <input
                    type="image"
                    src="https://vuoncayviet.com/img/Nextbtn.png"
                    style="border-width: 0px"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
export default {
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
.title-signin h2 {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  float: left;
}
.title-signin {
  width: 100%;
  float: left;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.part-buy {
  width: 100%;
  float: left;
  margin-bottom: 40px;
  ul li h4 {
    font-size: 13px;
    float: left;
    width: 100%;
    margin-bottom: 20px;
    font-family: "Roboto";
  }
  ul li span {
    width: 30px;
    height: 30px;
    float: left;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 100%;
    text-align: center;
    line-height: 29px;
    top: 26px;
    position: absolute;
  }
  ul li .part-line {
    width: 100%;
    height: 6px;
    background: #ddd;
    float: left;
  }
  ul li.left,
  ul li.mid,
  ul li.right {
    position: relative;
    float: left;
  }
  ul li.left {
    width: 30%;
    span {
      left: -1px;
    }
  }
  ul li.mid {
    width: 40%;
    text-align: center;
    span {
      right: 0;
      left: 0;
      margin: auto;
    }
  }
  ul li.right {
    width: 30%;
    text-align: right;
    span {
      right: -1px;
    }
  }
  ul li.active span {
    border-color: #ff4444;
  }
  ul li.active span,
  ul li.active .part-line {
    background: #ff4444;
    color: #fff;
  }
}
.content-payment {
  width: auto;
  padding: 20px;
  margin-left: 25%;
  float: left;
  margin-top: 20px;
  .address-delivery h3 {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 0 6px 3px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
  }
}
.form-group {
  padding-bottom: 10px;
}
.input-group {
  display: flex;
  margin: 10px 0;
  height: 35px;
  &-addon {
    padding: 0 20px;
    background-color: #eee;
    padding-top: 1.3%;
    border-radius: 5px 0 0 5px;
  }
}
.form-control {
  width: 450px;
  padding: 0 10px;
}
.button-signin {
  clear: both;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
}
</style>
