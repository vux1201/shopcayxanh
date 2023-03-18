<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Introduce">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <div class="section">
      <navbar></navbar>
      <section class="sub-bg">
        <div class="container">
          <div class="sub-head">
            <a href="/"><i class="fa fa-home"></i>Trang chủ </a>
            <span> Đăng Nhập</span>
          </div>
        </div>
      </section>
    </div>
    <div class="main">
      <mainLogin></mainLogin>
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
import mainLogin from "@/views/user/login/login/login-content.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  name: "HomeView",
  components: {
    TopHead,
    Head,
    navbar,
    mainLogin,
    footer1,
    contact,
  },
};
</script>
