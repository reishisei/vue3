<script setup lang="ts">
  import headerPublic from '@/components/haederPublic.vue'
  import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="about">
    <h1>This is an test page</h1>
    <p>{{ name }}</p>
    <button @click="aa">button</button>
    <div :class="classObject">class Type</div>
    <RouterLink to="/setUpTest">setUpTest</RouterLink>
    <br>
    <br>
    <br>
    <br>
    <br>
    <headerPublic title="test" :name=myName @change-name="changeName" id="chlid">
        <div>
          组件1
          <p>组件变量之，myname: {{ myName }}</p>
        </div>
    </headerPublic>
    <!-- <headerPublic @change-name="changeName">
        <h2>
          组件2不要做一个插件
          <br>
          组件2要做一个大插件
        </h2>
    </headerPublic> -->
  </div>
</template>
<script lang="ts">
  export default {
    components: {
      headerPublic
    },
    data() {
      return {
        nameObj: ['lizhisheng','荔枝盛'],
        name: '',
        isActive: true,
        error: null,
        myName: 'lizhi'
      }
    },
    provide: {
      message: 'hello!'
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
      },
      changeName(val:any) {
        if(val === 'lizhi') {
          this.myName = '荔枝'
        } else {
          this.myName = 'lizhi'
        }
      },
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