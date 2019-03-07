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
      <input type="text" v-model="text_email">
      <button type="submit" class="button primary">ลงทะเบียน</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      text_email: ""
    };
  },
  methods: {
    submit() {
      const userListRef = Firebase.database().ref("/user");
      let newUserRef = userListRef.push();
      newUserRef.set(
        {
          email: this.text_email
        },
        function(error) {
          if (error) {
            // The write failed...
          } else {
            console.log("Data saved successfully!");
          }
        }
      );
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
    input {
      width: 100%;
      max-width: 350px;
      font-size: 18px;
      font-weight: bold;
      padding: 12px 24px;
      margin: 10px;
      border: 1px solid #E8EFF6;
      border-radius: 3px;
      color: #333;
      background-color: #fff;
      transition: all 0.2s ease;
      //box-shadow: 0 5px 15px rgba(32, 43, 54, 0.05);
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

