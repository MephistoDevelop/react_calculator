import Operate from './operate';

const Calculated = (calculator, ButtonName) => {
  const calculus = calculator;
  console.log('Inside method');
  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(ButtonName)) {
    console.log(calculus.value);
    const number = ButtonName;
    calculus.value += number;
  }
  if (['+', '-', '*', '/'].includes(ButtonName)) {
    calculus.operation = ButtonName;
  }
  if (ButtonName === '+/-' && calculus.value !== '') {
    calculus.value = (parseFloat(calculus.value) * -1).toString();
  }
  if (ButtonName === '.' && !calculus.value.includes('.')) {
    calculus.value += ButtonName;
  }
  console.log(`im Calculus: ${JSON.stringify(calculator)}`);
  return calculus;
};

export default Calculated;
