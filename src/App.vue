<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// import Menu from './components/menu'

export default {
  name: 'App',
  components: {
    Header,
    Footer
    // Menu
  }
}
</script>

<style>
html,body,h1,h2,h3,h4,h5,h6,p {
  padding: 0;
  margin: 0;
}
</style>
