<template>
  <div class="app-home app-container">
    <header>
      <div class>
        <div class="img">
          <img class="bg" src="./../assets/img/home/header/header-bg.svg" alt>
        </div>
        <div class="header-content">
          <div class="title wrap">ทุกเรื่องราวของคุณมีความหมาย</div>
          <div class="tagline wrap">แบ่งปันความคิดสร้างสรรค์ในแบบของคุณ พร้อมรายได้ไม่มีสิ้นสุด</div>
        </div>
        <div class="call-to-action">
          <router-link to="/register" class="button primary">
            <div @click="trackBooking">สมัครใช้งานฟรี</div>
          </router-link>
          <div class="button">ลงทะเบียนเป็นครีเอเตอร์มือโปร</div>
        </div>
        <div class="img2">
          <img src="./../assets/img/home/header/header_mockup.png" alt>
        </div>
      </div>
    </header>
    <div class="section-format">
      <img class="top" src="./../assets/img/home/section/section02-top.svg" alt>
      <div class="content">
        <div class="title wrap">อิสระที่คุณเลือกได้</div>
        <div class="tagline wrap">คุณสามารถนำผลงานของคุณมาแบ่งปันหรือขาย จากที่ไหนเมื่อไหร่ก็ได้</div>
        <div class="format">
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/image-outline.svg" alt>
            </div>
            <div class="title">ภาพถ่าย</div>
          </div>
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/pantone-outline.svg" alt>
              <div class="title">ภาพกราฟฟิก</div>
            </div>
          </div>
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/film-outline.svg" alt>
              <div class="title">วิดีโอ</div>
            </div>
          </div>
        </div>
      </div>
      <img class="bottom" src="./../assets/img/home/section/section02-bottom.svg" alt>
    </div>
    <div class="section-03"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "hellowold",
  data() {
    return {
      // 
    }
  },
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'trackBooking'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

header {
  position: relative;
  text-align: center;
  overflow: hidden;
  min-height: 450;
  background-color: #fff;
  img.bg {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 30px;
    width: 80%;
    height: 80%;
    z-index: 0;
  }
  .header-content {
    position: relative;
    width: 100%;
    height: auto;
    padding: 80px 0 0 0;
    z-index: 1000;
    .title {
      position: relative;
      font-size: 45px;
      line-height: 55px;
      font-weight: bold;
      margin: 10px auto;
      padding: 0 20px;
      color: #333333;
    }
    .tagline {
      position: relative;
      font-size: 20px;
      margin-top: 15px;
      margin-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;
      color: #7b868a;
    }
  }
  .call-to-action {
    position: relative;
    padding: 10px;
    .button {
      cursor: pointer;
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      padding: 12px 24px;
      margin: 10px;
      border: 1px solid #e9eff5;
      border-radius: 3px;
      color: #333;
      background-color: #fff;
      transition: all 0.2s ease;
      box-shadow: 0 5px 15px rgba(32, 43, 54, 0.05);
      &.primary {
        border: 1px solid #0469b9;
        color: #fff;
        background-color: #0469b9;
      }
      &:hover {
        box-shadow: 0 5px 15px rgba(32, 43, 54, 0.1);
      }
    }
  }
  .img2 {
    -webkit-animation: SlideUp 1s;
    -moz-animation:    SlideUp 1s;
    -o-animation:      SlideUp 1s;
    animation:         SlideUp 1s;
    position: relative;
    width: 100%;
    max-width: 1080px;
    height: auto;
    margin: auto;
    z-index: 1000;
    img {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}
.section-format {
  height: auto;
  background-color: #fafafc;
  .top {
    margin-top: -1px;
  }
  .bottom {
    margin-bottom: -6px;
  }
  .content {
    text-align: center;
    height: auto;
    padding: 80px 20px;
    .title {
      position: relative;
      font-size: 35px;
      line-height: 45px;
      font-weight: bold;
      margin: 10px auto;
      padding: 0 20px;
      color: #333333;
    }
    .tagline {
      position: relative;
      font-size: 20px;
      margin-top: 15px;
      margin-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;
      color: #7b868a;
    }
    .format {
      padding-top: 30px;
      .item {
        display: inline-block;
        text-align: center;
        width: 280px;
        height: auto;
        margin: 10px;
        padding: 20px;
        .image {
          width: 120px;
          height: auto;
          margin: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        .title {
          position: relative;
          font-size: 20px;
          line-height: 30px;
          font-weight: bold;
          margin: 0 auto;
          padding: 0;
          color: #333333;
        }
      }
    }
  }
}
.section-03 {
  height: 1800px;
}
.footer {
  height: 400px;
  background-color: #272c34;
}

@-webkit-keyframes SlideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@-moz-keyframes SlideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@-o-keyframes SlideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes SlideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
