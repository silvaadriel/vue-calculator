<template>
  <button @click="$emit('onClick', label)"
    class="button" :class="{ operation, double, flat }">
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
  @import '../sass/variables.sass'

  .button
    border: none
    outline: none
    background: white
    font-size: 1.4em
    color: black
    font-weight: bold
    margin: 1px

    &:active
      background: $color-white-five

    &.flat
      font-weight: normal
      background: $color-white-nine

    &.flat:active
      background: $color-white-five

    &.operation
      font-weight: normal
      background: $color-white-nine

    &.operation:active
      background: $color-blue
      color: white

    &.double
      grid-column: span 2
</style>
