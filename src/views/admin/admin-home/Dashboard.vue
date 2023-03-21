<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Dashboard">
    <div class="sidenav">
      <a href="#">
        <img
          src="https://vuoncayviet.com/img/logo.png"
          alt=""
          class="navbar-logo"
        />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a
            href="/dashboard"
            class="nav-link active router-link-active"
            aria-current="page"
            ><i class="ni ni-tv-2 text-primary"></i
            ><span class="nav-link-text">Dashboard</span></a
          >
        </li>
        <li class="nav-item">
          <a href="/product" class="nav-link"
            ><i class="ni ni-single-02 text-yellow"></i
            ><span class="nav-link-text">Product</span></a
          >
        </li>
        <li class="nav-item">
          <a href="/user" class="nav-link"
            ><i class="ni ni-single-02 text-yellow"></i
            ><span class="nav-link-text">User Profile</span></a
          >
        </li>
        <li class="nav-item">
          <a href="/order" class="nav-link"
            ><i class="ni ni-single-02 text-yellow"></i
            ><span class="nav-link-text">Order</span></a
          >
        </li>
      </ul>
    </div>
    <div data="vue" class="Dashboard">
      <nav
        class="navbar navbar-top navbar-dark navbar-expand-md"
        id="navbar-main"
      >
        <div class="container-fluid">
          <a
            href="/dashboard"
            aria-current="page"
            class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"
          >
            dashboard </a
          ><!---->
          <div id="0.5713085748033397" class="collapse navbar-collapse">
            <form
              class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
            >
              <div class="form-group mb-0">
                <div class="form-group input-group-alternative input-group">
                  <!----><!----><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Search"
                    alternative=""
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fas fa-search"></i
                    ></span>
                  </div>
                  <!---->
                </div>
              </div>
            </form>
            <ul class="navbar-nav align-items-center ml-auto ml-md-0">
              <li
                aria-haspopup="true"
                class="dropdown nav-item dropdown"
                menu-on-right=""
                title-tag="a"
              >
                <a href="#" class="nav-link pr-0"
                  ><div class="media align-items-center">
                    <span
                      class="avatar avatar-sm rounded-circle avatar-image"
                      style="background-image: url('/img/placeholder.jpg')"
                    ></span>
                    <div class="media-body ml-2 d-none d-lg-block">
                      <span class="mb-0 text-sm font-weight-bold">Admin</span>
                    </div>
                  </div></a
                >
                <ul
                  class="dropdown-menu dropdown-menu dropdown-menu-right py-0 overflow-hidden"
                >
                  <div class="dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="/examples/user-profile" class="dropdown-item"
                    ><i class="ni ni-single-02"></i><span>My profile</span></a
                  >
                  <div class="dropdown-divider"></div>
                  <a href="" to="" class="dropdown-item"
                    ><i class="ni ni-user-run"></i><span>Logout</span></a
                  >
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <div class="header pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
            <div class="container-fluid">
              <div class="header-body">
                <div class="row">
                  <div class="col-xl-3 col-lg-6">
                    <div
                      class="card card-stats mb-4 mb-xl-0"
                      show-footer-line="true"
                    >
                      <!---->
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <h5
                              class="card-title text-uppercase text-muted mb-0"
                            >
                              Total traffic
                            </h5>
                            <span class="h2 font-weight-bold mb-0"
                              >350,897</span
                            >
                          </div>
                          <div class="col-auto">
                            <div
                              class="icon icon-shape text-white rounded-circle shadow bg-gradient-red"
                            >
                              <i class="ni ni-active-40"></i>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                          <span class="text-success mr-2"
                            ><i class="fa fa-arrow-up"></i> 3.48%</span
                          ><span class="text-nowrap">Since last month</span>
                        </p>
                      </div>
                      <!----><!---->
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6">
                    <div
                      class="card card-stats mb-4 mb-xl-0"
                      show-footer-line="true"
                    >
                      <!---->
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <h5
                              class="card-title text-uppercase text-muted mb-0"
                            >
                              Total traffic
                            </h5>
                            <span class="h2 font-weight-bold mb-0">2,356</span>
                          </div>
                          <div class="col-auto">
                            <div
                              class="icon icon-shape text-white rounded-circle shadow bg-gradient-orange"
                            >
                              <i class="ni ni-chart-pie-35"></i>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                          <span class="text-success mr-2"
                            ><i class="fa fa-arrow-up"></i> 12.18%</span
                          ><span class="text-nowrap">Since last month</span>
                        </p>
                      </div>
                      <!----><!---->
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6">
                    <div
                      class="card card-stats mb-4 mb-xl-0"
                      show-footer-line="true"
                    >
                      <!---->
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <h5
                              class="card-title text-uppercase text-muted mb-0"
                            >
                              Sales
                            </h5>
                            <span class="h2 font-weight-bold mb-0">924</span>
                          </div>
                          <div class="col-auto">
                            <div
                              class="icon icon-shape text-white rounded-circle shadow bg-gradient-green"
                            >
                              <i class="ni ni-money-coins"></i>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                          <span class="text-danger mr-2"
                            ><i class="fa fa-arrow-down"></i> 5.72%</span
                          ><span class="text-nowrap">Since last month</span>
                        </p>
                      </div>
                      <!----><!---->
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6">
                    <div
                      class="card card-stats mb-4 mb-xl-0"
                      show-footer-line="true"
                    >
                      <!---->
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <h5
                              class="card-title text-uppercase text-muted mb-0"
                            >
                              Performance
                            </h5>
                            <span class="h2 font-weight-bold mb-0">49,65%</span>
                          </div>
                          <div class="col-auto">
                            <div
                              class="icon icon-shape text-white rounded-circle shadow bg-gradient-info"
                            >
                              <i class="ni ni-chart-bar-32"></i>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                          <span class="text-success mr-2"
                            ><i class="fa fa-arrow-up"></i> 54.8%</span
                          ><span class="text-nowrap">Since last month</span>
                        </p>
                      </div>
                      <!----><!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid mt--7">
            <div class="row">
              <div class="col-xl-8 mb-5 mb-xl-0">
                <div class="card">
                  <div class="card-header border-0">
                    <div class="row align-items-center">
                      <div class="col"><h3 class="mb-0">Page visits</h3></div>
                      <div class="col text-right">
                        <a href="#!" class="btn btn-sm btn-primary">See all</a>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table tablesorter">
                      <thead class="thead-light">
                        <tr>
                          <th>Page name</th>
                          <th>Visitors</th>
                          <th>Unique users</th>
                          <th>Bounce rate</th>
                        </tr>
                      </thead>
                      <tbody class="">
                        <tr>
                          <th scope="row">/argon/</th>
                          <td>4,569</td>
                          <td>340</td>
                          <td>
                            <i
                              class="fas fa-arrow-up text-success mr-3 text-success"
                            ></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/argon/index.html</th>
                          <td>3,985</td>
                          <td>319</td>
                          <td>
                            <i
                              class="fas fa-arrow-up text-success mr-3 text-danger"
                            ></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/argon/charts.html</th>
                          <td>3,513</td>
                          <td>294</td>
                          <td>
                            <i
                              class="fas fa-arrow-up text-success mr-3 text-danger"
                            ></i>
                            36,49%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/argon/tables.html</th>
                          <td>2,050</td>
                          <td>147</td>
                          <td>
                            <i
                              class="fas fa-arrow-up text-success mr-3 text-success"
                            ></i>
                            50,87%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/argon/profile.html</th>
                          <td>1,795</td>
                          <td>190</td>
                          <td>
                            <i
                              class="fas fa-arrow-up text-success mr-3 text-danger"
                            ></i>
                            46,53%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="card">
                  <div class="card-header border-0">
                    <div class="row align-items-center">
                      <div class="col">
                        <h3 class="mb-0">Social traffic</h3>
                      </div>
                      <div class="col text-right">
                        <button type="button" class="btn btn-primary btn-sm">
                          <!----><!----><!---->See all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table tablesorter">
                      <thead class="thead-light">
                        <tr>
                          <th>Referral</th>
                          <th>Visitors</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody class="">
                        <tr>
                          <th scope="row">Facebook</th>
                          <td>1,480</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="mr-2">60%</span>
                              <div class="progress-wrapper pt-0">
                                <!---->
                                <div class="progress" style="height: 3px">
                                  <div
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar bg-gradient-danger"
                                    style="width: 60%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">LinkedIn</th>
                          <td>5,480</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="mr-2">70%</span>
                              <div class="progress-wrapper pt-0">
                                <!---->
                                <div class="progress" style="height: 3px">
                                  <div
                                    role="progressbar"
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar bg-gradient-success"
                                    style="width: 70%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Google</th>
                          <td>4,807</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="mr-2">80%</span>
                              <div class="progress-wrapper pt-0">
                                <!---->
                                <div class="progress" style="height: 3px">
                                  <div
                                    role="progressbar"
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar bg-gradient-primary"
                                    style="width: 80%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Instagram</th>
                          <td>3,678</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="mr-2">75%</span>
                              <div class="progress-wrapper pt-0">
                                <!---->
                                <div class="progress" style="height: 3px">
                                  <div
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar bg-gradient-info"
                                    style="width: 75%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Twitter</th>
                          <td>2,645</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="mr-2">30%</span>
                              <div class="progress-wrapper pt-0">
                                <!---->
                                <div class="progress" style="height: 3px">
                                  <div
                                    role="progressbar"
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    class="progress-bar bg-gradient-warning"
                                    style="width: 30%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer p-10px>@Admin Vườn Cây Việt</footer>
      </div>
    </div>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
export default {
  data() {
    return;
  },
};
</script>

<style lang="scss" scoped>
.Dashboard {
  margin-top: 20px;
  background-image: url("https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000");
}
.navbar-collapse {
  margin-left: 60%;
}
.input-group-text {
  padding: 0.6rem 0.75rem;
}
.dropdown {
  background: #d9d0d0;
  border-radius: 40px;
  margin-left: 30px;
}
.sidenav {
  background: #fff;
  display: block;
  float: left;
  width: 15%;
  padding: 20px;
  border-radius: 0 0 6px;
  height: 600px;
  img {
    width: 80%;
    padding: 10px;
  }
}
.nav-link:hover {
  background: #ccc;
}
.card {
  margin-top: 20px;
}
.content {
  background: #ccc;
  display: block;
  float: right;
  padding: 20px;
  width: 85%;
  height: 1000px;
}
footer {
  padding: 20px;
  text-align: center;
  color: #c3dccb;
}
</style>
