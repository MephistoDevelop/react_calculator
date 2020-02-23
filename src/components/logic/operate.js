/* eslint-disable radix */
/* eslint-disable import/extensions */
import { Big } from 'big.js';

const Operate = (nOne, nTwo, operation) => {
  let Total = '';
  if (operation === '+') {
    Total = Big(parseFloat(nOne) + parseFloat(nTwo));
  }
  if (operation === '-') {
    Total = Big(parseFloat(nOne) - parseFloat(nTwo));
  }
  if (operation === '/') {
    Total = Big(parseFloat(nOne) / parseFloat(nTwo));
  }
  if (operation === '*') {
    Total = Big(parseFloat(nOne) * parseFloat(nTwo));
  }
  if (operation === '%') {
    Total = Big(parseFloat(nOne) % parseFloat(nOne));
  }
  return Total;
};

export default Operate;
