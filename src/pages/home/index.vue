<script setup lang="ts">
import { useCountState, storeToRefs } from '@stores';

const countState = useCountState();
const { count, doubleCount } = storeToRefs(countState);
</script>

<template>
  <main>
    <img src="@assets/images/logo.png" />
    <h1 id="count">count is {{ count }}</h1>
    <h2 id="double_count">double count is {{ doubleCount }}</h2>
    <div class="btn-group">
      <button id="inc_btn" @click="countState.increment">inc</button>
      <button id="dec_btn" @click="countState.reduce">dec</button>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeComponent',
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
