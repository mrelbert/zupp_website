$(document).on("keydown", function(e){
  var keyCode = e.which || e.keyCode;
  if(keyCode == 13){
    var customerAge = document.getElementById("age").value;
    var age = Number(customerAge);
    if(/^\d+$/.test(customerAge) && (age > 0 && age < 100)){
      localStorage.setItem("customerAge", customerAge);
      event.preventDefault();
      window.location.href = "current_state.html";
    } else {
      alert("You have entered an invalid age!")
      event.preventDefault();
    }
  }
})
