$(document).on("keydown", function(e){
  var keyCode = e.which || e.keyCode;
  if(keyCode == 13){
    var customerEmail = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(customerEmail)){
      localStorage.setItem("customerEmail", customerEmail);
      event.preventDefault();
      window.location.href = "result.html";
   } else {
     alert("You have entered an invalid email address!");
   }
  }
})
