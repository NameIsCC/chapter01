<template>
    <div class="pricelist">
        <ul>
            <li v-for="item of list" :key="item.id">
                <router-link :to="'/pricedetail/' + item._id + '?dataName='+dataName">
                    <img :src="baseUrl + item.icon" alt="">
                    <span>{{ item.title }}</span>
                    <p><i>价格￥:</i><span>{{ item.num }}</span></p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['list','dataName']
}
</script>
<style scoped>
*{margin: 0;padding: 0;list-style: none;}
ul{overflow: hidden;margin-top:45px;}
li{float: left; width: 150px;height: 200px;margin-left:33px;margin-bottom: 30px;border: 1px solid #666}
img{display:block;width: 150px;margin-bottom: 10px;}
span{font-weight: 700;}
p{margin-top:10px;color: orangered;}
</style>