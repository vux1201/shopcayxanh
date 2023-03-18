<template>
  <div @wheel="onWheel">
    <nav>
      <router-link to="/"></router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // navbar cticky
    scroll() {
      window.onscroll = function () {
        myFunction();
      };

      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    },
    onWheel() {
      this.scroll();
    },
  },
};
</script>
<style>
@import "./assets/css/reset.css";
:after,
:before {
  font-family: "FontAwesome";
}
body {
  font-family: "Open Sans", sans-serif;
  line-height: 150%;
  font-size: 14px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: #333 !important;
  position: relative;
}
a {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #f28902;
  text-decoration: none;
}
a,
a:hover,
img,
li {
  text-decoration: none !important;
  cursor: pointer;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.sticky + .content {
  padding-top: 60px;
}
.title {
  width: 100%;
  float: left;
  color: #333333;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left;
  border-bottom: 1px solid #ff8000;
}
.title a {
  color: #ff8000;
  width: 100%;
  float: left;
  padding-bottom: 10px;
  position: relative;
  font-weight: bold;
}
.bg-dark {
  background: #eee;
  width: 100%;
  float: left;
}
.sub-bg {
  width: 100%;
  float: left;
}
.sub-head {
  font-size: 13px;
  width: 100%;
  float: left;
  padding: 15px 0;
}
.sub-head a {
  color: #333;
  font-size: 12px;
  padding-right: 10px;
  float: left;
}
.sub-head a:after {
  content: "\f101";
  font-family: "FontAwesome";
  color: #04476d;
  padding-left: 5px;
}
.sub-head a:hover {
  color: #3daa12;
}
.sub-head span {
  float: left;
  font-size: 13px;
  color: #ff6600;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.fa-light {
  font: normal normal normal 14px/1 FontAwesome;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media only screen and (max-width: 1200px) {
  .title {
    margin-top: 30px;
  }
  .product-block ul li {
    width: 31.88%;
  }
  .product-block ul li .pic-news > a {
    height: 220px;
  }
  .product-block ul li h3 a {
    font-size: 13px;
    line-height: 1.5;
    height: 40px;
  }
  .news-page ul li {
    width: 31.22%;
  }
  .news-page ul li .img-news {
    height: 130px;
  }
  .relative-product ul li {
    padding-left: 0;
    width: 32.2%;
  }
  .relative-product ul li:nth-child(3n) {
    margin-right: 0;
  }
  .relative-product ul li:nth-child(4n) {
    margin-right: 15px;
  }
  .relative-product ul li:nth-child(4n + 1) {
    clear: none;
    float: left;
  }
  .relative-product ul li:nth-child(12n) {
    margin-right: 0;
  }
}

@media only screen and (max-width: 1010px) {
  .sticky {
    position: absolute;
  }
  .col-left {
    width: 100%;
    float: right;
  }
  .main-block {
    width: 100%;
    float: left;
    margin-left: 0;
  }
  .product-block ul li {
    width: 32.27%;
  }
  .product-block ul li .pic-news > a {
    height: 250px;
  }
  .sub-bg {
    margin-top: 48px;
  }
  .relative-product ul li {
    width: 32.2%;
  }

  .infocust-product {
    width: 100%;
  }
  .order-product {
    width: 100%;
    margin: 0;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .product-block ul li {
    width: calc(50% - 5px);
    float: left;
    margin-right: 0;
  }
  .product-block ul li:nth-child(odd) {
    float: left;
    margin-right: 5px;
  }
  .product-block ul li:nth-child(even) {
    float: left;
    margin-left: 5px;
  }
  .product-block ul li:nth-child(3n + 1) {
    float: left;
    clear: none;
  }
  .pic-product {
    width: 40%;
  }
  .intro-product {
    width: calc(60% - 20px);
    margin: 0;
    margin-left: 20px;
    float: left;
  }
  .intro-delevery {
    width: 100%;
  }

  .relative-product ul li:nth-child(4n) {
    margin-right: 0;
  }
}

@media only screen and (max-width: 768px) {
  .logo,
  .widget-head {
    width: 100%;
    text-align: center;
    margin-top: 0px;
  }
  .widget-head span {
    float: none;
  }
  .search-block {
    width: 100%;
    margin: 20px 0;
  }
  .address-contact {
    width: 100%;
    float: left;
  }
  .form-contact {
    width: 100%;
    float: left;
    margin-bottom: 20px;
  }

  .news-page ul li {
    width: calc(50% - 10px);
    float: left;
    margin-right: 0;
  }
  .news-page ul li:nth-child(odd) {
    float: left;
  }
  .news-page ul li:nth-child(even) {
    float: right;
  }
  .news-page ul li:nth-child(2n + 1) {
    clear: both;
    margin-right: 20px;
  }
  .news-page ul li:nth-child(3n + 1) {
    float: left;
    clear: none;
  }
}

@media only screen and (max-width: 720px) {
  .content-page {
    margin: 0 -15px;
    width: calc(100% + 30px);
    margin-bottom: 10px;
  }
  .hot-news-large {
    margin-right: 0;
    width: 100%;
  }
  .hot-news ul {
    width: 100%;
    padding: 0;
  }
  .pic-product {
    width: 100%;
  }
  .intro-product {
    width: 100%;
    margin: 0;
  }
  .call-hotline {
    margin: 0 -15px;
    width: calc(100% + 30px);
  }
  .steps-1,
  .steps-2 {
    width: 100%;
    float: left;
  }

  .col-signin-left {
    width: 100%;
    border: none;
    margin: 0 0 20px 0;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #ddd;
  }
  .col-signin-right {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .head-cart {
    display: none;
  }

  .total-price {
    padding-right: 15px;
  }
  .button-buy-cart input[type="button"] {
    padding: 10px;
    margin-left: 0;
  }
}

@media only screen and (max-width: 667px) {
  .account-col,
  .account-main {
    width: 100%;
    margin: 0;
  }
}

@media only screen and (max-width: 520px) {
  .product-block ul li .pic-news > a {
    height: 170px;
  }
  .product-block ul li .price-product {
    width: 100%;
    padding: 10px;
  }
  .product-block ul li .cart-product {
    float: left;
    margin: 0;
    width: 100%;
    padding: 0 10px;
  }
  .product-block ul li .cart-product a {
    width: calc(50% - 2px);
    margin: 0 1px;
  }
  .icon-tinnhiem,
  .info-footer,
  .menu-footer {
    width: 100%;
    margin: 10px 0;
    padding-left: 0;
  }
  .quanlity-product,
  .call-phone-zalo {
    width: 100%;
    padding: 0;
    border: none;
  }
  .but-buynow {
    display: none;
  }
  .mobile-buynow {
    width: 100%;
    display: block;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
  }
  .buy-now-mobile {
    width: calc(100% - 50px);
    float: left;
  }
  .call-zalo {
    width: 50px;
    float: left;
    text-align: center;
  }
  .mess-face {
    width: 60px;
    float: left;
    text-align: center;
    display: none;
  }

  .buy-now-mobile .but-buynow {
    display: block;
    height: 50px;
  }
  .but-buynow input[type="button"] {
    padding: 16px;
    margin-top: 0;
    border-radius: 0;
  }
  .but-buynow input[type="image"] {
    width: calc(50% - 2px);
    float: left;
    border: none;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    background: #f28902;
    padding: 12px 0px;
    margin-left: 2px;
    margin-top: 0;
  }
  .search-page ul li {
    width: 100%;
  }
  .copyright {
    padding-bottom: 70px;
  }

  .order-product {
    overflow: auto;
  }
  .order-product ul {
    width: 400px;
    float: left;
    padding-right: 15px;
  }
}

@media only screen and (max-width: 480px) {
  header {
    padding-top: 30px;
  }
  .widget-head span {
    float: left;
    width: 100%;
    text-align: center;
  }
  .login-cart,
  .formcus-cart {
    width: 100%;
  }
  .info-cus-delivery label {
    width: 100%;
  }
  .form-delivery {
    width: 100%;
  }
}
</style>
