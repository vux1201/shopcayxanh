<template>
  <div class="personal-info">
    <div class="head">
      <TopHead></TopHead>
      <Head></Head>
    </div>
    <navbar></navbar>
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <a href="/"><i class="fa fa-home"></i>Trang chủ </a>
          <span> Thay đổi mật khẩu</span>
        </div>
      </div>
    </section>
    <section class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div class="content-payment">
            <div class="account-col">
              <h2>
                <i>
                  <img src="https://vuoncayviet.com/img/user2-160x160.jpg"
                /></i>
                <p>Nguyễn Vũ</p>
              </h2>
              <ul>
                <li>
                  <a href="/user-profile">Thông tin cá nhân</a>
                </li>
                <li>
                  <a href="/changePassword">Đổi mật khẩu</a>
                </li>
                <li><a href="/myOrder" class="active">Đơn Hàng Của Tôi</a></li>
                <li><a href="/">Thoát</a></li>
              </ul>
            </div>
            <!-- content -->
            <div class="account-content">
              <div class="account-main my-menulist">
                <h3 class="text-center">Đơn Hàng Của Tôi</h3>
                <h4>Danh sách đơn hàng đã đặt</h4>
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Ngày Yêu Cầu</th>
                        <th>Yêu Cầu</th>
                        <th>Tổng Tiền</th>
                        <th>Tình Trạng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="center">
                          <a href="/order-details">1</a>
                        </td>
                        <td class="day">
                          <a href="/order-details">08-03-2023 16:22:00</a>
                        </td>
                        <td>Bọc kỹ hàng trước khi giao</td>
                        <td class="price-all">435,000 đ</td>
                        <td class="no-finish">Đã nhận</td>
                      </tr>

                      <tr>
                        <td class="center">
                          <a href="/order-details">2</a>
                        </td>
                        <td class="day">
                          <a href="/order-details">09-03-2023 14:12:00</a>
                        </td>
                        <td>Giao hàng vào buổi sáng</td>
                        <td class="price-all">85,000 đ</td>
                        <td class="no-finish">Chưa xử lý</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import footer1 from "@/components/footer/footer.vue";
import contact from "@/components/footer/contact.vue";

export default {
  components: {
    TopHead,
    Head,
    navbar,
    footer1,
    contact,
  },
};
</script>

<style lang="scss" scoped>
.content-page {
  width: 100%;
  float: left;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
}
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
  .account-col {
    width: 300px;
    height: max-content;
    margin-right: 20px;
    float: left;
    border: 1px solid #ddd;
    h2 {
      display: flex;
      font-size: 16px;
      background: #ddd;
      i img {
        width: 70px;
        border-radius: 100%;
        overflow: hidden;
        padding: 3px;
      }
      p {
        margin-top: 33px;
      }
    }
    ul {
      padding: 15px;
      li {
        width: 100%;
        float: left;
        a.active {
          color: #f28902;
        }
        a {
          border-bottom: 1px dashed #ccc;
          padding-bottom: 10px;
          margin-bottom: 10px;
          display: block;
        }
      }
    }
  }
  .account-content {
    .account-main {
      width: 808px;
      float: left;
      border: 1px solid #ddd;
      padding: 15px;
      position: relative;
      min-height: 300px;
      h3 {
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
        margin: 0 0 20px 0;
      }
    }
    .my-menulist {
      h4 {
        border-top: 2px solid #ccc;
        padding: 7px 0;
        width: 100%;
        float: left;
        font-size: 13px;
        font-weight: bold;
      }
      .table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        thead tr th {
          padding: 8px;
          line-height: 1.42857143;
          background: #999;
          color: #fff;
          border-bottom: none;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;
        }
        tbody tr td {
          text-align: center;
          padding: 8px;
          .day {
            font-size: 13px;
          }
          .price-all {
            text-align: center;
            font-weight: bold;
          }
          .no-finish {
            color: #f00;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
