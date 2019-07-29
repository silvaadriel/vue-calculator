<template>
  <div id="app">
    <h1>Vue Calculator</h1>
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
  @import './sass/variables.sass'

  #app
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    background: $bg-gradient

  h1
    color: #fff7
    font-size: 3em
    margin-right: 80px

  @media (max-width: 720px)
    #app
      flex-direction: column

    h1
      margin: 0 0 40px 0
      font-size: 2.5em

</style>
