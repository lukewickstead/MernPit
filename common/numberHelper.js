export function roundToDp(value, dps) {
  return Number(value.toFixed(dps));
}

export function isNumber(input) {
  if (input === '') {
    return true;
  }

  const re = /^[0-9,\b]+$/;
  return re.test(input);
}
