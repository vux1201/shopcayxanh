<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <div class="container">
      <div>
        <div class="logo">
          <a href="/">
            <img src="../../assets/img/head/logo.png" alt="Vườn Cây Việt" />
          </a>
        </div>
        <div class="widget-head">
          Vườn Cây Việt
          <br />
          <span>Không Chỉ Là Cây Cảnh</span>
        </div>
      </div>
      <div class="search-block">
        <input
          name="vnHeader1:vnSearch1:txtKeyword"
          type="text"
          id="vnHeader1_vnSearch1_txtKeyword"
          placeholder="Tìm Kiếm"
        />
        <image
          id="btnSearch"
          type="image"
          src="https://vuoncayviet.com/img/Search.png"
          name="btnSearch"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 96%;
  float: left;
  margin-top: 33px;
  margin-left: 1.9%;
}
.logo {
  width: 110px;
  float: left;
  a {
    width: 100%;
    float: left;
    padding: 10px 10px 3px 0;
  }
  img {
    height: 80px;
  }
}
.widget-head {
  float: left;
  font-size: 20px;
  color: #090;
  margin-top: 20px;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #ff8000;
    float: left;
    margin-top: 10px;
  }
}
.search-block {
  display: flex;
  width: 300px;
  float: right;
  margin-top: 30px;
  input[type="text"],
  input[type="textbox"] {
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    border-right: none;
    padding: 7px 10px;
    width: calc(100% - 100px);
    float: left;
    border-radius: 5px 0 0 5px;
  }
  image[type="button"] {
    border: none;
    background: #f28902;
    float: left;
    color: #fff;
    width: 100px;
    padding: 9px 0 8px 0;
    border-radius: 0 5px 5px 0;
  }
}
</style>
