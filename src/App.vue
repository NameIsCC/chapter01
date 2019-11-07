<template>
  <div id="app">

    <!-- <transition enter-active-class="animated bounceInLeft"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <!-- <Home></Home> -->
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from './components/Footer';
import Home from './pages/Home';

export default {
  name: 'app',
  components: {
    Footer,Home
  },
  watch:{
    $route:{
      handler(nextRoute,oldRoute){
        //console.log(nextRoute.path,nextRoute);
        let path = nextRoute.path;
        if(/detail/.test(path)){
          console.log('detail');
          this.$store.commit('HEAD_DETAIL',"新闻详情")
        }
        if(/news/.test(path)){
          console.log('news');
          this.$store.commit('GS_DETAIL',"最新热闻")
        }
        if(/price/.test(path)){
          console.log('price');
          this.$store.commit('JG_DETAIL',"价格列表")
        }
        if(/pricedetail/.test(path)){
          console.log('pricedetail');
          this.$store.commit('HEAD_DETAIL',"价格详情")
        }
        if(/map/.test(path)){
          console.log('map');
          this.$store.commit('HEAD_DETAIL',"公司地址")
        }
        if(/tel/.test(path)){
          console.log('tel');
          this.$store.commit('HEAD_DETAIL',"联系方式")
        }
        if(/protection/.test(path)){
          console.log('protection');
          this.$store.commit('HEAD_DETAIL',"用车常识")
        }
      },
      immediate: true
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{ color:#333; text-decoration:none;}
a:active, a:hover{ color: #333; text-decoration:none;}
:focus{outline:0}
</style>
