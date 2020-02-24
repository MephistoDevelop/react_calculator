/* eslint-disable radix */
/* eslint-disable import/extensions */
import { Big } from 'big.js';

const Operate = (nOne, nTwo, operation) => {
  let Total = '';
  const None = Big(nOne);
  const Ntwo = Big(nTwo);
  if (operation === '+') {
    Total = None.plus(Ntwo);
  }
  if (operation === '-') {
    Total = None.minus(Ntwo);
  }
  if (operation === '/') {
    Total = None.div(Ntwo);
  }
  if (operation === '*') {
    Total = None.times(Ntwo);
  }
  if (operation === '%') {
    Total = None.mod(Ntwo);
  }
  return Total;
};

export default Operate;
