<template>
  <div class="home">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <div class="section">
      <navbar></navbar>
      <banner></banner>
    </div>
    <div class="main">
      <div class="bg-dark">
        <div class="container" style="background-color: #eee">
          <colLeft></colLeft>
          <mainHome></mainHome>
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
import banner from "@/components/section/banner.vue";
import mainHome from "@/views/user/home/home-content.vue";
import colLeft from "@/views/user/home/col-left.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  components: {
    TopHead,
    Head,
    navbar,
    banner,
    mainHome,
    colLeft,
    footer1,
    contact,
  },
};
</script>

<style scoped>
.sticky {
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 30px;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  -moz-transition: 0.4s ease;
  -o-transition: 0.4s ease;
}
.sticky .content {
  padding-top: 60px;
}
</style>
