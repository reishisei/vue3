<template>
    <div class="about">
        about
        <div>{{ name }}</div>
        <h5>count: {{ count }}</h5>
        <button @click="showMsg('msg')">button</button>
        Mouse position is at: {{ x }}, {{ y }}
        <br>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted, watch, computed } from 'vue';
    import { useMouse } from './ts/mouse'
    const name = 'hello';
    const { x, y } = useMouse();
    onMounted(() => {
        console.log('onMounted');
    });
    let count = ref(0);
    setInterval(() => {
        count.value++;
    }, 1000);
    function showMsg(msg:any) {
        console.log('show', msg)
    }
</script>
<style lang="scss">

</style>