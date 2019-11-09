import  axios from 'axios'

const  GETMOVIES = 'GETMOVIES'
const  GETCOMINGMOVIES = 'GETCOMINGMOVIES'
export default {
    state:{
        movies:null,
    },
    actions:{
        getmovies( {commit} ){
            axios({
                url:'/ajax/comingList',
                params: {
                    ci: 50,
                    token: '',
                    limit: 10
                  }
            }).then(res=>{
                commit({
                    type:GETMOVIES,
                    payload:res.data
                })
            })
        } ,
        getComingMovies ( {commit},movieIds ) {
            axios({
              url: '/ajax/moreComingList',
              params: {
                ci: 50,
                token: '',
                limit: 10,
                movieIds
              }
            }).then( res => {
              commit({
                type: GETCOMINGMOVIES,
                payload: res.data 
              })
            })
          },
    },
    mutations:{
        GETMOVIES( state,action ){
            state.movies = action.payload
        },
        GETCOMINGMOVIES( state,action ){
            state.movies.coming.push( ...action.payload.coming )
        }
    }
}