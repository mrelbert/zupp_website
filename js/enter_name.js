$(document).on("keydown", function(e){
  var keyCode = e.which || e.keyCode;
  if(keyCode == 13){
    var customerName = document.getElementById("name").value;
    if(/^[A-Z ]+$/i.test(customerName) && customerName.length >= 2){
      localStorage.setItem("customerName", customerName);
      event.preventDefault();
      window.location.href = "attitude.html";
    } else {
      console.log(customerName + " is invalid");
    }
  }
})
