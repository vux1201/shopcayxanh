<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="payment">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <navbar></navbar>
    <section class="sub-bg">
      <div class="container">
        <div class="sub-head">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Đặt hàng &amp; thanh toán</span>
        </div>
      </div>
    </section>
    <section class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Đặt hàng &amp; thanh toán</h2>
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
              <li class="right active">
                <h4>Thanh Toán</h4>
                <span>3</span>
                <div class="part-line"></div>
              </li>
            </ul>
          </div>
          <div class="content-payment">
            <div class="infocust-product info-cus-delivery">
              <h3>Phương thức thanh toán</h3>
              <ul>
                <li>
                  <label> Cách Thanh Toán <span>*</span></label>
                  <div class="form-delivery">
                    <select>
                      <option selected value="0">
                        Vui lòng chọn cách thanh toán
                      </option>
                      <option value="1">
                        Thanh toán chuyển khoản qua ngân hàng
                      </option>
                      <option value="2">Trả tiền mặt khi nhận hàng</option>
                    </select>
                    <i class="fa-light fa-angle-down"></i>
                  </div>
                </li>
                <li>
                  <label> Cách Vân Chuyển <span>*</span></label>
                  <div class="form-delivery">
                    <select name="vnOrderCheckB31:ddlHTVC">
                      <option selected value="0">
                        Vui lòng chọn cách vận chuyển
                      </option>
                      <option value="1">Giao hàng tận nơi (TP.HCM)</option>
                      <option value="2">Nhận hàng tại cửa hàng</option>
                      <option value="3">Nhận hàng qua bưu điện</option>
                    </select>
                    <i class="fa-light fa-angle-down"></i>
                  </div>
                </li>
                <li>
                  <label> Mã Bảo Vệ</label>
                  <div class="form-delivery">
                    <span class="MaBaoVe">562c</span>
                  </div>
                </li>
                <li>
                  <label> Nhập Mã Bảo Vệ <span>*</span></label>
                  <div class="form-delivery">
                    <input type="text" placeholder="Mã Bảo Vệ" />
                  </div>
                </li>
                <li>
                  <label> Thông Tin Thêm</label>
                  <div class="form-delivery">
                    <textarea></textarea>
                  </div>
                </li>
              </ul>
              <div class="button-signin">
                <router-link to="/myOrder">
                  <button @click="complete">
                    <i class="fa-solid fa-check"></i>&nbsp;Đặt hàng
                  </button>
                </router-link>
              </div>
            </div>
            <div class="content-right">
              <div class="order-product" style="margin-bottom: 20px">
                <h2>
                  <strong>Địa chỉ giao hàng </strong
                  ><a href="/shipment-details">
                    <input type="button" value="Chỉnh sửa"
                  /></a>
                </h2>
                <a href="/thanh-toan-dia-chi.html"> </a>
                <div class="info-deivery">
                  <p><i class="fa fa-user"></i><strong> Nguyễn Vũ</strong></p>
                  <p>
                    <i class="fa fa-phone"></i>
                    06666666
                  </p>
                  <p>
                    <i class="fa fa-home"></i>
                    hà nội
                  </p>
                </div>
              </div>
              <div class="order-product">
                <h2>
                  <strong>Đơn hàng </strong>(2)
                  <a href="/cartView">
                    <input type="button" value="Chỉnh sửa"
                  /></a>
                </h2>
                <ul>
                  <li>
                    <div class="no-cart">
                      <strong>STT</strong>
                    </div>
                    <div class="name-cart">
                      <strong>Tên sản phẩm</strong>
                    </div>
                    <div class="pricepay-cart">
                      <strong>Đơn giá</strong>
                    </div>
                    <div class="num-cart">
                      <strong>SL</strong>
                    </div>
                    <div class="pricepay-cart">
                      <strong>Thành Tiền</strong>
                    </div>
                  </li>

                  <li>
                    <div class="no-cart">1</div>
                    <div class="name-cart">
                      <a href="#" san-pham="">Cây Xương Rồng Asterias</a>
                    </div>
                    <div class="pricepay-cart">55,000 đ</div>
                    <div class="num-cart">1</div>
                    <div class="pricepay-cart"><strong>55,000 đ</strong></div>
                  </li>

                  <li>
                    <div class="no-cart">2</div>
                    <div class="name-cart">
                      <a href="#" san-pham="">Cây Sen Sedum Xanh</a>
                    </div>
                    <div class="pricepay-cart">45,000 đ</div>
                    <div class="num-cart">1</div>
                    <div class="pricepay-cart"><strong>45,000 đ</strong></div>
                  </li>
                </ul>
                <div class="total-finish">
                  <h6>Thành Tiền</h6>
                  <span> 100,000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default {
  data() {
    return {};
  },
  methods: {
    complete() {
      alert("Đặt hàng thành công!");
    },
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
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
  .infocust-product {
    height: max-content;
    width: calc(55% - 20px);
    float: left;
    border: 1px solid #ddd;
  }
  .info-cus-delivery {
    min-height: 300px;
    padding: 20px;
    h3 {
      font-weight: 600;
      text-align: center;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0 0 20px 0;
    }
    ul li {
      width: 100%;
      float: left;
      margin-bottom: 10px;
      label {
        font-weight: normal;
        float: left;
        width: 150px;
        margin-bottom: 5px;
      }
      .form-delivery {
        display: flex;
        float: left;
        width: calc(100% - 150px);
        select {
          width: 100%;
          border: 1px solid #ccc;
          padding: 5px;
        }
        i {
          transform: translateX(-20px);
          padding-top: 8px;
          pointer-events: none;
        }
        textarea {
          width: 97%;
          border: 1px solid #ccc;
          border-bottom-width: 2px;
          border-radius: 3px;
          font-size: 14px;
          padding: 5px;
        }
      }
    }
    .button-signin {
      width: 100%;
      margin-top: 20px;
      border-top: 1px solid #ddd;
      padding-top: 20px;
      float: left;
      button {
        width: 30%;
        height: 2.5em;
        float: left;
        border: none;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        background: #f28902;
        margin-top: 10px;
      }
    }
  }
  .content-right {
    width: 60%;
  }
  .order-product {
    float: left;
    width: 90%;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 15px;
    h2 {
      font-size: 13px;
      border-bottom: 2px solid #eee;
      padding-bottom: 5px;
      float: left;
      width: 100%;
      strong {
        font-size: 15px;
      }
      a {
        float: right;
      }
    }
    ul li {
      width: 100%;
      float: left;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      strong {
        text-align: center;
        width: 100%;
        float: left;
      }
      .no-cart {
        width: 40px;
        float: left;
        text-align: center;
      }
      .name-cart {
        float: left;
        text-align: center;
        width: calc(100% - 260px);
      }
      .pricepay-cart {
        width: 90px;
        float: left;
        text-align: center;
        font-family: "roboto";
        color: #000;
        font-size: 14px;
      }
      .num-cart {
        width: 40px;
        float: left;
        text-align: center;
      }
      .pricepay-cart {
        width: 90px;
        float: left;
        text-align: center;
        font-family: "roboto";
        color: #000;
        font-size: 14px;
      }
    }
    .total-finish {
      width: 100%;
      float: left;
      border-top: 2px solid #eee;
      padding-top: 15px;
      h6 {
        float: left;
        font-size: 13px;
        font-weight: bold;
      }
      span {
        float: right;
        text-align: right;
        font-size: 16px;
        color: #f00;
      }
    }
    .info-deivery {
      float: left;
      padding-top: 10px;
      p {
        margin-bottom: 0;
        font-size: 12px;
      }
    }
  }
}
</style>
