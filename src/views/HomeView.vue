<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import headerPublic from '../components/haederPublic.vue'
</script>

<template>
  <main>
    <headerPublic title="123" name="abc" @changeName="changeMyName">this is solt</headerPublic>
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
      let msg = 'hello world';
      console.log(msg);
      let numA = 6;
      let munB = 12;
      let num = numA + munB;

      console.log('123', num)
    },
    changeMyName(data:any) {
      console.log('data', data);
    }
  }
}
</script>
