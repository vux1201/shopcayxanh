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
          <span>Liên hệ</span>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <colLeft></colLeft>
          <div class="main-block">
            <h1>Liên hệ</h1>
            <div class="address-contact">
              <h2>Vườn Cây Việt</h2>
              <p>
                <i class="fa fa-map-marker"></i>&nbsp;Phú Thạnh, Tân Phú, Hồ Chí
                Minh
              </p>
              <p>
                <i class="fa fa-phone"></i>
                <a href="tel:0985507150">&nbsp;0985507150</a>
              </p>
              <p>
                <i class="fa fa-envelope"></i
                ><a href="#">&nbsp;vuoncayviet@gmail.com</a>
              </p>
            </div>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14900.663295819144!2d105.77772!3d20.985989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453346a29be15%3A0x717e79deffe5568b!2sRoman%20Plaza!5e0!3m2!1svi!2sus!4v1679385453514!5m2!1svi!2sus"
                width="780"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
.main-block h1 {
  font-size: 26px;
  color: #ff6600;
  padding-bottom: 5px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}
.map {
  padding: 20px;
  width: 1;
}
.address-contact {
  width: 40%;
  float: left;
  padding: 1rem;
  padding-left: 3rem;
}
</style>
