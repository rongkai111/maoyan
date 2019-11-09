<template>
    <div class="layout">
        <Tab></Tab>
        <router-view></router-view>      
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tab from '../components/Tab'
import Tabbar from '../components/Tabbar'
import Home from '../view/home'

export default {
    components:{
        Tab,
        Tabbar,
        Home 
    }
}
</script>

<style lang="stylus" scoped>
.layout
    height 100%
    display flex
    flex-direction column
</style>
