<template>
    <div class="detail">
        <Header></Header>
        <div class="content" v-for="item of detail" :key="item._id">
        <div class="header clear"><h2><img class="head" :src="baseUrl + item.icon" alt=""/></h2><p>{{ item.auto }}</p></div>
        <div class="cont">
            <h3>{{ item.title }}</h3>
            <div class="time"><p><span><img src="src/assets/img/zan.png" alt=""/></span></p></div>
            <div class="text">
                <img class="t1" :src="baseUrl + item.icon" alt="">
                <span class="s1">{{ item.content }}</span>
                <img class="t1" :src="baseUrl + item.icon" alt="">
                <span class="s1">{{ item.content2 }}</span>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'detail',
    components:{
        Header
    },
    mounted(){
        console.log(this.$route.params.id,this.$route.query.dataName)
        this.$store.dispatch('UPDATE_DETAIL',{id:this.$route.params.id,dataName:this.$route.query.dataName})
    },
    computed:mapState(['detail'])
}
</script>
<style scoped>
.content{margin-top: 45px;margin-left: 10px;margin-bottom: 40px}
.header{overflow: hidden; margin: 10px 0 10px 10px}
.header h2{float: left;}
.header p{float: left;margin-left: 15px;line-height: 12px;margin-top:25px}

.content .cont{ padding:0 0.38rem; color:#494d4d;}
.cont h3{margin-top:20px; font-size:24px; line-height:10px; padding-bottom:20px; border-bottom:1px solid #494d4d;}
.text{margin-top:20px;}
.t1{display: block;margin: 0 auto;}
.s1{text-indent: 2em}
.head{display: block;width:60px;height:60px;border-radius: 50%}
img{display: block;width: 350px;}
</style>