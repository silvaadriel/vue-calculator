<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" flat />
    <Button label="⟵" double flat />
    <Button label="/" operation />
    <Button label="9" />
    <Button label="8" />
    <Button label="7" />
    <Button label="*" operation />
    <Button label="6" />
    <Button label="5" />
    <Button label="4" />
    <Button label="-" operation />
    <Button label="3" />
    <Button label="2" />
    <Button label="1" />
    <Button label="+" operation />
    <Button label="0" double />
    <Button label="." flat />
    <Button label="=" operation />
  </div>
</template>

<script>
import Button from './Button.vue';
import Display from './Display.vue';

export default {
  name: 'Calculator',
  components: { Button, Display },
  data() {
    return {
      displayValue: '0',
    };
  },
};
</script>

<style lang="sass" scoped>
  .calculator
    display: grid
    grid-template: 1fr repeat(5, 48px) / repeat(4, 25%)
    padding: 2px
    height: 330px
    width: 263px
    background: #fff7
    border: 1px solid #0007
</style>
