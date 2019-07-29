<template>
  <div class="display">{{ value }}</div>
</template>

<script>
export default {
  name: 'Display',
  props: {
    value: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style lang="sass" scoped>
  .display
    grid-column: span 4
    display: flex
    justify-content: flex-end
    align-items: center
    padding: 20px
    font-size: 2.2em
</style>
