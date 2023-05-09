<template>
  <div class="home">
    <Carousel></Carousel>
    <About></About>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import About from './about.vue'
export default {
    name: 'Home',
    components: {
        Carousel,
        About
    }
}
</script>

<style>

</style>