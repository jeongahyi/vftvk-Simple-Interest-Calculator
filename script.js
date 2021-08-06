function compute() {
  const principal = document.getElementById("principal").value;
  if (principal == "" || principal < 1) {
    alert("enter a positive number :)");
  }
  console.log(principal);
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const result = (principal * rate * years) / 100;
  const currentYear = new Date().getFullYear();
  const endYear = parseInt(currentYear) + parseInt(years);

  let display = "<p>If you deposit <span>" + principal + "</span>.</p>";
  display += "<p>at an interest rate of <span>" + rate + "</span>%.</p>";
  display +=
    "<p>You will receive an amount of <span>" + result + "</span>,</p>";
  display += "<p>in the year <span>" + endYear + "</span></p>";

  document.getElementById("result").innerHTML = display;
  return false;
}

function updateRange(val) {
  document.getElementById("textRate").innerHTML = val + "%";
}
