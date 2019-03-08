<template>
  <div id="app-navbar">
    <div class="app-navbar">
      <div class="container">
        <div class="left">
          <div class="logo">
            <div class="img"><img src="./../assets/img/logo.png" alt="" /></div>
            <router-link to="/" class="text">Project Busble</router-link>
          </div>
        </div>
        <div class="right">
          <div class="nav-desktop">
            <router-link to="/" exact-active-class="active">Home</router-link>
            <router-link to="/creative" exact-active-class="active"><div>Creator program</div></router-link>
            <a href="#">Feedback</a>
          </div>
          <div class="button"></div>
        </div>
      </div>
    </div>
    <div class="app-navbar-zone"></div>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-navbar-t {
  background-color: red;
}
.app-navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    max-width: 1440px;
    margin: auto;
    border-bottom: 1px solid #f4f5fb;
    background-color: #fff;
    z-index: 5000;
    .container {
      margin: auto;
      .left {
        float: left;
        .logo {
          display: inline-block;
          vertical-align: middle;
          .img {
            display: inline-block;
            vertical-align: middle;
            width: 60px;
            height: 60px;
            background-color: #0469B9;
            img {
              widows: 100%;
              height: 100%;
            }
          }
          .text {
            display: inline-block;
            vertical-align: middle;
            font-weight: bold;
            font-size: 18px;
            margin-left: 10px;
            color: rgb(61, 64, 71);
          }
        }
      }
      .right {
        float: right;
        .button {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          width: 60px;
          height: 60px;
        }
        .nav-desktop {
          display: inline-block;
          vertical-align: middle;
          a {
            display: inline-block;
            vertical-align: middle;
            font-weight: bold;
            font-size: 16px;
            line-height: 18px;
            margin: 0 10px;
            color: #7B868A;
            &.active {
              color: #0469B9;
            }
          }
        }
      }
    }
  }
  .app-navbar-active {
    -webkit-box-shadow: 0px -9px 36px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px -9px 36px 0px rgba(0,0,0,0.2);
    box-shadow: 0px -9px 36px 0px rgba(0,0,0,0.2);
  }
  .app-navbar-zone {
    width: 100%;
    height: 60px;
  }
  
  @media only screen and (max-width: 600px) {
    .nav-desktop {
      display: none !important;
    }
  }
</style>
