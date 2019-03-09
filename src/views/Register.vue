<template>
  <div class="app-container">
    <div class="process-mockup">
      <img class="bg" src="./../assets/img/register/prototyping_process.svg" alt>
    </div>
    <div class="content">
      <div class="title wrap">อุ๊ปส์ ดูเหมือนว่าคุณจะมาถึงก่อนที่เราสร้าง Busble ให้เสร็จ</div>
      <div class="tagline wrap">กรุณาลงชื่ออีเมล์ของคุณไว้ หาก Busble พร้อมใช้งานเมื่อไหร่ เราจะรีบแจ้งให้คุณทราบในทันที</div>
    </div>
    <form @submit.prevent="submit">
      <div :class="{error: errors.first('email') || submit_null}" v-if="errors.first('email') || submit_null">* กรุณาใส่เฉพาะอีเมลเท่านั้น</div>
      <input v-validate="'required|email'" :class="{'error-input': errors.first('email')}" placeholder="อีเมลล์ของคุณ" data-vv-delay="500" name="email" type="text" v-model="text_email">
      <button class="button primary" type="submit" :class="{'disable-button': errors.first('email')}" :disabled="errors.first('email')">รับอีเมล์แจ้งเตือน</button>
    </form>
  </div>
</template>
<script>

import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBwwtOj08xrVVhT5yhUHacor8Tn292jq-Q",
  authDomain: "busble.firebaseapp.com",
  databaseURL: "https://busble.firebaseio.com",
  projectId: "busble",
  storageBucket: "busble.appspot.com",
  messagingSenderId: "914645978067"
}

firebase.initializeApp(config)

export default {
  name: "register",
  data() {
    return {
      text_email: '',
      submit_null: false
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((passed) => {
        if (passed) {
          const userListRef = firebase.database().ref('/user')
          let newUserRef = userListRef.push()
          newUserRef.set({
            email: this.text_email
          })
          this.text_email = '';
          this.$router.push({ path : '/thank' });
          return
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  max-width: 800px;
  margin: auto;
}
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
  form {
    margin-top: 20px;
    margin-bottom: 80px;
    .error {
      text-align: left;
      margin-left: auto;
      max-width: 500px;
      margin-right: auto;
      padding: 0 15px 0 15px;
      color: red;

    }
    .error-input {
      border: 1px solid red;
    }
    input {
      width: 100%;
      max-width: 350px;
      font-size: 18px;
      padding: 12px 24px;
      margin: 10px 0;
      border: 1px solid #E8EFF6;
      border-radius: 3px;
      color: #333;
      background-color: #fff;
      transition: all 0.2s ease;
      //box-shadow: 0 5px 15px rgba(32, 43, 54, 0.05);
      &::placeholder {
        color:rgba(51, 51, 51, 0.527);
      }
    }
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
}
</style>