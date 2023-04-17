<script setup lang="ts">
import headerPublic from '@/components/haederPublic.vue'
</script>
<template>
  <div class="about">
    <headerPublic></headerPublic>
    <h1>This is an test page</h1>
    <p>{{ name }}</p>
    <button @click="aa">button</button>
    <div :class="classObject">class Type</div>
  </div>
</template>
<script lang="ts">
  export default {
    data() {
      return {
        nameObj: ['lizhisheng','荔枝盛'],
        name: '',
        isActive: true,
        error: null,
      }
    },
    computed: {
      classObject() {
        return {
          active: this.isActive && !this.error,
          'text-danger': true
        }
      }
    },
    mounted() {
      this.name = this.nameObj[0];
      console.log('2131');
    },
    methods: {
      aa() {
        this.name === this.nameObj[0] ? this.name = this.nameObj[1] : this.name = this.nameObj[0]
      }
    }
  }
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>