<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button @onClick="clearMemory" label="AC" flat />
    <Button @onClick="backspace" label="⟵" double flat />
    <Button @onClick="setOperation" label="/" operation />
    <Button @onClick="addDigit" label="9" />
    <Button @onClick="addDigit" label="8" />
    <Button @onClick="addDigit" label="7" />
    <Button @onClick="setOperation" label="*" operation />
    <Button @onClick="addDigit" label="6" />
    <Button @onClick="addDigit" label="5" />
    <Button @onClick="addDigit" label="4" />
    <Button @onClick="setOperation" label="-" operation />
    <Button @onClick="addDigit" label="3" />
    <Button @onClick="addDigit" label="2" />
    <Button @onClick="addDigit" label="1" />
    <Button @onClick="setOperation" label="+" operation />
    <Button @onClick="addDigit" label="0" double />
    <Button @onClick="addDigit" label="." flat />
    <Button @onClick="setOperation" label="=" operation />
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
      clearDisplay: false,
      valuesToCalculate: [0, 0],
      operation: null,
      currentIndex: 0,
    };
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    backspace() {
      const newDisplayValue = this.displayValue.substr(0, this.displayValue.length - 1);
      this.displayValue = newDisplayValue === '' ? '0' : newDisplayValue;
      this.valuesToCalculate[this.currentIndex] = this.displayValue;
    },
    setOperation(operation) {
      if (this.currentIndex === 0) {
        this.operation = operation;
        this.currentIndex = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === '=';
        const currentOperation = this.operation;

        try {
          this.valuesToCalculate[0] = eval(
            `${this.valuesToCalculate[0]} ${currentOperation} ${this.valuesToCalculate[1]}`,
          );
        } catch (e) {
          this.$emit('onError', e);
        }

        this.valuesToCalculate[1] = 0;

        this.displayValue = this.valuesToCalculate[0].toString();
        this.operation = equals ? null : operation;
        this.currentIndex = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(digit) {
      if (digit === '.' && this.displayValue.includes('.')) return;

      const clearDisplay = this.displayValue === '0' || this.clearDisplay;

      const currentDisplayValue = clearDisplay ? '' : this.displayValue;

      const newDisplayValue = currentDisplayValue + digit;

      this.displayValue = newDisplayValue;
      this.clearDisplay = false;

      this.valuesToCalculate[this.currentIndex] = newDisplayValue;
    },
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
    overflow: hidden
</style>
