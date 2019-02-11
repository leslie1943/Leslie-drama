<template>
  <d2-container>
    <template slot="header"></template>
    <div class="drama-person-container"></div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
export default {
  name: 'photos',
  data () {
    return {
      photos: {}
    }
  }
}
</script>
