import {defineStore} from 'pinia';

type CountState = {
  count: number;
};

type CountGetters = {
  doubleCount: () => void;
};

type CountAction = {
  increment: () => void;
  reduce: () => void;
};

export const useCountState = defineStore<
string,
CountState,
CountGetters,
CountAction
>('count', {
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count
        = process.env.IS_E2E === 'true' ? this.count + 2 : this.count + 1;
    },
    reduce() {
      this.count
        = process.env.IS_E2E === 'true' ? this.count - 2 : this.count - 1;
    },
  },
});
