<script setup lang="ts">
import {useCountState, storeToRefs} from '@stores';
import {DemoButton} from '@components';

defineOptions({
  name: 'HomeComponent',
});

const countState = useCountState();
const {count, doubleCount} = storeToRefs(countState);
</script>

<template>
  <main>
    <img src="@assets/images/logo.png" />
    <h1 id="count">count is {{count}}</h1>
    <h2 id="double_count">double count is {{doubleCount}}</h2>
    <div class="btn-group">
      <DemoButton id="inc_btn" @click="countState.increment">inc</DemoButton>
      <DemoButton id="dec_btn" @click="countState.reduce">dec</DemoButton>
    </div>
  </main>
</template>

<style scoped>
@import './index.css';
</style>
