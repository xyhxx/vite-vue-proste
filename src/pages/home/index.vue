<script setup lang="ts">
import {useCountState, storeToRefs} from '@stores';

defineOptions({
  name: 'Home',
});

const countState = useCountState();
const {count} = storeToRefs(countState);
</script>

<template>
  <main>
    <img src='@assets/images/logo.png' class='icon' />
    <h1 id='count' :class='["title", "name", {"title-red": count > 5}]'>
      count is {{count}}
    </h1>
    <div class='btn-group'>
      <button id='inc_btn' @click='countState.increment'>inc</button>
      <button id='dec_btn' @click='countState.reduce'>dec</button>
    </div>
  </main>
</template>

<style scoped>
@import './index.css';
</style>
