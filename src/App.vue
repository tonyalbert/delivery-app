<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/css/styles.css'
import Aside from './components/Aside.vue'
</script>

<template>

<div class="grid grid-cols-12 w-screen h-screen">

  <div class="bg-red-500">
    <Aside />
  </div>

  <div class="col-span-11">
    <RouterView />
  </div>

</div>

</template>


<style>
  #aside {
    background-color: #F3F3F3;
  }
</style>
