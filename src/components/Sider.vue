<template>
    <div id="wrapper">
        <div class="swipe">
            <ul id="slider" v-for="item of banner" :key="item.id">
                <li><img :src="baseUrl + item.icon" /></li>
                <li><img :src="baseUrl + item.icon" /></li>
                <li><img :src="baseUrl + item.icon" /></li>
                <li><img :src="baseUrl + item.icon" /></li>
            </ul>
            <div id="pagenavi"></div>
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import Swipe from '../assets/js/swipe';
import {mapState} from 'vuex'
export default {
    mounted(){
        var mySwipe=new Swipe($('.swipe')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      });
      this.$store.dispatch('UPDATA_BANNER')
    },
    computed:mapState(['banner'])
}
</script>

<style scoped>
*{
    list-style: none;
    margin: 0;
    padding: 0;
}
#wrapper{width: 100%;position: relative;height: 212.5px;}
img{display: block;width: 100%;height: auto;position: absolute}
</style>