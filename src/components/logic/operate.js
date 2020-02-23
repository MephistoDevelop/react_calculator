/* eslint-disable radix */
import { Big } from 'big.js';

const Operate = (nOne, nTwo, operation) => {
  let Total = '';
  if (operation === '+') {
    Total = Big(parseInt(nOne) + parseInt(nTwo));
  }
  if (operation === '-') {
    Total = Big(parseInt(nOne) - parseInt(nTwo));
  }
  if (operation === '/') {
    Total = Big(parseInt(nOne) / parseInt(nTwo));
  }
  if (operation === '*') {
    Total = Big(parseInt(nOne) * parseInt(nTwo));
  }
  if (operation === '%') {
    Total = Big(parseInt(nOne) % parseInt(nOne));
  }
  return Total;
};

export default Operate;
