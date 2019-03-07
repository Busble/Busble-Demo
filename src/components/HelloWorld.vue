<template>
  <div class="app-home app-container">
    <header>
      <div class>
        <div class="img">
          <img class="bg" src="./../assets/img/home/header/header-bg.svg" alt>
        </div>
        <div class="header-content">
          <div class="title wrap">ทุกเรื่องราวของคุณมีความหมาย</div>
          <div
            class="tagline wrap"
          >แบ่งปันผลงานสร้างสรรค์ในแบบของคุณ พร้อมสร้างรายได้แบบไม่มีสิ้นสุด</div>
        </div>
        <div class="call-to-action">
          <router-link to="/register" class="button primary">
            <div @click="count">สมัครใช้งานฟรี</div>
          </router-link>
          <div class="button">ลงทะเบียนเป็นครีเอเตอร์มือโปร</div>
        </div>
        <div class="content__wrapper">
          <div class="ellipses-container">
            <div class="ellipses ellipses__outer--thin"></div>

            <div class="ellipses ellipses__outer--thick"></div>
          </div>
        </div>
        <div class="img2">
          <img src="./../assets/img/home/header/header_mockup.png" alt>
        </div>
      </div>
    </header>
    <div class="section-format">
      <img class="top" src="./../assets/img/home/section/section02-top.svg" alt>
      <div class="company">
        <img class="" src="./../assets/img/home/section/format/microsoft-logo.svg" alt>
        <img class="" src="./../assets/img/home/section/format/hubspot-logo.svg" alt>
      </div>
      <div class="content">
        <div class="title wrap">พื้นที่สำหรับซื้อขายและแบ่งปันผลงาน</div>
        <div
          class="tagline wrap"
        >คุณสามารถนำผลงานของคุณมาแบ่งปันให้กับผู้คน นอกจากนี้คุณยังสามารถขายผลงานชิ้นโปรดเพื่อสร้างรายได้ให้กับคุณ ได้ทุกที่ ทุกเวลา</div>
        <div class="format">
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/photo.svg" alt>
            </div>
            <div class="title">ภาพถ่าย</div>
          </div>
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/vector.svg" alt>
            </div>
            <div class="title">ภาพกราฟฟิก</div>
          </div>
          <div class="item">
            <div class="image">
              <img src="./../assets/img/home/section/format/video.svg" alt>
            </div>
            <div class="title">วิดีโอ</div>
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
export default {
  name: "hellowold",
  data() {
    return {
      incre: 1
    };
  },
  methods: {
    count() {
      // let now = new Date()
      // const bookListRef = Firebase.database().ref('/book')
      // let newBookRef = bookListRef.push()
      // newBookRef.set({
      //   count: this.incre++,
      //   create_date: 'test'
      // })
      console.log("click");
    }
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
      line-height: 25px;
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
    -moz-animation: SlideUp 1s;
    -o-animation: SlideUp 1s;
    animation: SlideUp 1s;
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
  position: relative;
  height: auto;
  background-color: #fafafc;
  .top {
    margin-top: -1px;
  }
  .bottom {
    margin-bottom: -6px;
  }
  .company {
    text-align: center;
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    margin: auto;
    img {
      width: auto;
      height: 30px;
      margin: auto;
      padding: 0 15px;
    }
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
      line-height: 25px;
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
          width: 220px;
          height: auto;
          margin: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        .title {
          font-size: 20px;
          line-height: 30px;
          font-weight: bold;
          margin: 20px auto 0;
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

$tiber: #09383e;
$elephant: #0c383e;
$white: #fff;
.content__wrapper {
  position: absolute;
  top: 185px;
  right: 0;
  left: 0;
  z-index: 0;
  pointer-events: none ;
}
.ellipses-container {
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: 10rem;
}
@media only screen and (max-width: 970px) {
  .content__wrapper {
    top: 180px;
  }
  .ellipses-container { 
    width: 27rem;
    height: 27rem;
  }
}
@media only screen and (max-width: 780px) {
  .content__wrapper {
    top: 180px;
  }
  .ellipses-container { 
    width: 22rem;
    height: 22rem;
  }
}
@media only screen and (max-width: 650px) {
  .content__wrapper {
    top: 240px;
  }
  .ellipses-container { 
    width: 22rem;
    height: 22rem;
  }
}
@media only screen and (max-width: 503px) {
  .content__wrapper {
    top: 310px;
  }
  .ellipses-container { 
    width: 16rem;
    height: 16rem;
  }
}
@media only screen and (max-width: 423px) {
  .content__wrapper {
    top: 300px;
  }
  .ellipses-container { 
    width: 13rem;
    height: 13rem;
  }
}
@media only screen and (max-width: 320px) {
  .content__wrapper {
    top: 380px;
  }
  .ellipses-container { 
    width: 11rem;
    height: 11rem;
  }
}
.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses__outer--thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(9, 56, 62, 0.1);
  animation: ellipsesOrbit 15s ease-in-out infinite;

  &:after {
    content: "";
    background-image: url("https://s29.postimg.org/5h0r4ftkn/ellipses_dial.png");
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.15;
  }
}

.ellipses__outer--thick {
  width: 100%;
  height: 100%;
  border-color: #0469b9 transparent;
  border-width: 2px;
  transform: rotate(-45deg);
  animation: ellipsesRotate 15s ease-in-out infinite;
}
@keyframes ellipsesRotate {
  0% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(-405deg);
  }
}

@keyframes ellipsesOrbit {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
