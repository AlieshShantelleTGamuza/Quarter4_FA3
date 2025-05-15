function generateShape() {
  const number = parseInt(document.getElementById('numberInput').value);
  const output = document.getElementById('output');

  if (!isNaN(number)) {
    let result = `Number inputted: ${number}\n`;
    if (number % 2 !== 0) {
      for (let i = number; i >= 1; i--) {
        result += Array(number).fill(i).join(' ') + '\n';
      }
    } else {
      for (let i = number; i >= 1; i--) {
        result += Array(i).fill(i).join(' ') + '\n';
      }
    }

    output.textContent = result;
  } else {
    alert('Please enter a valid number.');
  }
}