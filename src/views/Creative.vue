<template>
  <div class="app-container">
    <div class="background">
      <div class="container">
        <div class="header-content">
          <div class="title wrap">อีกขั้นสู่การเป็นครีเอเตอร์มือโปร</div>
          <div
            class="tagline wrap"
          >ทำลายทุกข้อจำกัด แล้วเพลิดเพลินไปกับจินตนาการของคุณ</div>
        </div>
        <div class="panel pricing-table">
          <div class="pricing-plan">
            <img src="./../assets/img/pricing/paper-plane.png" alt class="pricing-img">
            <h2 class="pricing-header">ส่วนบุคคล</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">Portfolio ส่วนตัว</li>
              <li class="pricing-features-item">แชร์ผลงานได้ไม่จำกัด</li>
              <li class="pricing-features-item">ขายผลงาน 3 ชิ้นต่อเดือน</li>
            </ul>
            <span class="pricing-price"></span>
            <button
              href="#/"
              class="pricing-button"
              @click="trackRegisterGeneral"
              type="submit"
            >สมัครใช้งานฟรี</button>
          </div>

          <div class="pricing-plan">
            <img src="./../assets/img/pricing/plane.png" alt class="pricing-img">
            <h2 class="pricing-header">ครีเอเตอร์</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">Portfolio ส่วนตัว
                <br>(ปรับแต่งได้)
              </li>
              <li class="pricing-features-item">แชร์ผลงานได้ไม่จำกัด</li>
              <li class="pricing-features-item">ขายผลงานได้ไม่จำกัด</li>
              <li class="pricing-features-item">Direct Message</li>
              <li class="pricing-features-item">และอื่น ๆ อีกมากมาย</li>
            </ul>
            <span class="pricing-price">129 บาท/เดือน</span>
            <button
              href="#/"
              class="pricing-button is-featured"
              @click="trackRegisterCretive"
              type="submit"
            >ทดลองใช้งาน</button>
          </div>

          <div class="pricing-plan">
            <img src="./../assets/img/pricing/space-ship.png" alt class="pricing-img">
            <h2 class="pricing-header">ทีม</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">ทุกอย่างที่ ครีเอเตอร์ สามารถทำได้</li>
              <li class="pricing-features-item">แชร์และขายผลงานเป็นทีม</li>
            </ul>
            <span class="pricing-price">เร็ว ๆ นี้</span>
            <a href="https://web.facebook.com/Busble" class="pricing-button">ติดต่อเรา</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Creative",
  methods: {
    trackRegisterCretive() {
      this.$ga.event({
        eventCategory: "register",
        eventAction: "pro-user",
        eventLabel: "pro-clicked"
      });
      this.$router.push({ path: "/register" });
    },
    trackRegisterGeneral() {
      this.$ga.event({
        eventCategory: "register",
        eventAction: "general-user",
        eventLabel: "general-clicked"
      });
      this.$router.push({ path: "/register" });
    }
  }
};
</script>
<style lang="scss" scoped>
.header-content {
  text-align: center;
  position: relative;
  width: 100%;
  height: auto;
  padding: 20px 0 30px 0;
  z-index: 1000;
  .title {
    position: relative;
    font-size: 45px;
    line-height: 55px;
    font-weight: bold;
    margin: 10px auto;
    padding: 0 20px;
    color: #fff;
  }
  .tagline {
    position: relative;
    font-size: 20px;
    line-height: 25px;
    margin-top: 15px;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #F5F7F8;
  }
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: "";
  background: #0469b9;
  background: -moz-linear-gradient(top, #0469b9 0%, #4394f4 100%);
  background: -webkit-linear-gradient(top, #0469b9 0%, #4394f4 100%);
  background: linear-gradient(to bottom, #0469b9 0%, #4394f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0469B9', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.02), 0px 8px 20px 7px rgba(0, 0, 0, 0.01);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 40px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #333;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color: #0469b9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 16px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #0469b9;
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.pricing-button {
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
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button.is-featured {
  background-color: #0469b9;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #0469b9;
}
</style>
