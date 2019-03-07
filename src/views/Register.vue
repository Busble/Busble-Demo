<template>
  <div class="app-container">
    <div class="resgiter-form">
      <div class="resgiter-form--dialog">
        <div class="header">
          <h1>สมัครสิ่</h1>
        </div>
        <div class="content">
          <form @submit.prevent="submit">
            <input type="text" v-model="text_email">
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const firebase = require('firebase')

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
      const userListRef = firebase.database().ref('/user')
      let newUserRef = userListRef.push()
      newUserRef.set({
        email: this.text_email
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .resgiter-form {
    display: block;
    margin: 0 auto;
    &--dialog {
      display: grid;
      grid-template-rows: 25% 75%;
      width: 500px;
      height: 180px;
      border-radius: 4px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      .header {
        h1 {
          margin: 0;
          padding: 1rem;
          text-align: center;
        }
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
    }
  }
</style>

