import Operate from './operate';

const Calculated = (calculator, ButtonName) => {
  const calculus = calculator;
  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(ButtonName)) {
    const number = ButtonName;
    calculus.value += number;
  }
  if (['+', '-', '*', '/', '%'].includes(ButtonName) && calculator.value !== '') {
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
    calculus.operation = '';
    calculus.total = '0';
  }
  if (ButtonName === '=' && calculus.total !== '' && calculus.value !== '') {
    if (calculus.value === '0' && calculus.operation === '/') {
      calculus.total = '';
      calculus.value = '';
      calculus.operation = 'Error !!!';
    } else {
      calculus.total = Operate(calculus.total, calculus.value, calculus.operation);
      calculus.value = calculus.total;
      calculus.operation = '';
    }
  }

  return calculus;
};

export default Calculated;
