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
                    <v-carousel
                      cycle
                      height="400"
                      hide-delimiter-background
                      show-arrows="hover"
                    >
                      <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                        :src="slide.src"
                      >
                      </v-carousel-item>
                    </v-carousel>
                    <!-- <div class="list-img">
                      <img
                        src="https://vuoncayviet.com/data/items/1183/cay-luoi-ho-co-may-loai.jpg"
                        alt=""
                        width="100%"
                      />
                      <img
                        src="https://vuoncayviet.com/data/items/1236/dac-diem-sinh-truong-y-nghia-phong-thuy-cach-cham-soc-cay-truc-bach-hop-1.jpg"
                        alt=""
                        width="100%"
                      />
                    </div> -->
                    <!-- <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FsinhvienITVietNam%2Fvideos%2F548462343689952%2F&show_text=false&width=476&t=0"
                      width="476"
                      height="476"
                      style="border: none; overflow: hidden"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe> -->
                  </div>
                </div>
              </div>
              <div class="news-page"></div>
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
  data() {
    return {
      slides: [
        {
          src: "https://vuoncayviet.com/data/items/1183/cay-luoi-ho-co-may-loai.jpg",
        },
        {
          src: "https://vuoncayviet.com/data/items/1183/cay-luoi-ho-co-may-loai.jpg",
        },
        {
          src: "https://vuoncayviet.com/data/items/1183/cay-luoi-ho-co-may-loai.jpg",
        },
      ],
    };
  },
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
.list-img {
  overflow: hidden;
  height: 500px;
  width: 400px;
  margin: 0 auto;
  /* 0 */
  width: 100%;
  animation: slideshow 6s infinite;
}
img {
  width: 50%;
  margin-left: 20%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes slideshow {
  20% {
    margin-top: 0;
  }
  30% {
    margin-top: -100%;
  }
  40% {
    margin-top: -100%;
  }
  50% {
    margin-top: -200%;
  }
  60% {
    margin-top: -200%;
  }
  70% {
    margin-top: -300%;
  }
  80% {
    margin-top: -300%;
  }
  90% {
    margin-top: -400%;
  }
  100% {
    margin-top: -400%;
  }
}
iframe {
  padding: 20px;
  margin-left: 30px;
}
</style>
