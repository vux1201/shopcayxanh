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
      </ul>
    </div>
    <div class="content">
      <div class="head">
        <div class="name">Quản lý đơn hàng</div>
        <div class="user">
          <div class="username">
            <i class="fa-solid fa-user"></i>&nbsp;User name
          </div>
          <button class="logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout
          </button>
        </div>
      </div>
      <button class="btn-adduser">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Tạo đơn hàng
      </button>
      <table class="container">
        <thead>
          <th>Mã đơn hàng</th>
          <th>Ngày đặt</th>
          <th>Thành tiền</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </thead>
        <tbody>
          <td>1</td>
          <td>Vu</td>
          <td>Vuvu@gmail.com</td>
          <td>Hanoi</td>
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
  </div>
</template>

<style lang="scss" scoped>
.manage-user {
  display: flex;
  --spacing: 10px;
}
.sidenav {
  height: 20rem;
  color: #fff;
  background: #6c6b7a;
  padding: calc(var(--spacing) * 2);
  .logo {
    padding: 20px;
    border-bottom: 1px solid #fff;
  }
  ul {
    padding: var(--spacing) 0;
  }
  li {
    padding: var(--spacing);
    list-style: none;
    &:hover {
      color: #000;
      background: #e6dddd;
      transition: 0.5s ease;
    }
  }
}
.content {
  padding: calc(var(--spacing) * 2);
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      padding: 2rem 0 2rem 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .user {
      display: flex;
      .username {
        padding: 1em;
      }
      .logout {
        background: #40c5e5;
        border: none;
        border-radius: 6em;
        width: 8em;
        color: #fff;
      }
    }
  }
  .btn-adduser {
    background: #40c5e5;
    border: 1px solid #9abad6;
    border-radius: 7px;
    margin: 0 0 1em 0;
    height: 3em;
    color: #fff;
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
</style>
