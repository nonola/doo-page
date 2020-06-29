<template>
    <div id="contact" class="footer">
        <div class="container">
            <div class="brief">
                <div class="left">
                    <img :src="`../doologo.svg`">
                    <p>Brings Global Financial Execution to the Next Level.</p>
                    <p>© 2020 All Rights Reserved</p>
                </div>
                <div class="right">
                    <div class="contact">
                        <p>Follow Us</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/DooClearingLtd/" target="_blank">
                                    <img :src="`../facebook.svg`">
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/DooClearing" target="_blank">
                                    <img :src="`../twitter.svg`">
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/doo-holding-group-limited" target="_blank">
                                    <img :src="`../linkedin.svg`">
                                    <span>Linkedin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="contact">
                        <p>Contact Us</p>
                        <ul>
                            <li>
                                support@doo.hk
                            </li>
                            <li>
                                +852 5641 1906
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="brands">
                <a href="https://www.dooprime.com/">
                    <img :src="`../brands/doo-prime.svg`">
                </a>
                <a href="https://www.dooclearing.com/">
                    <img :src="`../brands/doo-clearing.svg`">
                </a>
                <a href="https://doo.tech/">
                    <img :src="`../brands/doo-tech.svg`">
                </a>
                <a href="https://www.dooexchange.com/">
                    <img :src="`../brands/doo-exchange.svg`">
                </a>
            </div>
            <div class="stories">
                <div class="left">
                    <div class="story" v-for="(story, index) in stories" v-if="index < 3">
                        <div class="title">{{ story.title }}</div>
                        <ul class="details">
                            <li v-for="item in story.details">{{ item }}</li>
                        </ul>
                        <a :href="story.link">{{ story.link }}</a>
                    </div>
                </div>
                <div class="right ml-8">
                    <div class="story" v-for="(story, index) in stories" v-if="index >2">
                        <div class="title">{{ story.title }}</div>
                        <ul class="details">
                            <li v-for="item in story.details">{{ item }}</li>
                        </ul>
                        <a :href="story.link">{{ story.link }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="scss">
    .footer{
        background: #000000;
        color: #fff;
        padding: 42px 0 55px;

        .brief{
            display: flex;

            p{
                font-size: 14px;
                color: hsla(0,0%,100%,.6);
                margin: 1rem 0 1.15rem;
            }

            .left{
                margin-right: auto;
                max-width: 20%;
            }

            .right{
                display: flex;
                color: hsla(0,0%,100%,.6);
                font-size: 14px;

                .contact{  
                    padding: 0 15px; 
                    p{
                        font-size: 20px;
                        margin-bottom: 14px;
                        color: #FFFFFF;
                    }

                    ul li{
                        margin-bottom : 15px;
                    }
                    a{
                        display: flex;
                        color: hsla(0,0%,100%,.6);
                        font-size: 14px;

                        img{
                            margin-right: 7px;
                        }

                    }
                }

            }
        }

        .brands{
            border-bottom: 1px solid #FFFFFF;
            display: flex;
            justify-content: space-between;
            padding: 2em 0px;

            img{
                filter: grayscale(100%);

                &:hover{
                    filter: none;
                }
            }
        }

        .stories{
            padding: 20px 0px;
            display: flex;
            line-height: 20px;
            letter-spacing: 1px;

            .story{
                margin: 1em 0 2em;
                font-size: 12px;
                font-weight: 300;


                .title{
                    color: #FFFFFF;
                }

                .details{
                    margin-bottom: 15px;
                    li{
                        color: hsla(0,0%,100%,.45);
                        margin-top: 14px;
                    }
                }

                

                a{ 
                    color: #eb4d33; }
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                stories: [
                    { title: 'Doo Holding Group Limited', details: ['It is a limited company with the registered office at Unit A, 25/F, Tower B, Billion Centre, No.1 Wang Kwong Road, Kowloon Bay, Hong Kong, and the company registration number is 2169884.'], link: 'www.dooexchange.com'},
                    { title: 'Doo Technology Limited', details: ['It is a limited company with the registered office at Unit A, 25/F, Tower B, Billion Centre, No.1 Wang Kwong Road, Kowloon Bay, Hong Kong, and the company registration number is 2535212.', 'Doo Technology Limited is a software technology provider serving the financial industry.'], link: 'www.doo.tech'},
                    { title: 'Doo Clearing Limited', details: ['It is a limited company with the registered office at 208 Uxbridge Road, Shepherds Bush, London, England, W12 7JD, and the company registration number is 10684079.', 'Doo Clearing Limited is a futures and forex broker and liquidity provider, authorized and regulated by the Financial Conduct Authority (FCA), and the regulatory number is 833414.'], link: 'www.dooclearing.com'},
                    { title: 'Doo Holding Group Limited', details: ['It is a branch with the registered office at 4968 Yonge Street, Toronto Ontario, M2N 7G9, Canada. We have an obligation to report to FINTRAC about the business activities that we registered, and the regulatory number is M19501973.'], link: 'www.dooexchange.com'},
                    { title: 'Doo Consulting Limited', details: ['It is a limited company with the registered office at Unit A, 25/F, Tower B, Billion Centre, No.1 Wang Kwong Road, Kowloon Bay, Hong Kong, and the company registration number is 2601567.', 'Doo Consulting Limited is a licensed trust or company service provider, authorized by Company Registry in Hong Kong, and the license number is TC006709.'], link: 'www.doo.hk'},
                ]
            }
        }
    }
</script>