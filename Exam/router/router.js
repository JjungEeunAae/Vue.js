import main from '../components/main.js'
import movieList from '../components/movieList.js'
import movieDetail from '../components/movieDetail.js'

export default new VueRouter({
  routes : [
    {
      path : '/',
      name : 'main',
      component : main
    },
    {
      path : '/movieList',
      name : 'movieList',
      component : movieList
    },
    {
      path : '/movieDetail:movieCd',
      name : 'movieDetail',
      component : movieDetail,
      props : true
    },
  ]
})
