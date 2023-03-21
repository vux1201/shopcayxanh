<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="nav-bar">
    <section id="navbar">
      <div class="container">
        <nav>
          <div id="cssmenu">
            <div id="menu-button">Menu</div>
            <ul>
              <!-- Giới thiệu -->
              <li>
                <router-link to="/introduce">Giới thiệu</router-link>
              </li>
              <!-- Cây cảnh -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Cây cảnh</a>
                <ul>
                  <li>
                    <a href="/categoryView/1">Cây cảnh để bàn</a>
                  </li>
                  <li>
                    <a href="/categoryView/2">Cây thủy sinh</a>
                  </li>
                  <li>
                    <a href="/categoryView/3">Cây cảnh nội thất</a>
                  </li>
                  <li>
                    <a href="#" target="">Sen đá, xương rồng</a>
                  </li>
                  <li>
                    <a href="#" target="">Cây chậu treo</a>
                  </li>

                  <li>
                    <a href="#" target="">Terrarium</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây cảnh ngoại thất</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây Bonsai</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây ăn trái</a>
                  </li>
                </ul>
              </li>
              <!-- Chậu cảnh -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Chậu cảnh</a>

                <ul>
                  <li>
                    <a href="#" target="">Chậu đất nung</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu đá mài - xi măng</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu composite</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu Bonsai</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu men sứ</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu thủy tinh</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu nhựa ABS</a>
                  </li>
                </ul>
              </li>
              <!-- Phụ kiện -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Phụ kiện cây cảnh</a>

                <ul>
                  <li>
                    <a href="#" target="">Đất trồng, phân bón</a>
                  </li>

                  <li>
                    <a href="#" target="">Dung dịch thủy sinh</a>
                  </li>

                  <li>
                    <a href="#" target="">Dụng cụ làm vườn</a>
                  </li>

                  <li>
                    <a href="#" target="">Vật trang trí tiểu cảnh</a>
                  </li>
                </ul>
              </li>
              <!-- Dịch vụ  -->
              <li><a href="/service" target="">Dịch Vụ</a></li>
              <!-- Tin túc  -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Blog - Tin Tức</a>

                <ul>
                  <li>
                    <a href="/bonsai-knowledge" target="">Kiến Thức Cây Cảnh</a>
                  </li>

                  <li><a href="/video-demo" target="">Video</a></li>
                </ul>
              </li>
              <!-- Hỗ trợ  -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Hỗ trợ</a>

                <ul>
                  <li>
                    <a href="/shopping-guide" target="">Hướng dẫn mua hàng</a>
                  </li>

                  <li>
                    <a href="/product-return" target=""
                      >Chính sách đổi, trả hàng</a
                    >
                  </li>
                </ul>
              </li>
              <!-- Liên hệ -->
              <li><a href="#" target="">Liên hệ</a></li>
              <!-- Khuyến mãi  -->
              <li>
                <a href="/promotion" target="">Khuyến mãi</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  float: left;
  background: #3daa12;
}
#cssmenu,
#cssmenu ul,
#cssmenu ul li,
#cssmenu ul li a,
#cssmenu #menu-button {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  line-height: 1;
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.sticky {
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 30px;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  -moz-transition: 0.4s ease;
  -o-transition: 0.4s ease;
  + .content {
    padding-top: 60px;
  }
}
#cssmenu:after,
#cssmenu > ul:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
#cssmenu #menu-button {
  display: none;
}
#cssmenu {
  float: left;
  z-index: 998;
  > ul > li {
    float: left;
    > a {
      padding: 17px 16px;
      font-size: 14px;
      text-decoration: none;
      color: #fff;
      font-weight: 500;
    }
    &:hover > a,
    &.active > a {
      background: rgba(0, 0, 0, 0.2);
    }
    &.has-sub > a {
      padding-right: 20px;
      &:after {
        content: "\f0d7";
        margin-left: 5px;
        font-family: "FontAwesome";
      }
    }
    &.has-sub:hover > a:after {
      content: "\f0d7";
      font-family: "FontAwesome";
    }
  }
  &.align-center > ul {
    font-size: 0;
    text-align: center;
    > li {
      display: inline-block;
      float: none;
    }
  }
  &.align-center ul ul {
    text-align: left;
  }
  &.align-right > ul > li {
    float: right;
  }
  ul ul {
    position: absolute;
    left: -9999px;
    li {
      height: 0;
      -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      -ms-transition: all 0.25s ease;
      -o-transition: all 0.25s ease;
      transition: all 0.25s ease;
      a {
        border-bottom: 1px solid rgba(150, 150, 150, 0.15);
        padding: 9px 15px;
        width: 180px;
        font-size: 13px;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        text-align: left;
      }
      &:last-child > a,
      &.last-item > a {
        border-bottom: 0;
      }
      &:hover > a,
      a:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #fff;
      }
      &.has-sub > a:before {
        content: "\f0da";
        font-family: "FontAwesome";
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    ul {
      margin-left: 100%;
      top: 0;
    }
  }
  &.align-right ul ul {
    text-align: right;
    ul {
      margin-left: 0;
      margin-right: 100%;
    }
    li.has-sub > a:before {
      right: auto;
      left: 14px;
    }
  }
  li:hover > ul {
    left: auto;
    background: #3daa12;
    > li {
      height: auto;
    }
  }
  &.align-right li:hover > ul {
    left: auto;
    right: 0;
  }
  &.small-screen {
    width: 100%;
    ul {
      width: 100%;
      display: none;
      li {
        width: 100%;
        border-top: 1px solid #999;
      }
      li a,
      ul li a {
        width: 100%;
        border-bottom: 0;
        h2 {
          font-size: 14px;
        }
      }
      ul li a {
        padding-left: 25px;
      }
      ul ul li a {
        padding-left: 35px;
      }
      ul li a {
        color: #dddddd;
        background: none;
      }
      ul li:hover > a,
      ul li.active > a {
        color: #f68220;
      }
      ul .submenu-button {
        height: 34px;
        width: 34px;
        &:after {
          top: 15px;
          right: 13px;
        }
        &:before {
          top: 12px;
          right: 16px;
        }
      }
    }
    &.align-center > ul {
      text-align: left;
    }
    ul ul li,
    li:hover > ul > li {
      height: auto;
    }
    > ul > li {
      float: none;
    }
    ul ul,
    ul ul ul,
    &.align-right ul ul {
      position: relative;
      left: 0;
      width: 100%;
      margin: 0;
      text-align: left;
    }
    > ul > li.has-sub > a:after,
    > ul > li.has-sub > a:before,
    ul ul > li.has-sub > a:after,
    ul ul > li.has-sub > a:before {
      display: none;
    }
    #menu-button {
      display: block;
      padding: 18px 0 18px 40px;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
      background: #3daa12;
      &:after {
        content: "";
        position: absolute;
        top: 22px;
        left: 10px;
        display: block;
        height: 8px;
        width: 20px;
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
      }
      &:before {
        content: "";
        position: absolute;
        top: 16px;
        left: 10px;
        display: block;
        height: 2px;
        width: 20px;
        background: #fff;
      }
      &.menu-opened:after {
        top: 23px;
        border: 0;
        height: 2px;
        width: 15px;
        background: #000;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &.menu-opened:before {
        top: 23px;
        background: #000;
        width: 15px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
    .submenu-button {
      position: absolute;
      z-index: 99;
      right: 0;
      top: 0;
      display: block;
      border-left: 1px solid rgba(120, 120, 120, 0.2);
      height: 46px;
      width: 46px;
      cursor: pointer;
      &.submenu-opened {
        background: #262626;
        &:after {
          background: #ffffff;
        }
        &:before {
          display: none;
        }
      }
      &:after {
        position: absolute;
        top: 22px;
        right: 19px;
        width: 8px;
        height: 2px;
        display: block;
        background: #dddddd;
        content: "";
      }
      &:before {
        position: absolute;
        top: 19px;
        right: 22px;
        display: block;
        width: 2px;
        height: 8px;
        background: #dddddd;
        content: "";
      }
    }
    &.select-list {
      padding: 5px;
    }
  }
}

// @media only screen and (max-width: 1200px) {
//   #cssmenu > ul > li > a {
//     font-size: 14px;
//   }
// }
// @media only screen and (max-width: 1009px) {
//   #cssmenu {
//     float: left;
//     z-index: 9999;
//     left: 0;
//     position: absolute;
//   }
//   #cssmenu > ul > li > a {
//     padding: 16px 8px;
//     min-height: auto;
//     background-image: none;
//     background: #fff;
//     color: #333;
//   }
//   #cssmenu > ul > li:hover > a {
//     background-image: none;
//   }
//   #cssmenu > ul > li.active > a {
//     color: #f68220;
//     background: #fff;
//   }
//   #cssmenu.small-screen ul {
//     width: 100%;
//     display: none;
//     background: #ccc;
//   }
//   #cssmenu.small-screen ul ul li a {
//     color: #333;
//   }
//   #cssmenu li:hover > ul {
//     background: #fff;
//   }
// }
</style>
