<template>
  <div class="manage-user">
    <div class="sidenav">
      <h2 class="logo"><i class="fa-light fa-seedling"></i>&nbsp;Bosai shop</h2>
      <ul>
        <li><i class="fa-solid fa-user"></i>&nbsp;User management</li>
        <li>
          <i class="fa-regular fa-list-check"></i>&nbsp;Product management
        </li>
        <li><i class="fa-solid fa-cart-shopping"></i>&nbsp;Order management</li>
        <li><i class="fa-solid fa-bell"></i>&nbsp;Notification</li>
      </ul>
      <ul>
        <li><i class="fa-light fa-gear"></i>&nbsp;Setting</li>
        <li class="btn-logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- Hiển thị sản phẩm -->
      <div class="show-products" v-if="show == false">
        <div class="head">
          <div class="title1">Quản lý sản phẩm</div>
          <div class="user">
            <div class="search">
              <input type="text" />
              <span><i class="fa-regular fa-magnifying-glass"></i></span>
            </div>
            <div class="username">
              <i class="fa-solid fa-user"></i>&nbsp;User name
            </div>
          </div>
        </div>
        <button class="btn-adduser" @click="addProducts">
          <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm sản phẩm
        </button>
        <table class="container">
          <thead>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá sản phẩm</th>
            <th>Trạng thái</th>
            <th>Action</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>Vu</td>
            <td>Vuvu@gmail.com</td>
            <td>Hanoi</td>
            <td>032323322</td>
            <td>
              <a href="#"><i class="fa fa-file-pen" title="edit"></i></a>
              <a href="#"
                ><i
                  class="fa-regular fa-trash-can"
                  title="delete"
                  style="--fa-primary-color: crimson"
                ></i
              ></a>
            </td>
          </tbody>
        </table>
      </div>
      <!-- thêm sản phẩm -->
      <div class="show-addProducts" v-if="show == true">
        <form class="dialog">
          <h2 class="title1">Thêm sản phẩm mới</h2>
          <div class="form-input">
            <label>Tên sản phẩm <a title="trường bắt buộc">(*)</a></label>
            <input type="text" required />
          </div>
          <div class="form-input">
            <label>Hình ảnh <a title="trường bắt buộc">(*)</a></label>
            <input type="text" required />
          </div>
          <div class="form-input">
            <label>Giá sản phẩm <a title="trường bắt buộc">(*)</a></label>
            <input type="text" required />
          </div>
          <div class="form-input">
            <label>Trạng thái <a title="trường bắt buộc">(*)</a></label>
            <input type="text" required />
          </div>
          <div class="footer">
            <button class="btn-adduser" type="submit">Lưu</button>
            <button class="btn-adduser" type="button">Hủy</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    addProducts() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.manage-user {
  display: flex;
  --spacing: 10px;
}
.sidenav {
  width: 14%;
  height: 100vh;
  color: #fff;
  background: #6c6b7a;
  padding: calc(var(--spacing) * 2);
  .logo {
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #fff;
    border-bottom: 3px solid #fff;
  }
  ul {
    padding: var(--spacing) 0;
  }
  li {
    margin: 1rem;
    padding: var(--spacing);
    list-style: none;
    &:hover {
      color: #000;
      background: #e6dddd;
      transition: 0.5s ease;
      border-radius: 6px;
    }
  }
}
.content {
  width: 80%;
  padding: calc(var(--spacing) * 2);
  .title1 {
    padding: 2rem 0 2rem 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .btn-adduser {
    background: #40c5e5;
    border: 1px solid #9abad6;
    border-radius: 7px;
    margin: 0 0 1.5em 1em;
    height: 3em;
    color: #fff;
  }
  .show-products {
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user {
        display: flex;
        .username {
          padding: 1em;
        }
        .search {
          padding: 1em;
          display: flex;
          input {
            height: 1.5rem;
            padding: 1px 6px;
          }
          span {
            border-radius: 0 13px 13px 0;
            background: #ccc;
            width: 1.6rem;
            i {
              padding-left: 4px;
              transform: translateY(5px);
            }
          }
        }
      }
    }
    table {
      border: 1px solid #66afe9;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
      border-collapse: collapse;
      th {
        height: 3em;
        padding: var(--spacing);
        border-bottom: 1px solid #ccc;
      }
      td {
        padding: var(--spacing);
        text-align: center;
        a {
          margin: 8px;
        }
      }
    }
  }
  .show-addProducts {
    display: flex;
    margin: auto 4rem;
    .form-input {
      padding: 1rem;
      width: 100vh;
      label {
        // padding: 1rem;
      }
      input {
        width: 100%;
        margin: 0.8rem 1rem 0 0;
        height: 1.8rem;
        padding: 3px 6px;
      }
    }
    .footer {
      display: flex;
      margin-left: 0.5rem;
      // justify-content: space-around;
      button {
        width: 6rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
