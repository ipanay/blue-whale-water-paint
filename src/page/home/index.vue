<template>
  <div class="home">
    <Carousel></Carousel>
    <About></About>
    <Products></Products>
    <Cases></Cases>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import About from './about.vue'
import Products from './products.vue'
import Cases from './cases.vue'
export default {
    name: 'Home',
    components: {
        Carousel,
        About,
        Products,
        Cases
    }
}
</script>

<style>

</style>