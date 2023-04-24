function drawerNumber() {
const numberOne = parseInt(document.getElementById('numberOne').value);
  const numberTwo = parseInt(document.getElementById('secondNumber').value);
  const min = Math.min(numberOne, numberTwo);
  const max = Math.max(numberOne, numberTwo);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('content').textContent = result;
}
