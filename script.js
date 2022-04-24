

function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        // non valid number
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else{
      // valid number
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal * years * rate / 100;
      var year = new Date().getFullYear() + parseInt(years);
      p = document.getElementById("principal").value;
      var high ="<span style = 'background-color: yellow;'>";
      var unhigh = "<span style = 'background-color: white;'>";
      // high to highlight the number
      // unhigh to unhignlight the rest content
      document.getElementById("result").innerHTML =
      "<br>If you deposit " + high + principal
      + unhigh + ",<br>" + "at an interest rate of " + high + rate + "%"
      + unhigh +".<br>" + "You will receive an amount of " + high + interest
      + unhigh + ",<br>" + "in the year " + high +year;
    }


}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
