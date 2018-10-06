<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Header title="header" />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'about',
  components: {
    Header
  }
}
</script>