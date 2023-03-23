<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-dark">
    <div class="main-block" style="padding-top: 20px">
      <div class="title">
        <a title="Sản phẩm bán chạy" target="">
          <span>Sản phẩm bán chạy</span>
        </a>
      </div>
      <div class="product-block">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="product">
              <div class="pic-news">
                <router-link :to="'/productView/' + item.id">
                  <img :src="item.img" :alt="item.name"
                /></router-link>
              </div>
              <h3>
                <a href="/productView/">{{ item.name }}</a>
                <a>({{ item.id }})({{ item.class }})</a>
              </h3>
              <div class="price-product">{{ item.price }}</div>
              <div class="cart-product">
                <a href="/cartView">
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <router-link :to="'/productView/' + item.id"
                  ><i class="fa fa-eye"></i
                ></router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // Lấy giữu liệu từ API
    async getData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.list = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    IdProduct() {
      return this.$store.getters.MESSAGE;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-dark {
  background: #eee;
  max-width: 888px;
  width: 75%;
  float: left;
  padding-left: 1.5%;
}
.product-block {
  width: 100%;
  float: left;
  ul li {
    width: 32.14%;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
    background: #fff;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(3n + 1) {
      clear: both;
    }
    .product {
      width: 100%;
      float: left;
      padding-bottom: 10px;
    }
    .pic-news {
      position: relative;
      width: 100%;
      float: left;
      background: #fff;
      margin-bottom: 5px;
      overflow: hidden;
      > a {
        width: 500px;
        height: 270px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        &:hover {
          transform: scale(1.2);
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -o-transform: scale(1.2);
          -ms-transform: scale(1.2);
        }
      }
      img {
        max-width: 100%;
        max-height: 106%;
      }
    }
    h3 {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      line-height: 150%;
      padding: 0 10px;
      float: left;
      overflow: hidden;
      height: 40px;
      a {
        color: #000;
        display: table-cell;
        vertical-align: middle;
        height: 40px;
        margin: 0;
        padding: 0;
        &:hover {
          color: #f28902;
        }
      }
    }
    .price-product {
      color: #f00;
      font-size: 18px;
      width: calc(96% - 102px);
      float: left;
      padding: 10px 0 0 10px;
      height: 50px;
      span {
        clear: both;
        font-size: 12px;
        color: #999;
        float: left;
        width: 100%;
        text-decoration: line-through;
      }
    }
    .cart-product a {
      width: 42px;
      background: #f28902;
      color: #fff;
      float: left;
      text-align: center;
      margin: 4px 0 0 4px;
      padding: 6px 0;
      &:hover {
        background: #3daa12;
      }
    }
  }
}
</style>
