<template>
  <div class="Introduce">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <div class="section">
      <navbar></navbar>
      <div class="sub-bg">
        <div id="link" class="container">
          <div class="sub-head">
            <router-link to="/"
              ><i class="fa fa-home"></i>Trang chủ</router-link
            >
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <cart></cart>
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
import cart from "@/views/user/cart/cart-content.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  components: {
    TopHead,
    Head,
    navbar,
    cart,
    footer1,
    contact,
  },
};
</script>
