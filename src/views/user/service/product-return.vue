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
          <a href="#">Hỗ trợ</a><a href="#">Chính sách đổi, trả hàng</a
          ><span>Vườn Cây Việt: Cây cảnh chất lượng - bảo hành yên tâm</span>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <colLeft></colLeft>
          <div class="main-block">
            <div class="content-page detail-news">
              <h1>Vườn Cây Việt: Cây cảnh chất lượng - bảo hành yên tâm</h1>
              <span class="HotNameDesc"
                ><p>
                  Tất cả những sản phẩm cây cảnh, chậu trồng hay phụ kiện, … đến
                  với khách hàng đều đã được kiểm tra chất lượng kỹ lưỡng. Tuy
                  nhiên, Vườn Cây Việt vẫn có chính sách bảo hành để quý khách
                  được yên tâm hơn khi lựa chọn mua sản phẩm của chúng tôi
                </p>
                <h2>
                  <span style="color: #ff6600; font-size: large"
                    ><strong>Địa chỉ bảo hành</strong></span
                  >
                </h2>
                <p>
                  Quý khách hàng muốn đổi hoặc trả sản phẩm, vui lòng đến
                  showroom Vườn Cây Việt tại địa chỉ 20/4 Kỳ Đồng, Phường 9,
                  Quận 3, TP. Hồ Chí Minh
                </p>
                <p>
                  Các bạn hãy liên hệ hotline&nbsp;<strong>0985 507 150</strong>
                  trước khi đến để được hướng dẫn đường đi nhé!
                </p>
                <h2>
                  <strong
                    ><span style="color: #ff6600; font-size: large"
                      >Điều kiện bảo hành</span
                    ></strong
                  >
                </h2>
                <p>
                  Vườn Cây Việt chỉ chấp nhận đổi/trả trong khi sản phẩm đáp ứng
                  những điều kiện sau đây:
                </p>
                <ul>
                  <li>
                    Sản phẩm nhận được không đúng mẫu mã, kích thước, màu sắc
                    như hình ảnh giới thiệu trên website hoặc điện thoại
                  </li>
                  <li>
                    Sản phẩm phải còn nguyên vẹn: Không gãy hoặc khô héo bông,
                    lá, thân Không bể, nứt hay trầy xước chậu
                  </li>
                  <li>Những phụ kiện đi kèm (nếu có) phải còn đầy đủ</li>
                  <li>
                    Sản phẩm có hóa đơn bán hàng của Vườn Cây Việt, hóa đơn
                    không rách, có chữ ký người bán hàng, ngày tháng mua hàng,
                    số lượng, thông tin sản phẩm
                  </li>
                  <li>
                    Không áp dụng đổi/trả đối với sản phẩm sen đá, xương rồng,
                    cây thủy sinh
                  </li>
                </ul>
                <h2>
                  <strong
                    ><span style="color: #ff6600; font-size: large"
                      >Thời gian bảo hành</span
                    ></strong
                  >
                </h2>
                <ul>
                  <li>Đổi hàng trong vòng 5 ngày kể từ ngày mua sản phẩm</li>
                  <li>Trả hàng trong vòng 2 ngày kể từ ngày mua sản phẩm</li>
                  <li>
                    Đối với cây cảnh nội/ngoại thất, được đổi/trả trong vòng 5-7
                    ngày kể từ ngày mua
                  </li>
                </ul>
                <h2>
                  <strong
                    ><span style="color: #ff6600; font-size: large"
                      >Hướng dẫn bảo hành</span
                    ></strong
                  >
                </h2>
                <h3>
                  <strong
                    ><span style="font-size: medium">Đổi hàng</span></strong
                  >
                </h3>
                <ul>
                  <li>
                    Áp dụng với sản phẩm mua online và offline tại showroom
                  </li>
                  <li>
                    Đổi miễn phí đối với sản phẩm cùng loại và bằng giá tiền
                  </li>
                  <li>Đổi sản phẩm có giá trị lớn hơn phải bù tiền</li>
                </ul>
                <h3>
                  <strong
                    ><span style="font-size: medium">Trả hàng</span></strong
                  >
                </h3>
                <ul>
                  <li>
                    Không áp dụng với trường hợp mua hàng offline tại showroom
                  </li>
                  <li>
                    Trả hàng khi sản phẩm bị hư hại do quá trình vận chuyển
                  </li>
                </ul>
                <p>
                  Ngoài ra, nếu khách hàng nào thắc mắc về cách trồng cũng như
                  chăm sóc cây cảnh, có thể liên hệ chúng tôi để được hỗ trợ tư
                  vấn. Vườn Cây Việt luôn sẵn sàng lắng nghe và giúp đỡ các bạn.
                  Xin cảm ơn quý khách đã lựa chọn sản phẩm từ Vườn Cây Việt.
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
