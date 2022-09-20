// ..................clear screen..............

function clr() {
  document.getElementById('result').value = '';
}

// ...................inputValue.......................

function dis(val) {
  document.getElementById('result').value += val;
}

// .....................Calculate Values.,,,,,,,,,,,,,,,,,,,,,,,,

solve = () => {
  let p = document.getElementById('result').value;
  let q = eval(p);
  document.getElementById('result').value = q;
};
