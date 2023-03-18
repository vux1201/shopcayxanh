<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-dark">
    <div class="container">
      <div class="content">
        <div id="vnAdMiddel1_banner1" class="banner-slider">
          <div class="owl-slider count-slider">
            <div class="item">
              <a href="">
                <img
                  alt="vuon-cay-viet-banner-new.jpg"
                  class="owl-dk cms_file"
                  src="../../assets//img/banner/vuon-cay-viet-banner-new.jpg"
                />
              </a>
              <!-- <a href="">
                <img
                  alt="banner-showroom-vuoncayviet-mobile-7-7.jpg"
                  class="owl-mb"
                  src="./data/aditems/banner-showroom-vuoncayviet-mobile-7-7.jpg"
                />
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  img {
    width: 100%;
  }
  &.small-1 {
    margin-right: 0px;
  }
  &.small-2 {
    margin-left: 0px;
  }
}
</style>
