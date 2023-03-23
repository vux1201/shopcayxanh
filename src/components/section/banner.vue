<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-dark">
    <div class="container">
      <div class="content">
        <div id="vnAdMiddel1_banner1" class="banner-slider">
          <div class="owl-slider count-slider">
            <div class="item">
              <image src="" alt="">
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
              </image>
              <!-- <a href="">
                <img
                  alt="vuon-cay-viet-banner-new.jpg"
                  class="owl-dk cms_file"
                  src="../../assets//img/banner/vuon-cay-viet-banner-new.jpg"
                />
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: "https://vuoncayviet.com/data/aditems/93/vuon-cay-viet-banner-new.jpg",
        },
        {
          src: "https://lh3.googleusercontent.com/WYHmLSJ2u0hDe9UfCB3Zq55kusoJG-hkfnZlmq2QnvcbjzTg78Mtq0NlIPiMjSyxXHAdso67lAHMG7wFWmEzEmfXFnQkGQluZwQrI_Ld1EpwWPu2HdQmV-i9IcShCZfpsIqfne4lZC6sP2cbHt1kDlnBTihfXChdyWvI3uo26pbSuiPs21IoXD73TWrOc06j5vOu349OLORX-y51AGIvMZ3m0Wg806QrCLFVwZDjmiRrflBOVnYThwUopRijlIqXE6wTZtHefX51OOdhCsjlTC2Ph_VP_e34IsmXIkrRK-Aw5aawM00wqOGA_ERfQDMpkLXr2dkA3SmYHrTVpKDEHrPMT8nnllX-H4pX30ualzalMhjH6_fnhuu_bihnhYCygiQq1D_hzDYLOD7nsKOvJSyLwl2UpVsOMPunyTWNf97J0iEdVH35sCWWbridIYt1QAr0aBqg6SElKRiysUdGu2LJgk3cZoWXgFtLV7OG8yJC13Y-dXbUgZ3nc4_jIwhvRo3MSgWHMeKj_r0GqZjeyuPIDC9WKW5DVEjvHNUU7rfuCZgcgiOyYZZYQpWbXzN9bzH9gU48MnrI0FlpWxHISIVsX9HGEWn5G5u3PUDNZw4OvKbNm2p9oLVKLFJrfYPRAiL58sXZlDxK7vWMO-eXhxJd4CRs5CoHzJfWfDsoETPhgtJHE2zhV3qxL7_mDb6p5VNv1KFWRDxvN_Rc0dIifQHxLYgiUogKXR4GRkGUp6vmpp8-4nkU6B4OZsP4hDCDPwyoXLv-ogAumYyR6fp4_zU_5rdbd0YugqUB3AeqzgwMgSqSspwnSu-53g8c4yXKGuAHwQyWQFCXn2nYHKmhThAuuUUGSyBVUSqfTcMeErskrlzHKANLQDh5uCJ5pKpW1Zw6bf-Vevu5NiLcPzLTYnQXhkPTCwwfRccli-cm4-DZ5_c=w1920-h674-no?authuser=0",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-dark {
  background: #eee;
  width: 100%;
  float: left;
}
.content .banner-slider .item img {
  width: 100%;
}
.banner-slider {
  width: 100%;
  float: left;
}
.banner-small {
  width: 50%;
  float: left;
  margin: 20px 0;
  image {
    width: 100%;
    .v-img__img {
      width: 100%;
    }
  }
  &.small-1 {
    margin-right: 0px;
  }
  &.small-2 {
    margin-left: 0px;
  }
}
</style>
