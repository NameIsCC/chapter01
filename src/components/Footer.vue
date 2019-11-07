<template>
    <div class="footer">
        <a href="javascript:;" id="fanhui" @click="goback()"></a>
        
        <router-link to="/home" tag="a" id="home"></router-link>
        <router-link to="" tag="a" id="list"></router-link>
        <router-link to="/tel"  tag="a" id="tel"></router-link>
        <router-link  to="/map" tag="a" id="map"></router-link>
        <!-- <a href="javascript:void(null)" id="list"></a>
        <a href="tel:10086" id="tel"></a>
        <a href="#" id="map"></a> -->
    </div>
</template>

<script>
export default {
    mounted(){
        
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    /*底部*/
.footer{ width:100%; height:40px; line-height:40px; background:#333; position:fixed; left:0; bottom:0;}
.footer a{ display:block; width:20%; height:40px; float:left; background:no-repeat center; background-size:auto 20px;}
.footer #fanhui{ background-image:url(../assets/images/fanhui.png);}
.footer #list{ background-image:url(../assets/images/list.png);}
.footer #home{ background-image:url(../assets/images/home.png);}
.footer #tel{ background-image:url(../assets/images/tel.png);}
.footer #map{ background-image:url(../assets/images/map.png);}
</style>