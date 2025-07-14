import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

// const locale = 'en-US';
// export function fCurrency(number) {
//   const currency = new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: process.env.CURRENCY
//   }); // this code is author code

const locale = 'en-US';

export function fCurrency(number) {
  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: process.env.NEXT_PUBLIC_CURRENCY || 'USD'
  });

  return currency.format(number);
}

export function fPercent(number) {
  return `${(number / 100).toFixed(1)}%`;
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}
