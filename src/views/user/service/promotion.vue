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
          <span>Khuyến mãi</span>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <colLeft></colLeft>
          <div class="main-block">
            <div class="content-page detail-news">
              <h1>SALE TƯNG BỪNG - MỪNG 8/3</h1>
              <span class="HotNameDesc"
                ><p style="text-align: justify">
                  Nhân ngày Quốc Tế Phụ Nữ 8/3, Vườn Cây Việt quyết định tung ra
                  khuyến mại cực khủng nhằm thay lời chúc tới các khách hàng
                  thân yêu của chúng tôi.
                </p>
                <p style="text-align: center">
                  <img
                    src="https://vuoncayviet.com/data/items/1169/0001.jpg"
                    alt="0001.jpg"
                    width="600"
                    height="899"
                  />
                </p>
                <ul style="text-align: justify">
                  <li>
                    Ưu đãi lên đến 15% cho tất cả cây cảnh xinh xinh tại Vườn
                    Cây Việt.
                  </li>
                  <li>
                    Chưa hết, khi đến mua chỉ cần nói với nhân viên “Mua Để
                    tặng”, lập tức bạn sẽ được giảm thêm 5% nữa đấy.
                  </li>
                  <li>
                    Free Ship cho tất cả hóa đơn từ 300k (áp dụng cho khu vực
                    nội thành TP.HCM)
                  </li>
                </ul>
                <p style="text-align: justify">
                  <span style="color: #ff6600"
                    ><strong>Điều kiện áp dụng:</strong></span
                  >
                </p>
                <p style="text-align: justify">
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chương trình áp
                  dụng cho khách hàng đến mua trực tiếp và checkin tại Showroom
                  Vườn Cây Việt (20/4 Kỳ Đồng, phường 9, quận 3, TP.HCM).
                </p>
                <p style="text-align: justify">
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thời gian áp dụng
                  từ 06/03.2023 đến hết ngày 09/03.2023.
                </p>
                <p style="text-align: justify">
                  Nhanh chân đến showroom Vườn Cây Việt ngay hôm nay để nhận ưu
                  đãi siêu hấp dẫn nhé các tình yêu.
                </p></span
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
