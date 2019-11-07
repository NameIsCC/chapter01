<template>
    <div class="price">
        <Header></Header>
        <Pricelist :list="$store.state.price" dataName="price"></Pricelist>
    </div>
</template>


<script>
import Header from '../components/Header';
import axios from 'axios'
import Pricelist from '../components/Pricelist'
import {mapState} from 'vuex'
export default {
    components:{
        Header,Pricelist
    }, 
    mounted(){
        this.$store.dispatch('UPDATE_PRICE')
    },
    computed:mapState(['price'])
}
</script>

