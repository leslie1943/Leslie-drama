<template>
  <d2-container>
    <template slot="header"></template>

    <!-- <doc-preview>
      <baidu-map class="map" style="display: flex; flex-direction: column" center="北京">
        <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
        <bm-view style="width: 100%; height:600px; flex: 1"></bm-view>
      </baidu-map>
    </doc-preview>-->
    <label>
      关键词：
      <input v-model="keyword">
    </label>
    <label>
      地区：
      <input v-model="location">
    </label>
    <baidu-map
      class="map"
      :center="{lng: 116.404, lat: 39.915}"
      :zoom="15"
      :scroll-wheel-zoom="true"
    >
      <bm-view style="width: 100%; height:700px; flex: 1"></bm-view>
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-copyright
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]"
      ></bm-copyright>
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      <bm-panorama anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-panorama>
    </baidu-map>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'maps',
  data () {
    return {
      location: '大连',
      keyword: ''
    }
  },
  methods: {
  }

}
</script>
<style lang="scss">
</style>
