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
          <span>Dịch Vụ</span>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <colLeft></colLeft>
          <div class="main-block">
            <div class="content-page detail-news">
              <h1>
                Bảng tra cứu lượng nước cần thiết khi chăm sóc cây cảnh để bàn
              </h1>
              <span id="vnContent1__ctl0_lblHtmlInfo" class="HotNameDesc"
                ><p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nước và
                  ánh sáng luôn là những nhu cầu thiết yếu của cây cảnh. Tuy
                  nhiên, với từng loại cây khác nhau thì những nhu cầu này cũng
                  khác nhau. Vậy cây cảnh trên bàn của bạn đang cần bao nhiêu
                  nước và ánh sáng là đủ?
                </p>
                <p>
                  Để biết đáp án, hãy cùng tra cứu bảng chăm sóc cây cảnh để
                  bàn: lượng nước và ánh sáng cần thiết dưới đây nhé.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Một số
                  lưu ý khi sử dụng bảng tra cứu lượng nước cần thiết cho cây
                  cảnh để bàn
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dưới
                  đây là lượng nước ước lượng mà Vườn Cây Việt gợi ý để tưới cho
                  từng loại cây để bàn. Để chắc chắn, các bạn hãy đảm bảo rằng
                  lượng nước tưới cung cấp vừa đủ để bề mặt đất vừa đủ ẩm. Chỉ
                  khi bề mặt đất không còn ẩm nữa thì mới bắt đầu tưới thêm cho
                  cây (khoảng thời gian này thường là từ 3 – 4 ngày).
                </p>
                <p>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vì là
                  cây để bàn, đa phần là để trong phòng làm việc, phòng máy lạnh
                  nên yêu cầu tối thiểu của nhóm cây này là cần được phơi nắng
                  ít nhất 3 giờ/tuần/1 lần. Tuy nhiên, một điều hết sức lưu ý là
                  hãy cố gắng phơi cây từ lúc sáng sớm. Vì thời gian này nhiệt
                  độ ngoài trời còn thấp, đủ để cây thích nghi dần dần với nhiệt
                  độ ngoài trời.
                </p>
                <p><strong>Xem thêm:</strong>&nbsp;</p>
                <p>
                  <span style="color: #ff6600"
                    ><strong
                      ><span style="color: #ff6600"
                        ><img
                          src="https://vuoncayviet.com/data/items/1234/Bang-tra-cuu-luong-nuoc-cay-de-ban.png"
                          alt="Bang-tra-cuu-luong-nuoc-cay-de-ban.png"
                          width="1532"
                          height="4479" /></span></strong
                  ></span>
                </p>
                <div id="eJOY__extension_root" style="all: unset">
                  &nbsp;
                </div></span
              >
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
.detail-news h1 {
  font-size: 26px;
  color: #ff6600;
  padding-bottom: 5px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}
.detail-news img {
  max-width: 100%;
  height: auto;
  text-align: center;
  margin: 10px px 0;
}
</style>
