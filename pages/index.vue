<template>
    <div class="main">
        <Hero/>
        <Brands/>
        <CoreValues/>
        <GlobalOffices/>
    </div>
</template>

<script>
    import Hero from '~/components/Hero.vue'
    import Brands from '~/components/Brands.vue'
    import CoreValues from '~/components/CoreValues.vue'
    import GlobalOffices from '~/components/GlobalOffices.vue'

    export default {
        components:{
          Hero,
          Brands,
          CoreValues,
          GlobalOffices
        }
    }
</script>

<style lang="scss">
.main{
    line-height: 30px;
    background: #000000;

    h1, h2, h3, h4 {
        font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    }

    h2{
        font-family: Georgia;
        text-align: center;
        font-size: 2.625rem;
        padding: 4.5rem 0;
    }
}
</style>
