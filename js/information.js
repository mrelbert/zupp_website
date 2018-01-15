// function for name.html

var addName = function(){
  var customerName = document.getElementById("name").value;
  localStorage.setItem("customerName", customerName);
  window.location.href = "attitude.html";
}

// functions for attitude.html

var addInformed = function(){
  var customerStyle = "informed";
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

var addCurious = function(){
  var customerStyle = "curious";
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

var addSkeptical = function(){
  var customerStyle = "skeptical";
  localStorage.setItem("customerStyle", customerStyle);
  window.location.href = "history.html";
}

// functions for history.html

var addLongTime = function(){
  var customerHistory = "long_time";
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "frequency.html";
}

var addOnOff = function(){
  var customerHistory = "on_off";
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "frequency.html";
}

var addNever = function(){
  var customerHistory = "never";
  localStorage.setItem("customerHistory", customerHistory);
  window.location.href = "gender.html";
}

// functions for frequency.html

var addNone = function(){
  var customerFrequency = "none";
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

var addOneToFour = function(){
  var customerFrequency = "one_to_four";
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

var addFivePlus = function(){
  var customerFrequency = "five_plus";
  localStorage.setItem("customerFrequency", customerFrequency);
  window.location.href = "gender.html";
}

// functions for gender.html

var addMale = function(){
  var customerGender = "male";
  console.log(customerGender);
  localStorage.setItem("customerGender", customerGender);
  window.location.href = "age.html";
}

var addFemale = function(){
  var customerGender = "female"
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
  var customerGoal = "general_health";
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addFatLoss = function(){
  var customerGoal = "fat_loss";
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addGainMass = function(){
  var customerGoal = "gain_mass";
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addAthleticPerformance = function(){
  var customerGoal = "athletic_performance";
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}

var addStrength = function(){
  var customerGoal = "strength";
  localStorage.setItem("customerGoal", customerGoal);
  window.location.href = "result.html"; // for now
}
