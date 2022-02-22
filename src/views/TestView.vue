<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    // msg = message，不是固定名稱，是在 HelloWorld.vue 內所宣告的 message 的宣告名稱
    <HelloWorld msg="This is a TestView"/>
  </div>
</template>

<script>
// @ is an alias to /src
// @ 是 /src 路徑簡寫
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name (待確認)
  name: 'TestView',
  components: {
    HelloWorld
  }
}
</script>
