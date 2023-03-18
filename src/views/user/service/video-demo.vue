<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="service">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <navbar></navbar>
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <a href="/"><i class="fa fa-home"></i> Trang chủ </a>
          <a href="#">Blog - Tin Tức</a>
          <span><a href="#">Video</a></span>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <colLeft></colLeft>
          <div class="main-block">
            <div class="content-page">
              <div class="title">
                <h1>Video</h1>
              </div>
              <div class="hot-news">
                <div class="hot-news-large">
                  <div class="img-news-hot">
                    <img
                      src="https://vuoncayviet.com/data/items/1183/cay-luoi-ho-co-may-loai.jpg"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <p>&nbsp;&nbsp;&nbsp;Video giới thiệu về các loại cây:))</p>
                </div>
              </div>
              <div class="news-page"></div>
            </div>
            <div id="vnContent1__ctl0_tblPager" class="pages"></div>
          </div>
        </div>
      </section>
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
import colLeft from "@/views/user/home/col-left.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  components: {
    TopHead,
    Head,
    navbar,
    colLeft,
    footer1,
    contact,
  },
};
</script>

<style scoped>
.main-block {
  float: right;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
}
.content-page .title h1 {
  font-size: 20px;
  font-weight: bold;
  color: #3daa12;
}
.content-page .title {
  border-bottom: 1px solid #3daa12;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
img {
  width: 50%;
  margin-left: 20%;
}
</style>
