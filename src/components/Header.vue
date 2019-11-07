<template>
    <div class="header">
        <div class="lanm">
            <h1>{{headdetail}}</h1>
                <span id="lm"></span>
                <div class="submenu"><a href="#">公司新闻</a><a href="#">汽车保养</a><a href="#">行业动态</a></div>
            </div>
        <div class="zhezhao2"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:mapState(['headdetail'])
}
</script>

<style scoped>
    /*内页顶部*/
.lanm{ position:fixed; width:100%; height:45px; left:0; top:0; z-index:998; background:#333; display:box; display:-webkit-box; display:-moz-box;}
.lanm span{ width:40px; height:100%; display:block;}
.lanm h1{ display:block; color:#FFF; box-flex:1.0; -webkit-box-flex:1.0; -moz-box-flex:1.0; line-height:45px; text-align:center; font-size:18px; font-weight:bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
#back{ border-right:1px solid #444; background:#383838;}
/* #back a{ display:block; height:100%; background:url(../assets/images/back.png) no-repeat center; background-size:10px auto} */
/* #lm{ border-left:1px solid #444; height:100%; background: #383838 url(../assets/images/lm.png) no-repeat center; background-size:auto 15px; -webkit-background-size:auto 15px; -moz-background-size:auto 15px; -o-background-size:auto 15px;} */
.lanm .submenu{ position:absolute; width:100%; left:0; top:45px; background:#FFF; display:none;}
/* .lanm .submenu a{ display:block; height:40px; line-height:40px; border-bottom:1px solid #E8E8E8; margin:0 10px; background:url(../assets/images/arr.png) no-repeat right center;background-size:auto 12px;} */
.lanm .submenu a:last-child{ border:none;}
.zhezhao2{width:100%;height:100%;background-color:rgba(0,0,0,0.3);position:fixed;left:0;top:0;z-index:990;display:none}

</style>