<template>
  <div class="hello">
    <Header></Header>
    <div id="allmap"></div>
  </div>
</template>

<script>

import Header from '../components/Header';

export default {
  name: 'HelloWorld',
  mounted(){
        var map = new BMap.Map("allmap");    // 创建Map实例

        var point = new BMap.Point(121.4980771846, 31.3844888221);
        map.centerAndZoom(point, 18);  // 初始化地图,设置中心点坐标和地图级别
        var marker = new BMap.Marker(point);  // 创建标注
        //添加地图类型控件
	    map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
        ]}));	 
        map.addOverlay(marker);               // 将标注添加到地图中
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    },
    components:{
        Header
    },
}
</script>

<style scoped>
    #allmap{margin:10px;height: 300px;margin-top: 65px;}
</style>