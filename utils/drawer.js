function drawerNumber() {
    let numberOne = document.getElementById('numberOne').value;
    let valueMin = parseInt(numberOne);
    let secondNumber = document.getElementById('secondNumber').value;
    let valueMax = parseInt(secondNumber);
    result = Math.floor((Math.random() * (valueMax-valueMin +1)) + valueMin);
    document.getElementById('content').innerHTML = result;
}
