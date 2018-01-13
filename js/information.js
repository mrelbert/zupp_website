// function for name.html

var addName = function(){
  var customerName = document.getElementById("name").value;
  localStorage.setItem("customerName", customerName);
  window.location.href = "attitude.html";
}

// functions for attitude.html

var addInformed = function(){
  var customerStyle = document.getElementById("informed").value;
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

var addCurious = function(){
  var customerStyle = document.getElementById("curious").value;
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

var addSkeptical = function(){
  var customerStyle = document.getElementById("skeptical").value;
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

// functions for history.html

var addLongTime = function(){
  var customerHistory = document.getElementById("long_time").value;
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "frequency.html";
}

var addOnOff = function(){
  var customerHistory = document.getElementById("on_off").value;
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "frequency.html";
}

var addNever = function(){
  var customerHistory = document.getElementById("never").value;
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "gender.html";
}

// functions for frequency.html

var addNone = function(){
  var customerFrequency = document.getElementById("none").value;
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

var addOneToFour = function(){
  var customerFrequency = document.getElementById("one_to_four").value;
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

var addFivePlus = function(){
  var customerFrequency = document.getElementById("five_plus").value;
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

// functions for gender.html

var addMale = function(){
  var customerGender = document.getElementById("male").value;
  localStorage.setItem("customerGender", customerGender);
  window.location.href = "age.html";
}

var addFemale = function(){
  var customerGender = document.getElementById("female").value;
  localStorage.setItem("customerGender", customerGender);
  window.location.href = "age.html";
}

// function for age.html

var addAge = function(){
  var customerAge = document.getElementById("age").value;
  localStorage.setItem("customerAge", customerAge);
  window.location.href = "goal.html";
}

//

var addGeneralHealth = function(){
  var customerGoal = document.getElementById("general_health").value;
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addFatLoss = function(){
  var customerGoal = document.getElementById("fat_loss").value;
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addGainMass = function(){
  var customerGoal = document.getElementById("gain_mass").value;
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addAthleticPerformance = function(){
  var customerGoal = document.getElementById("athletic_performance").value;
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addStrength = function(){
  var customerGoal = document.getElementById("strength").value;
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}
