<template>
   
        <div class="top-box">
            <router-link class="city-box" to = "/city" tag="div"> 
                <span>杭州</span>
                <i  class="fa fa-caret-down"></i>
            </router-link>
            <div class="content">
                <router-link tag="span" :to="{name:'hot'}" active-class="active">正在热映</router-link>
                <router-link tag="span" :to="{name:'coming'}" active-class="active">即将上映</router-link>
            </div>
            <router-link class="search" tag="div" to="/search">
                <i class="fa fa-search" ></i>
            </router-link> 
        </div>
   
    
</template>

<style lang="stylus" scoped>
@import  '../../assets/css/border.styl'

.top-box
    display flex
    height .44rem
    border 0 0 1px 0,#cccccc
    align-items  center
    .city-box
        display flex
        flex 70
        justify-content center
        align-items  center
        span 
            font-size  .15rem
            margin-right .04rem
        i 
            font-size  .08rem
    .content
        display flex
        flex 255
        justify-content space-around
        span 
            font-size  .15rem
            padding  .12rem
            &.active
                color #e54847
                border-bottom .02rem solid #e54847
                
    .search
        display flex
        flex 50
        justify-content center
        i   
            font-size   .2rem
</style>