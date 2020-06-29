<template>
    <section id="values" class="values">
        <div class="container text-center">
            <h2>Core Values</h2>
            <div class="wrapper">
                <div class="parts left">
                    <div class="image">
                        <img :src="`../values/value.png`">
                    </div>
                    <div class="text">
                        <h3>Value</h3>
                        <div class="mt-8" v-for="value in values">
                            <h4>{{ value.title }}</h4>
                            <p class="mt-1">{{ value.content }}</p>
                        </div>
                    </div>
                </div>
                <div class="parts right">
                    <div class="mission flex">
                        <img :src="`../values/mission.png`">
                        <div class="text">
                            <h3>Mission</h3>
                            <p class="mt-1">{{ mission }}</p>
                        </div>
                    </div>
                    <div class="vision flex">
                        <img :src="`../values/vision.png`">
                        <div class="text">
                            <h3>Vision</h3>
                            <p class="mt-1">{{ vision }}</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
</template>
<style type="text/css" lang="scss">
    .values{
        background: #FFFFFF;

        .wrapper {
            
            display: flex;

            .parts{
                display: flex;

                &.left{
                    width: 60%;
                }

                &.right{
                    width: 40%;
                    flex-direction: column;
                    justify-content: space-between;
                }


                h4{
                    color: #666;
                    margin-bottom: 0.8rem;
                }

                h3{ 
                    font-size: 1.375rem;
                    color: #333;
                    margin-bottom: 2rem;
                }

                .image{
                    min-width: 270px;

                    img{
                        width: 100%;
                    }
                }

                .text{
                    color: #999;
                    font-size: 14px;
                    text-align: left;
                    padding: 0 2em;
                    line-height: 24px;

                    .bigger{
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                values:[
                    { title : 'Outstanding', content:'We value skill, intelligent and hard-work in our team to achieve the best possible result.' },
                    { title : 'Multi-asset', content:'We value multiple-asset development to provide cost-effective one stop solutions to our clients.' },
                    { title : 'Integrity', content:'We hold strong corporate compliance culture; social responsibility is at the core of our business.' }
                ],
                mission: 'Establishing a financial ecosystem network that empowers our clients to stay one step ahead.',
                vision: 'Brings global financial execution to the next level.'
            }
        }
    }
</script>