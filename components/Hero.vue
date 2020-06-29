<template>
    <section class="hero">
        <div class="container flex justify-end">
            <div class="wrapper">
                <div class="tagline">{{ tagline }}</div>
                <h1>{{ title }}</h1>
                <div class="content">{{ content }}</div>
                
            </div>
        </div>
    </section>
</template>
<style type="text/css" lang="scss" scoped>
    
    .hero{
        color: #FFFFFF;
        height: 742px;
        background: url('/doo-hero.png') no-repeat scroll 50%/cover;
        font-family: Georgia,serif;


        .wrapper{
            width: 68%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            h1{
                margin: 1rem 0;
                line-height: 1.21;
                font-size: 3.5rem;
                font-weight: 400;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
            }

            .tagline {
                font-size: 24px;
                color: hsla(0,0%,100%,.85);
                font-weight: 400;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
            }

            .content {
                padding: 0;
                font-size: 20px;
                color: hsla(0,0%,100%,.65);
                font-weight: 400;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                title : "Build Your Financial Execution to the Next Level",
                tagline : "Build Your Financial Enterprise",
                content: "Doo Holding Group was officially incorporated in Hong Kong since 2014, a financial services group with cutting-edge technology and solutions. Doo Holdings is globally located and branches in Hong Kong, London, Taiwan, Kuala Lumpur, managing the brands of Doo Holding, Doo Tech, Doo Prime, Doo Clearing, Doo Cloud, Doo Exchange, Doo Intelligence and Doo Consulting."
            }
        }
    }
</script>