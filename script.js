function compute() {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const result = (amount * rate * years) / 100;

  const currentYear = new Date().getFullYear();
  const endYear = parseInt(currentYear) + parseInt(years);

  let display = "<p>If you deposit " + amount + ".</p>";
  display += "<p>at an interest rate of " + rate + "%.</p>";
  display += "<p>You will receive an amount of " + result + ",</p>";
  display += "<p>in the year" + endYear + "</p>";

  document.getElementById("result").innerHTML = display;
  return false;
}

function updateRange(val) {
  document.getElementById("textRate").innerHTML = val + "%";
}
