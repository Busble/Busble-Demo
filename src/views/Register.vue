<template>
  <div class="app-container">
    <div class="resgiter-form">
      <div class="resgiter-form--dialog">
        <div class="resgiter-form--header">
          <h1>Contact</h1>
        </div>
        <div class="resgiter-form--input">
          <form @submit.prevent="submit">
            <input v-validate="'email'" data-vv-delay="500" name="email" type="text" v-model="text_email">
            <button class="submit-button" type="submit" :class="{'disable-button': errors.first('email')}" :disabled="errors.first('email')">submit</button>
            <p :class="{error: errors.first('email')}" v-if="errors.first('email')"><span>please insert email only</span></p>
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
      text_email: ''
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
        }
      }
      .resgiter-form--input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        .disable-button {
          cursor: not-allowed;
        }
        .error {
          span {
            color: red;
          }
        }
      }
    }
  }
</style>

