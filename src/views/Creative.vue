<template>
    <div class="app-container">
        <h1 class="creater-title">เลือกแพ็คเกจ</h1>
        <div class="creater-wrap">
            <div class="dialog">
                <p>Free</p>
                <button class="button primary" @click="trackRegisterGeneral" type="submit">ฟรี</button>
            </div>
            <div class="dialog">
                <p>Pro</p>
                <button class="button primary" @click="trackRegisterCretive" type="button">จ่ายตัง</button>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name: 'Creative',
    methods: {
        trackRegisterCretive() {
        this.$ga.event({
            eventCategory: 'register',
            eventAction: 'pro-user'
        })
        },
        trackRegisterGeneral() {
            this.$ga.event({
            eventCategory: 'register',
            eventAction: 'general-user'
        })
        }
    }
}
</script>
<style lang="scss" scoped>
    .creater-title {
        text-align: center
    }
    .creater-wrap {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
        padding: 1rem;
        .dialog {
            text-align: center;
        }
    }
</style>
