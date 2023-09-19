import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function updata(event:any) {
      x.value = event.pageX;
      y.value = event.pageY;
    }

    onMounted(() => window.addEventListener('mousemove', updata));
    onUnmounted(() => window.removeEventListener('mousemove', updata))

    return {
      x, y
    }
}