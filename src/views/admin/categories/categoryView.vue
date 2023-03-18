<template>
  <div class="Introduce">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <div class="section" v-for="(item, index) in list" :key="index">
      <navbar></navbar>
      <section class="sub-bg">
        <div id="link" class="container">
          <div class="sub-head">
            <a href="/"><i class="fa fa-home"></i> Trang chủ </a>
            <span
              ><a href="#">{{ item.name }}</a></span
            >
          </div>
        </div>
      </section>
    </div>
    <div class="main">
      <div class="bg-dark">
        <div class="container" style="background-color: #eee">
          <colLeft style="width: 25%"></colLeft>
          <mainDeskTree></mainDeskTree>
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
let Api = "http://localhost:3000";
import TopHead from "@/components/head/top-head.vue";
import Head from "@/components/head/head.vue";
import navbar from "@/components/section/navbar.vue";
import mainDeskTree from "@/views/admin/categories/category-content.vue";
import colLeft from "@/views/user/home/col-left.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  data() {
    return {
      list: {},
    };
  },
  //get Api
  mounted() {
    fetch(Api + "/class?id=" + this.$route.params.class)
      .then((response) => response.json())
      .then((data) => (this.list = data));
  },
  methods: {},
  components: {
    TopHead,
    Head,
    navbar,
    mainDeskTree,
    colLeft,
    footer1,
    contact,
  },
};
</script>
