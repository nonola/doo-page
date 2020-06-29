<template>
    <section id="offices" class="offices">
        <div class="container ">
            <h2>Global Offices</h2>
            <div class="map">
                <img :src="`../map.svg`" alt="global offices around the world">
                <div class="point" v-for="office in offices" :style="{ left : office.left, top: office.top  }">
                    <span class="red-dot" >
                        <p>{{ office.name }}</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<style type="text/css" lang="scss" scoped>
    .offices{
        background: #FFFFFF;
        text-align: center;

        .map{
            position: relative;
            margin-bottom: 7.25rem;
            overflow: hidden;

            img{
                margin: auto;
            }

            .point{
                position: absolute;

                .red-dot{
                    border-radius: 50%;
                    background-color: #e03323;
                    position: relative;
                    display: inline-block;
                    width: 10px;
                    height: 10px;

                    p{
                        position: absolute;
                        white-space: nowrap;
                        top: 0;
                        left: 0;
                        -webkit-transform: translate(-110%,-35%);
                        transform: translate(-110%,-35%);
                    }

                    &::after{
                        content: "";
                        display: block;
                        width: 18px;
                        height: 18px;
                        opacity: .1;
                        top: -4.5px;
                        left: -4.5px;
                        border-radius: 50%;
                        background-color: #e03323;
                        position: relative;
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
                offices: [
                    { name: 'London', left : '46%', top : '20%' },
                    { name: 'Georgetown', left : '24%', top : '44%' },
                    { name: 'Roadtown', left : '26%', top : '48%' },
                    { name: 'Hong Kong', left : '75%', top : '35%' },
                    { name: 'Taipei', left : '77%', top : '44%' },
                    { name: 'Kuala Lumpur', left : '73%', top : '55%' }
                ]
            }
        }
    }
</script>