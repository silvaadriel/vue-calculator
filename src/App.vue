<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';

export default {
  components: {
    Calculator,
  },
};
</script>

<style lang="sass" scoped>
  #app
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    background: linear-gradient(120deg, #3FB37F, #33475B )
</style>
