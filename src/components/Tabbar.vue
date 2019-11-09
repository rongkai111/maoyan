<template>
    <footer>
        <ul>
            <router-link 
            tag="li"
            :to="list.path"
            v-for = "list in lists"
            :key = "list.id"
            active-class = 'active'
            >               
                <i class="fa" :class = "[list.icon]"></i>
                <span>{{ list.name }}</span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                {
                    id:1,
                    name:'电影',
                    path:'/home',
                    icon:'fa-weixin'
                },{
                    id:2,
                    name:'影院',
                    path:'/cinema',
                    icon:'fa-steam'
                },{
                    id:3,
                    name:'我的',
                    path:'mine',
                    icon:'fa-user-circle-o'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/border.styl'
ul 
    display flex 
    list-style none 
    justify-content space-around
    padding-left 0
    margin 0
    height 100%
    li 
        display flex 
        flex-direction column 
        justify-content center
        align-content center
        i
            font-size .25rem
            margin-bottom .02rem
        span 
            font-size .12rem
footer 
    width  100%
    height .52rem
    border 1px 0 0 0  ,#ccc 
    overflow hidden
.active 
    color  #e54847

</style>