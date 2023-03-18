<template>
  <div class="poruct-view">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <div class="section">
      <navbar></navbar>
      <div class="sub-bg">
        <div id="link" class="container">
          <div class="sub-head" v-for="(item, index) in list" :key="index">
            <a href="/"><i class="fa fa-home"></i> Trang chủ </a>
            <a href="#">Cây cảnh</a>
            <a href="#">{{ item.class_name }}</a>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="bg-dark">
        <div class="container" style="background-color: #eee">
          <colLeft style="width: 25%"></colLeft>
          <productsContent></productsContent>
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
import productsContent from "./products-content.vue";
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  data() {
    return {
      list: {},
      counter: 1,
      class: "",
    };
  },
  //get Api
  mounted() {
    fetch(Api + "/products?id=" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.list = data));
  },
  methods: {},
  watch: {
    list(newVal) {
      if (newVal[0].class) {
        fetch(Api + "/class?id=" + newVal[0].class)
          .then((response) => response.json())
          .then((data) => (this.class = data));
      }
    },
  },
  name: "HomeView",
  components: {
    TopHead,
    Head,
    navbar,
    productsContent,
    footer1,
    contact,
  },
};
</script>
