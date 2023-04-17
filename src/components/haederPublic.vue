<template>
  <div class="header">
    header
    <div class="top">top</div>
    <div>
      <p v-for="(value, key, index) in myObj" :key="value">{{ index + 1 }}. {{ key }}: {{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      myObj: {
        name: 'lizhi',
        age: 31,
        aa: '123',
        bb: 'ads',
        cc: 123
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 1080px;
  .top {
    width: 100%
  }
}
</style>
