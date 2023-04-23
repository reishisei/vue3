<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import headerPublic from '../components/haederPublic.vue'
import { useRouter, useRoute } from "vue-router"
</script>

<template>
  <main>
    <headerPublic />
    <TheWelcome />
    <a href="/test">gotest</a>
    <button @click="goTest">button</button>
    <a href="/setUpTest">setUpTest</a>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {

    }
  },
  methods: {
    goTest() {
      console.log('123')
    }
  }
}
</script>
