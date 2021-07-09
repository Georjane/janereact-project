import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operds = ['+', '-', 'x', '÷'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === '+/-') {
    if (total !== null && operation === null && next === null) {
      total = (total * -1).toString();
    } else if (total !== null && operation !== null && next !== null) {
      next = (next * -1).toString();
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '%') {
    total = (total / 100).toString();
  }

  if (buttonName === '.' && !(total.includes('.')) && total !== null && next === null) {
    total += buttonName;
  } else if (buttonName === '.' && operation !== null && !(next.includes('.')) && total !== null && next !== null) {
    next += buttonName;
  } else if (digits.includes(buttonName) && operation === null && total === null && next === null) {
    total = buttonName;
  } else if (digits.includes(buttonName) && operation === null && total !== null && next === null) {
    total += buttonName;
  } else if (digits.includes(buttonName) && operation !== null && total !== null && next === null) {
    next = buttonName;
  } else if (digits.includes(buttonName) && operation !== null && total !== null && next !== null) {
    next += buttonName;
  } else if (operds.includes(buttonName) && operation === null && total !== null && next === null) {
    operation = buttonName;
  } else if (buttonName === '=' && operation !== null && total !== null && next !== null) {
    total = operate(total, next, operation);
    operation = null;
    next = null;
  }
  return { total, next, operation };
};
export default calculate;
