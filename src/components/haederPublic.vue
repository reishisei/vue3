<template>
  <div class="header">
    <!-- header -->
    <!-- <div class="top">top</div> -->
    <!-- <div>
      <p v-for="(value, key, index) in myObj" :key="value">{{ index + 1 }}. {{ key }}: {{ value }}</p>
    </div> -->
    <p>{{ title }}</p>
    <slot></slot>
    <p>chlid name: {{ myName }}</p>
    <button @click="changeName">changeName</button>
    <!-- <div>chlid get provide:  {{ message }}</div> -->
  </div>
</template>

<script lang="ts">
export default {
  inject: ['message'],
  props: ['title', 'name',],
  data() {
    return {
      myObj: {
        name: 'lizhi',
        age: 31,
        aa: '123',
        bb: 'ads',
        cc: 123
      },
    }
  },
  computed: {
    myName() {
      console.log('computed', this.name)
      return this.name;
    },
  },
  methods: {
    changeName() {
      console.log('chlid', this.myName)
      this.$emit('changeName', this.myName)
    }
  }
}
</script>

<style scoped>
.header {
  width: 1080px;
  .top {
    width: 100%
  }
}
</style>
