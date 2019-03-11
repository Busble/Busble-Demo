<template>
  <div class="app-container">
    <div class="process-mockup">
      <img class="bg" src="./../assets/img/thank.svg" alt>
    </div>
    <div class="content">
      <div class="title wrap">แรงพลักดันของคุณจะไม่หายไปไหน</div>
      <div
        class="tagline wrap"
      >เตรียมความคิดสร้างสรรค์ไว้ เมื่อ Busble พร้อมใช้งาน คุณจะเป็นคนแรกที่เราคิดถึง</div>
    </div>
    <a href="https://web.facebook.com/Busble/" class="button primary">
      <div @click="trackVisitorToFacebook">ติดตามความเคลื่อนไหวบน Facebook</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "thank",
  methods: {
    trackVisitorToFacebook() {
      this.$ga.event({
        eventCategory: "register",
        eventAction: "user-to-facebook",
        eventLabel: "facebook-clicked",
        eventValue: 1
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  text-align: center;
  padding: 0 20px;
  .process-mockup {
    margin-top: 80px;
    img {
      width: 100%;
      max-width: 350px;
      height: auto;
    }
  }
  .content {
    margin-top: 30px;
    .title {
      position: relative;
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
      margin: 0 auto;
      padding: 0;
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
  .button {
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    max-width: 380px;
    padding: 12px 24px;
    margin: 10px auto;
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
</style>