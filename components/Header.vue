<template>
    <div class="header">
        <div class="container">
            <div class="flex justify-between">
                <img :src="`../doologo.svg`">
            </div>
            <div class="links">
                <nuxt-link :to="{ path: '/',hash:'#'}">Home</nuxt-link>
                <a href="#brands">Brands</a>
                <a href="#values">Values</a>
                <a href="#offices">Offices</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="scss">
    .header{
        height: 56px;
        background: #000000;
        color: #FFFFFF;
        height: 56px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        z-index: 5;

        .links{
            font-size: 16px;
            letter-spacing: 0px;
            flex-grow: 1;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            
            a{
                margin: 0 10px; 
            }
            
        }

        .container{
            display: flex;
        }
    }
</style>