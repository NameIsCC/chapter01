<template>
    <div class="pricedetail">
        <Header></Header>
        <div class="detail" v-for="item of pricedetail" :key="item._id">
        <div class="top">
            <img :src="baseUrl + item.icon" alt="">
            <p>
                <span>{{ item.title }}</span>
                <span>价格￥：{{ item.num }}</span>
            </p>
        </div>
        <div class="bottom">
            <p>详情：{{ item.content }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    mounted(){
        this.$store.dispatch('UPDATA_PRICEDETAIL',{id:this.$route.params.id,dataName:this.$route.query.dataName})
    },
    computed:mapState(['pricedetail']),
    components:{
        Header
    },
}
</script>

<style scoped>
.pricedetail{margin: 50px 30px;}
    .top{overflow: hidden;margin-bottom: 30px;}
    .top img{display: block;float: left;width: 300px;height: 200px;margin: 0 auto;}
    .top p{ float: left;margin-left: 30px;}
    .top p span{display: block;margin-top: 30px;}
    .bottom {}
</style>