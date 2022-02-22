<template>
  <h1>User {{ userId }} 的 Todo</h1>
  <ol>
    <li v-for="todo in todos" :key="todo">
    // :key 為識別 v-for 內 in 左側的值
      <h4>{{ todo.title }}</h4>
      // v-model 連接的值為 vue 內的 data 所 return 的值
      是否完成？<input type="checkbox" v-model="todo.completed">
    </li>
  </ol>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        // 這邊的 [] 執行的是下方 axios.then 內的 res.data 資料
        todos: []
      }
    },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    methods: {
      fetchUserTodo(id) {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
          // 因上方 data 所 return 出來的 todos 需要一個宣告來告訴 資料來源，所以這邊的 .then 所執行的動作為宣告 this.todos = res.data
          .then(res => this.todos = res.data)
      }
    },
    mounted() {
      this.fetchUserTodo(this.userId)
    }
  }
</script>
