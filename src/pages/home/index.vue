<script setup lang="ts">
import { useCountState, storeToRefs } from '@stores';

const countState = useCountState();
const { count, doubleCount } = storeToRefs(countState);
</script>

<template>
  <main>
    <img src="@assets/images/logo.png" />
    <p id="count">count is {{ count }}</p>
    <p id="double_count">double count is {{ doubleCount }}</p>
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
