<template>
  {{ $store.state.message }}
  <h1>UserId: {{ $route.params.UserId }}</h1>
  <div>Name: {{ userInfo.name }}</div>
  <div>Email: {{ userInfo.email }}</div>
  <hr>
  // to 若加上「:」，代表要執行函示；若不加「:」，代表單純的指向某個路徑
  <router-link :to="`/users/${userId}/todos`">{{ userInfo.name }} 的 todo</router-link>
  // router-view 只會使 router-*** 內容呈現在網頁上，並不會影響到其他未使用 router功能 的內容
  <router-view></router-view>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        // 這邊的 {} 是去偵測 template 內的 {{}} 的值
        userInfo: {}
      }
    },
    // 儲存 function結果 的地方，在執行時不用加上()，只能在 template 內執行(待確認)
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    // 監聽 (待確定)
    watch: {
      userId: function(val) {
      this.fetchUserInfo(val)
      }
    },
    // 優先執行功能
    mounted() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}`)
        .then(response => this.userInfo = response.data)
    },
    // 一樣是儲存 function 的地方，但只能在 export default 內執行
    methods: {
      fetchUserInfo(id) {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => this.userInfo = response.data)
      }
    }
  }
</script>
