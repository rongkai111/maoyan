<template>
    <div class="hot">
        <HomeList :movies = "movies"></HomeList>
    </div>
</template>

<script>
import HomeList from './HomeList'
import { mapState,mapActions } from 'vuex'
export default {
    components:{
        HomeList
    },
    mounted(){
        //发送数据请求
        this.getmovies()
        // this.$store.dispatch('getmovies')

    },
    methods:{
        ...mapActions(['getmovies'])
    },
    computed:{
        // movies(){
        //     return this.$store.state.home.movies
        // },
        ...mapState({
            movies: state => state.home.movies
        })
    }
}
</script>

<style lang="stylus" scoped>
.hot
    flex 1
    overflow hidden
</style>