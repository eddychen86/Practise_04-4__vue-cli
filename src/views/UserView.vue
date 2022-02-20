<template>
  {{ $store.state.message }}
  <h1>UserId: {{ $route.params.UserId }}</h1>
  <div>Name: {{ userInfo.name }}</div>
  <div>Email: {{ userInfo.email }}</div>
  <hr>
  <router-link :to="`/users/${userId}/todos`">{{ userInfo.name }} 的 todo</router-link>
  <router-view></router-view>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userInfo: {}
      }
    },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    
    watch: {
      userId: function(val) {
      this.fetchUserInfo(val)
      }
    },
    mounted() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}`)
        .then(response => this.userInfo = response.data)
    },
    methods: {
      fetchUserInfo(id) {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => this.userInfo = response.data)
      }
    }
  }
</script>