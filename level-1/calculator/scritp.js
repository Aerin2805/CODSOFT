
let op = document.getElementById("ipbx");
let ans = "";
let isError = false;

function display(num) {
  if (isError) {
    return; // If error occurred, do not append any input
  }
  ans += num;
  op.value = ans;
}

function Calculate() {
  try {
    op.value = eval(op.value);
  } catch (err) {
    op.value = "Invalid";
    isError = true;
  }
}

function Clear() {
  op.value = "";
  ans = "";
  isError = false;
}

function del() {
  if (isError) {
    return; // If error occurred, do not delete input
  }
  op.value = op.value.slice(0, -1);
  ans = op.value; // Update ans with the modified value
}

