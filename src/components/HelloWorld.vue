<template>
  <div class="app-home app-container">
    <header>
      <div class="">
        <div class="img">
            <img class="bg" src="./../assets/img/home/header/header-bg.svg" alt="" />
        </div>
        <div class="header-content">
          <div class="title wrap">ทุกเรื่องราวของคุณมีความหมาย</div>
          <div class="tagline wrap">แบ่งปันความคิดสร้างสรรค์ในแบบของคุณ พร้อมรายได้ไม่มีสิ้นสุด</div>
        </div>
        <div class="call-to-action">
          <div class="button primary">สมัครใช้งานฟรี</div>
          <div class="button">ลงทะเบียนเป็นครีเอเตอร์มือโปร</div>
        </div>
        <div class="img2">
            <img src="./../assets/img/home/header/Header-Mockup.svg" alt="" />
        </div>
      </div>
    </header>
    <div class="section-02">
      <img class="top" src="./../assets/img/home/section/section02-top.svg" alt="" />
      <div class="content">
      </div>
      <img class="bottom" src="./../assets/img/home/section/section02-bottom.svg" alt="" />
    </div>
    <div class="section-03"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
}
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
    background-color: #FFF;
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
            color: #7B868A;
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
            border: 1px solid #E9EFF5;
            border-radius: 3px;
            color: #333;
            background-color: #FFF;
            transition: all .2s ease;
            box-shadow: 0 5px 15px rgba(32,43,54,0.05);
            &.primary {
                border: 1px solid #0469B9;
                color: #FFF;
                background-color: #0469B9;
            }
            &:hover {
                box-shadow: 0 5px 15px rgba(32,43,54,0.1);
            }
        }
    }
    .img2 {
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
  .section-02 {
    height: auto;
    background-color: #fafafc;
    .top {
        margin-top: -1px;
    }
    .bottom {
        margin-bottom: -6px;
    }
    .content {
        height: 400px;
    }
  
  }
  .section-03 {
    height: 1800px;
  }
  .footer {
    height: 400px;
    background-color: #272C34;
  }
</style>
