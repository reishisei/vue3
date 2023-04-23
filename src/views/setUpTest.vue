<template>
  <div class="about">
    about
    <div>{{ name }}</div>
    <h5>count: {{ count }}</h5>
    <button @click="showMsg('msg')">button</button>
      Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>
<script lang="ts">
  import { ref, onMounted, watch, computed } from 'vue';
  import { useMouse } from './ts/mouse'
  export default {
    setup(msg) {
      const name = 'hello'
      const { x, y } = useMouse();
      onMounted(() => {
        console.log('onMounted')
      })
      console.log(msg)
      let count = ref(0);
      setInterval(() => {
        count.value++
      }, 1000)
      // watch(count, (newValue, oldValue) => {
      //   console.log('new', newValue);
      //   console.log('old', oldValue);
      // })
      let count2 = computed(()=>count.value * 2)
      return {
        name: '123',
        count: count2,
        x,
        y
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    methods: {
      showMsg(msg:any) {
        console.log('show', msg)
      }
    }
  }
</script>
<style lang="scss">

</style>