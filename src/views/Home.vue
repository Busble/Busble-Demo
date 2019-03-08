<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UAParser from 'ua-parser-js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    this.trackUserAgent()
  },
  methods: {
    trackUserAgent() {
      let parser = new UAParser()
      let uastring = navigator.userAgent
      parser.setUA(uastring);
      let result = parser.getResult()
      let os = result.os.name

      this.$ga.event({
        eventCategory: 'useragent',
        eventAction: 'user-os',
        eventLabel: os
      })
    }
  }
}
</script>
