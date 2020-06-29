<template>
  <div>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>
<script type="text/javascript">
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        components:{
          Header,
          Footer
        }
    }
</script>
<style>

.container {
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    padding: 0 2rem;
}

html {
    font: normal 16px Poppins-Regular,sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
