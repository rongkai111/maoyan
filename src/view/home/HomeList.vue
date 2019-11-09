<template>
  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        
          <div v-if="movies"> 
            <home-item :data="item"
            v-for="item in movies.coming"
            :key="item.index">            
            </home-item>
          </div>

          
              
      </div>
    </div>
  </div>
</template>

<script>
import HomeItem from './HomeItem'
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { mapActions } from 'vuex'
export default {
  components:{
    HomeItem
  },
  props:['movies'],
  mounted(){
    let count = 0
    const bs = new BScroll('.page',{
      pullUpLoad:{
        threshold:30
      }
    })
    bs.on('pullingUp',() => {
      const movieIds = this.movies.movieIds.slice( 12 )
    
      const ids = _.chunk( movieIds,10 )
    
      if ( count == ids.length) {
       
        bs.finishPullUp() // 必须告诉他拉动结束了
        return;
      }
      if ( count < ids.length ) {
        // 可以啦 - 可以进行数据请求了
      
       
        setTimeout(() => {
          
          this.getComingMovies( ids[ count ].join(',') )
          
        },2000)
      }
      
      bs.finishPullUp() // 必须告诉他拉动结束了
      count ++
    })
  },
  methods:{
    ...mapActions(['getComingMovies'])
  }
}
</script>

<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 
  
</style>
