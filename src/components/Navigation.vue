<template>
  <div id="app-navbar">
    <div class="app-navbar">
      <div class="container">
        <div class="left">
          <div class="logo">
            <div class="img">
              <img src="./../assets/img/logo.png" alt>
            </div>
            <router-link to="/" class="text">Project Busble</router-link>
          </div>
        </div>
        <div class="right">
          <div class="nav-desktop">
            <router-link to="/" class="active">Home</router-link>
            <a href="#">Creator program</a>
            <a href="https://web.facebook.com/Busble/" target="bank">Feedback</a>
            <div
              class="nav-icon open"
              v-bind:class="{ active: isActive }"
              v-on:click="isActive = !isActive"
            >
              <img src="./../assets/img/navigation/menu.svg" alt>
            </div>
            <div
              class="nav-icon close"
              v-bind:class="{ active: isActive }"
              v-on:click="isActive = !isActive"
            >
              <img src="./../assets/img/navigation/close-outline.svg" alt>
            </div>
            <div class="space"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-navbar-zone"></div>
    <div class="nav-content" v-bind:class="{ active: isActive }">
      <div class="item" v-on:click="isActive = !isActive">Home</div>
      <div class="item" v-on:click="isActive = !isActive">Creator program</div>
      <div class="item" href="#" v-on:click="isActive = !isActive">Feedback</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  }
};
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
          background-color: #0469b9;
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
      .nav-icon {
        width: 60px;
        height: 60px;
        padding: 15px;
        img {
          width: 100%;
          height: 60px;
        }
      }
      .nav-desktop {
        display: inline-block;
        vertical-align: middle;
        .space {
          display: inline-block;
          vertical-align: middle;
          width: 60px;
          height: 60px;
        }
        a {
          display: inline-block;
          vertical-align: middle;
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
          margin: 0 10px;
          color: #7b868a;
          &.active {
            color: #0469b9;
          }
        }
        .nav-icon {
          display: none;
          vertical-align: middle;
          width: 60px;
          height: 60px;
          padding: 15px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.nav-content {
  text-align: center;
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  background-color: rgb(27, 30, 41);
  z-index: 10000;
  &.active {
    display: block;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
    line-height: 50px;
    margin: 10px 10px;
    color: #fff;
    &.active {
      color: #0469b9;
    }
  }
}
.app-navbar-active {
  -webkit-box-shadow: 0px -9px 36px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px -9px 36px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px -9px 36px 0px rgba(0, 0, 0, 0.2);
}
.app-navbar-zone {
  width: 100%;
  height: 60px;
}

@media only screen and (max-width: 600px) {
  .nav-desktop {
    .space {
      width: 0px !important;
    }
    .nav-icon {
      display: inline-block !important;
      &.open {
        display: inline-block !important;
        &.active {
          display: none !important;
        }
      }
      &.close {
        display: none !important;
        &.active {
          display: inline-block !important;
        }
      }
    }
    a {
      display: none !important;
    }
  }
}
</style>
