<template>
  <h1>ProductId: {{ $route.params.productId }}</h1>
  <router-link :to="`/products/${ $route.params.productId }/comments`">Product's comment</router-link>
  <router-view></router-view>
</template>