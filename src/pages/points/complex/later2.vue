<template>
  <div>
    <div class="box-later-2">{{'父组件在子组件使用v-model,子组件使用value接收父组件的传参'}}</div>
    <div class="box-later-2">{{value}}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data: function () {
    return {};
  },
  components: {},
  created: function () {
  },
  mounted: function () {
  },
  computed: {},
  methods: {},
}
</script>
<style>
.box-later-2 {
  /* 居中 */
  width: calc(20vw - 0px);
  height: calc(20vh - 0px);
  background: rgb(77, 82, 119);
  margin: 5px;
  padding: 20px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
