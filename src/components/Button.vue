<template>
  <button class="button" :class="{ operation, double, flat }">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
    },
    operation: { type: Boolean },
    double: { type: Boolean },
    flat: { type: Boolean },
  },
};
</script>

<style lang="sass" scoped>
  .button
    border: none
    outline: none
    background: white
    font-size: 1.4em
    color: black
    font-weight: bold
    margin: 1px

    &:active
      background: #fff5

    &.flat
      font-weight: normal
      background: #fff9

    &.flat:active
      background: #fff5

    &.operation
      font-weight: normal
      background: #fff9

    &.operation:active
      background: #1483DA
      color: white

    &.double
      grid-column: span 2
</style>
