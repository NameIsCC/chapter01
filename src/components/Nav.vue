<template>
    <div class="nav">
        <!--网站栏目-->
        <nav>
            <ul>
                <li>
                    <router-link to="/protection">
                        <img src="/images/img01.jpg" />
                        <span>用车常识</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news">
                        <img src="/images/img02.jpg" />
                        <span>最新热闻</span>
                    </router-link>
                </li>
                <li><router-link to="/price"><img src="/images/img03.jpg" /><span>价格咨询</span></router-link></li>
                <!-- <li><a href="newsxx.html"><img src="/images/img04.jpg" /><span>预约保险</span></a></li>
                <li><a href="cp.html"><img src="/images/img05.jpg" /><span>置换服务</span></a></li>
                <li><a href="cpxx.html"><img src="/images/img06.jpg" /><span>生活大爆炸</span></a></li> -->
            </ul>
        </nav>
    </div>
</template>


<style scoped>

/*导航*/
.nav{ overflow:hidden; padding-bottom:20px;}
.nav li{ width:33.33%; float:left; text-align:center; margin-top:20px; }
.nav li a{ width:80px; display:inline-block; border-radius:5px; overflow:hidden;}
.nav li img{ width:100%; height:auto; display:block;}
.nav li span{ display:block; height:20px; text-align:center; background:#DDD; font:normal 12px/20px Arial;}

</style>