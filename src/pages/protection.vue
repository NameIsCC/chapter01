<template>
    <div class="protection">
        <Header></Header>
        <div class="content" v-for="item of protection" :key="item._id">
            <img :src="baseUrl + item.icon" alt="">
            <p>【{{item.title}}】</p>
            <span>{{item.content}}</span>
            <p>【{{item.title2}}】</p>
            <span>{{item.content2}}</span>
            <p>【{{item.title3}}】</p>
            <span>{{item.content3}}</span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../components/Header';
export default {
    components:{
        Header
    },
    mounted(){
        this.$store.dispatch('UPDATE_PRO')
    },
    computed:mapState(['protection'])
}
</script>

<style scoped>
    .content{margin:45px 20px 20px 20px;}
    p{margin-top:20px}
    span{text-indent:2em}
</style>