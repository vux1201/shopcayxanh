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
            <span> Đăng Ký</span>
          </div>
        </div>
      </section>
    </div>
    <div class="main">
      <signinContent></signinContent>
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
import signinContent from "@/views/user/login/signup/signup-content.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  name: "HomeView",
  components: {
    TopHead,
    Head,
    navbar,
    signinContent,
    footer1,
    contact,
  },
};
</script>
