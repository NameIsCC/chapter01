<template>
    <div class="tel">
        <Header></Header>
        <div class="phone">
            <p>
                <span>QQ:<i>666666</i></span>
            </p>
            <p>
                <span>微信:<i>666666</i></span>
            </p>
            <p>
                <span>电话:<i>666666</i></span>
            </p>
            <p>
                <span>地址(跳转地图):<router-link to="/map">上海市宝山区同济支路199号上海第二工业大学千峰教育</router-link></span>
            </p>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
export default {
    components:{
        Header
    },
}
</script>

<style>
    .phone{width: 300px;margin:150px auto;}
    p{margin-bottom:15px;}
    i{margin-left:5px;}
</style>