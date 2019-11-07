<template>
    <!--新闻列表-->
<div class="newslist">
   <ul>
      <li v-for="item of list" :key="item.id">
            <router-link :to="'/detail/' + item._id + '?dataName='+dataName">
                <img :src="baseUrl + item.icon">
                <h1>{{ item.title }}</h1>
                <p>{{ item.content }}</p>
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

    /*新闻*/
.newslist {margin-top: 45px;margin-bottom: 40px;}
.newslist li { border-bottom: 1px solid #DDD; }
.newslist li:nth-child(2n){ background:#FFF;}
.newslist li a { display: block; overflow: hidden; padding: 20px 10px; }
.newslist li img { width: 80px; height: 60px; float: left; margin-right: 10px; }
.newslist li h1 { font-size: 16px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.newslist li p { margin: 0; padding: 0; line-height: 30px; font-size: 14px; color: #666; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.pagelist { margin: 20px 10px; height: 40px; background:#FFF; font-weight: bold; line-height: 40px; display: box; font-size: 16px; border: 1px solid #BBB; display: -moz-box; display: -webkit-box; border-radius: 5px; }
.pagelist span { display: block; text-align: center; box-flex: 1.0; -moz-box-flex: 1.0; -webkit-box-flex: 1.0; }
.pagelist span a { display: block; color:#666;}
.page { width:30px; overflow:hidden;  border-left: 1px solid #BBB; border-right: 1px solid #BBB;}
.page select{ font-size:16px; height:40px; background:none; text-align:center; border:none; font-family: Arial; color:#666; -webkit-appearance:none; -moz-appearance: none; appearance:none; }

</style>