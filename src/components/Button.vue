<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String
    }
  }
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

    &.operation
      font-weight: normal
      background: #fff9

    &.operation:active
      background: #fff5
</style>

