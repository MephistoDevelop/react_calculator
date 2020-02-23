const Calculated = (calculator, ButtonName) => {
  console.log('Inside method');
  if (ButtonName === '+/-') {
    console.log('+/- Pressed');
  }
  return 'Called';
};

export default Calculated;
