import Operate from './operate';

const Calculated = (calculator, ButtonName) => {
  const calculus = calculator;
  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(ButtonName)) {
    const number = ButtonName;
    calculus.value += number;
  }
  if (['+', '-', '*', '/', '%'].includes(ButtonName)) {
    calculus.total = calculus.value;
    calculus.operation = ButtonName;
    calculus.value = '';
  }
  if (ButtonName === '+/-' && calculus.value !== '') {
    calculus.value = (parseFloat(calculus.value) * -1).toString();
  }
  if (ButtonName === '.' && !calculus.value.includes('.')) {
    calculus.value += ButtonName;
  }
  if (ButtonName === 'AC') {
    calculus.value = '';
    calculus.total = '0';
    calculus.operation = '';
  }
  if (ButtonName === '=' && calculus.total !== '' && calculus.value !== '') {
    calculus.total = Operate(calculus.total, calculus.value, calculus.operation);
    calculus.value = '';
    calculus.operation = '';
  }
  return calculus;
};

export default Calculated;
