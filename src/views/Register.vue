<template>
  <div class="app-container">
    <div class="resgiter-form">
      <div class="resgiter-form--dialog">
        <div class="resgiter-form--header">
          <h1>สมัครสามาชิก</h1>
        </div>
        <div class="resgiter-form--input">
          <form @submit.prevent="submit">
            <input v-validate="'required|email'" data-vv-delay="500" name="email" type="text" v-model="text_email">
            <p :class="{error: errors.first('email') || submit_null}" v-if="errors.first('email') || submit_null">* กรุณาใส่เฉพาะอีเมลเท่านั้น</p>
            <button class="submit-button" type="submit" :class="{'disable-button': errors.first('email')}" :disabled="errors.first('email')">submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import firebase from 'firebase'
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
  name: 'register',
  data () {
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
          alert('registered')
          this.text_email = ''
          return
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .resgiter-form {
    display: block;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    &--dialog {
      display: grid;
      padding: 1rem;
      grid-template-rows: 25% 75%;
      width: 86vw;
      @media (min-width: 768px) {
        max-width: 500px;
      }
      height: 200px;
      border-radius: 14px;
      box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.2);
      .resgiter-form--header {
        h1 {
          margin: 0;
          padding: 1rem;
          text-align: center;
          color: #3d4047;
          font-size: 18px;
          font-weight: lighter;
          letter-spacing: 1px;
        }
      }
      .resgiter-form--input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-align: center;
        input[type=text] {
          display: block;
          border-radius: 4px;
          padding: 0.5rem 0.9rem;
          border: 1px solid #ccc;
          outline: none;
        }
        .submit-button {
          margin-top: 20px;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 0.9rem;
          box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        .disable-button {
          cursor: not-allowed;
        }
        .error {
          font-size: 12px;
          margin: 4px 0 0 0;
          text-align: left;
          color: red;
        }
      }
    }
  }
</style>

