/* eslint-disable radix */
/* eslint-disable import/extensions */
import { Big } from 'big.js';

const Operate = (nOne, nTwo, operation) => {
  const None = Big(nOne);
  const Ntwo = Big(nTwo);
  let Total = '';
  if (operation === '+') {
    Total = parseFloat(None) + parseFloat(Ntwo);
  }
  if (operation === '-') {
    Total = None - Ntwo;
  }
  if (operation === '/') {
    Total = None / Ntwo;
  }
  if (operation === '*') {
    Total = None * Ntwo;
  }
  if (operation === '%') {
    Total = None % Ntwo;
  }
  console.log(`Total: ${Total}`);
  return Total;
};

export default Operate;
