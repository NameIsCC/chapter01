<template>
    <div class="news">
        <Header></Header>
        <List :list="$store.state.news" dataName="news"></List>
    </div>
</template>

<script>
import Header from '../components/Header';
import List from '../components/List';
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    props:['id','dataName'],
    components:{
        Header,List
    },
    mounted(){
        this.$store.dispatch('UPDATE_NEWS')
    },
    computed:mapState(['detail'])
}
</script>

<style scoped>
    
</style>