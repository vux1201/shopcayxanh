<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="container">
      <div class="menu-footer">
        <h4>Truy Cập Nhanh</h4>
        <ul>
          <li>
            <a href="/introduce" target="">Giới thiệu</a>
          </li>
          <li>
            <a href="#" target="">Dịch Vụ</a>
          </li>
          <li>
            <a href="#" target="">Blog - Tin Tức</a>
          </li>
          <li>
            <a href="#" target="">Hỗ trợ</a>
          </li>
          <li>
            <a href="#" target="">Chính sách đổi trả hàng</a>
          </li>
        </ul>
      </div>
      <div class="info-footer">
        <p>
          <big>TÀI KHOẢN</big>
        </p>
        <p>
          <big>
            <b>Ngân hàng Đông Á</b>
            Số TK: 0103720160, PGD Tô Hiến Thành, TP. HCM - Chủ Tài Khoản: Dương
            Công Đông.
          </big>
        </p>
        <p>
          <big>
            <b>Ngân hàng VietCombank </b>
            Số TK: 042 100 385 5531 - Chủ Tài Khoản: Nguyễn Thị Hồng Vân.
          </big>
        </p>
        <p>
          <big>
            <b>Ngân hàng ACB</b>
            Số TK:130230819 - Chủ TK: Dương Công Đông
          </big>
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  float: left;
  padding: 20px 0;
  background: #fff;
}
.icon-tinnhiem {
  width: 120px;
  float: left;
  text-align: center;
  margin-right: 30px;
  a {
    float: left;
    margin: 0;
  }
}
.menu-footer {
  width: calc(50% - 150px);
  float: left;
  ul li {
    width: 100%;
    float: left;
    a {
      color: #333;
      float: left;
      font-size: 14px;
      padding: 2px 0;
      &:hover {
        color: #ff8000;
      }
    }
  }
}
.info-footer {
  width: 50%;
  float: left;
  line-height: 2;
  padding-left: 20px;
  p {
    padding-bottom: 0;
    color: #333;
    font-size: 13px;
    line-height: 1.5;
  }
}
.info-footer h4,
.menu-footer h4,
.adress-footer h4 {
  font-size: 18px;
  color: #000;
  text-transform: uppercase;
  margin: 10px 0;
}
</style>
