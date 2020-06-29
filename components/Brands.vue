<template>
    <section id="brands"class="brands">
        <div class="container ">
            <h2>Our Brands</h2>
            <div class="holder">
                <div class="brand" v-for="brand in brands">
                    <div class="bg"><img :src="`../brands/${brand.bg}`"></div>
                    <div class="details">
                        <img :src="`../brands/${brand.img}`">
                        <div class="text mt-4">{{ brand.content }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style type="text/css" lang="scss" scoped>
    
    .brands{
        background: #000 url('/doo-brand.png') no-repeat scroll 50%/cover;
        height: 100vh;
        color: #FFFFFF;

        h2{
            font-size: 2.625rem;
            position: absolute;
            font-family: Georgia,sans-serif;
            color: hsla(0,0%,100%,.65);
            padding: 0;
            margin-top: 4.5rem;
        }

        .holder{
            height: 100%;
            display: flex;

            .brand{
                border-left: 1px solid hsla(0,0%,100%,.16);
                flex: 1 1 0px;
                cursor: pointer;
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding-top: 55vh;

                -webkit-transition: all .2s ease;
                transition: all .2s ease;

                &:last-child{
                    border-right: 1px solid hsla(0,0%,100%,.16);
                }

                .details{
                    padding: 242px 24px 24px;
                    z-index: 10;
                    -webkit-transition: all .3s ease;
                    transition: all .3s ease;

                    .text{
                        display: none;
                    }
                }

                .bg{
                    display: none;
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    -webkit-transition: all .5s ease;
                    transition: all .5s ease;
                    img{
                        height: 100vh;
                        width: 100%;
                    }
                }

                &:hover{
                    padding-top: 0;

                    .bg{
                        display: block;
                    }

                    .details{
                        .text{
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                brands: [
                    { name: 'Doo Prime', img: 'doo-prime.svg', content: 'With years of industry experience and world-class technical support, Doo Prime provides retail customers and professional traders with the best liquidity solutions for financial markets, allowing all of our investors to enjoy the fastest rates at the lowest market rates.', bg :'doo-prime-bg.png' },
                    { name: 'Doo Clearing', img: 'doo-clearing.svg', content: 'Doo Clearing, a UK-based Spot Forex and CFDs liquidity provider, provides a reliable and advanced system that allows the clients to access global liquidity under a single connection. Doo Clearing offers a comprehensive liquidity clearing system that includes liquidity access, quotation aggregation, liquidity distribution, clearing account, risk management, reporting, and system health-level checking.' , bg :'doo-clearing-bg.png'},
                    { name: 'Doo Tech', img: 'doo-tech.svg', content: 'Cutting-edge technology with an ultra-low latency trading environment and multi-asset arrangement, Doo Tech can advance your workflow management and efficiency dramatically. Outstanding customer services consistently executes customized support, Doo Tech brings your business to the next level.', bg :'doo-tech-bg.png' },
                    { name: 'Doo Exchange', img: 'doo-exchange.svg', content: 'Doo Exchange is a Licensed Foreign Currency Exchange Company regulated by the Customs and Excise Department, Hong Kong SAR. We are dedicated to providing corporate and retail clients a full range of international money exchange services.', bg :'doo-exchange-bg.png' }
                ]
            }
        }
    }
</script>