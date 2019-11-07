<template>
    <div class="home"> 
        <Slider></Slider>
        <Nav></Nav>
    </div> 
</template>

<script>


import Slider from '../components/Sider';
import Nav from '../components/Nav';

export default {
    components:{
        Slider,Nav
    },
}
</script>


<style scoped>
    /*banner*/
#wrapper { width: 100%; overflow: hidden; background:#FFF;  }
.swipe ul, .swipe li { margin: 0; padding: 0; list-style: none; overflow: hidden; }
.swipe img { width:100%; height:auto; display: block;}
.swipe { overflow: hidden; position: relative; }
.swipe ul { -webkit-transition: left 800ms ease-in 0; -moz-transition: left 800ms ease-in 0; -o-transition: left 800ms ease-in 0; -ms-transition: left 800ms ease-in 0; transition: left 800ms ease-in 0; }
.swipe #pagenavi { position: absolute; left: 0; bottom: 7px; text-align: center; width: 100%; }
.swipe #pagenavi a { width:6px; height:6px;  line-height: 99em; background:#999;  border-radius: 50%; margin:0 3px; overflow: hidden; cursor: pointer; display: inline-block; *display:inline;*zoom:1;}
.swipe #pagenavi a.active { background: #FFF; }

/*导航*/
.nav{ overflow:hidden; padding-bottom:20px;}
.nav li{ width:33.33%; float:left; text-align:center; margin-top:20px; }
.nav li a{ width:80px; display:inline-block; border-radius:5px; overflow:hidden;}
.nav li img{ width:100%; height:auto; display:block;}
.nav li span{ display:block; height:20px; text-align:center; background:#DDD; font:normal 12px/20px Arial;}
</style>