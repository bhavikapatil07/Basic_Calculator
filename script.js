function addInput(value) {
    document.getElementById('display').value += value;
  }
  
  function clearInput() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var input = document.getElementById('display').value;
    var result = eval(input);
    document.getElementById('display').value = result;
  }
  