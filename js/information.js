// function for name.html

var addName = function(){
  var customerName = document.getElementById("name").value;
  localStorage.setItem("customerName", customerName);
  window.location.href = "attitude.html";
}

// functions for attitude.html

var addInformed = function(){
  var customerAttitude = "informed";
  localStorage.setItem("customerAttitude", customerAttitude);
  window.location.href = "history.html";
}

var addCurious = function(){
  var customerAttitude = "curious";
  localStorage.setItem("customerAttitude", customerAttitude);
  window.location.href = "history.html";
}

var addSkeptical = function(){
  var customerAttitude = "skeptical";
  localStorage.setItem("customerAttitude", customerAttitude);
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
  window.location.href = "current_state.html";
}

// functions for goal.html

var reset_goals = function(){
  var goal_general_health = null;
  localStorage.setItem("goal_general_health", goal_general_health);
  var goal_fat_loss = null;
  localStorage.setItem("goal_fat_loss", goal_fat_loss);
  var goal_gain_mass = null;
  localStorage.setItem("goal_gain_mass", goal_gain_mass);
  var goal_athletic_performance = null;
  localStorage.setItem("goal_athletic_performance", goal_athletic_performance);
  var goal_strength = null;
  localStorage.setItem("goal_strength", goal_strength);
}

var addGeneralHealth = function(){

  if (document.getElementById("general_health").classList.contains('highlight')){
    var general_health = document.getElementById("general_health");
    general_health.className = "col ";
    general_health.className += "goalBubble";

    var goal_general_health = null;
    localStorage.setItem("goal_general_health", goal_general_health);
  } else {
    var general_health = document.getElementById("general_health");
    general_health.className = "col ";
    general_health.className += "highlight";

    var goal_general_health = "general_health";
    localStorage.setItem("goal_general_health", goal_general_health);
  }
}

var addFatLoss = function(){

  if (document.getElementById("fat_loss").classList.contains('highlight')){
    var fat_loss = document.getElementById("fat_loss");
    fat_loss.className = "col ";
    fat_loss.className += "goalBubble";

    var goal_fat_loss = null;
    localStorage.setItem("goal_fat_loss", goal_fat_loss);
  } else {
    var fat_loss = document.getElementById("fat_loss");
    fat_loss.className = "col ";
    fat_loss.className += "highlight";

    var goal_fat_loss = "fat_loss";
    localStorage.setItem("goal_fat_loss", goal_fat_loss);
  }
}

var addGainMass = function(){
  if (document.getElementById("gain_mass").classList.contains('highlight')){
    var gain_mass = document.getElementById("gain_mass");
    gain_mass.className = "col ";
    gain_mass.className += "goalBubble";

    var goal_gain_mass = null;
    localStorage.setItem("goal_gain_mass", goal_gain_mass);
  } else {
    var gain_mass = document.getElementById("gain_mass");
    gain_mass.className = "col ";
    gain_mass.className += "highlight";

    var goal_gain_mass = "gain_mass";
    localStorage.setItem("goal_gain_mass", goal_gain_mass);
  }
}

var addAthleticPerformance = function(){

  // var athletic_performance = document.getElementById("athletic_performance");
  // athletic_performance.className = "col ";
  // athletic_performance.className += "highlight";
  //
  // var goal_athletic_performance = "athletic_performance";
  // localStorage.setItem("goal_athletic_performance", goal_athletic_performance);

  if (document.getElementById("athletic_performance").classList.contains('highlight')){
    var athletic_performance = document.getElementById("athletic_performance");
    athletic_performance.className = "col ";
    athletic_performance.className += "goalBubble";

    var goal_athletic_performance = null;
    localStorage.setItem("goal_athletic_performance", goal_athletic_performance);
  } else {
    var athletic_performance = document.getElementById("athletic_performance");
    athletic_performance.className = "col ";
    athletic_performance.className += "highlight";

    var goal_athletic_performance = "athletic_performance";
    localStorage.setItem("goal_athletic_performance", goal_athletic_performance);
  }
}

var addStrength = function(){

  if (document.getElementById("strength").classList.contains('highlight')){
    var strength = document.getElementById("strength");
    strength.className = "col ";
    strength.className += "goalBubble";

    var goal_strength = null;
    localStorage.setItem("goal_strength", goal_strength);
  } else {
    var strength = document.getElementById("strength");
    strength.className = "col ";
    strength.className += "highlight";

    var goal_strength = "strength";
    localStorage.setItem("goal_strength", goal_strength);
  }
}

var addOptions = function(){

  var customer_goal_general_health = localStorage.getItem("goal_general_health");
  var customer_goal_gain_mass = localStorage.getItem("goal_gain_mass");
  var customer_goal_athletic_performance = localStorage.getItem("goal_athletic_performance");
  console.log(customer_goal_athletic_performance);

  if(customer_goal_general_health == "general_health"){
    window.location.href = "multivitamin.html";
  } else if(customer_goal_gain_mass == "gain_mass"){
    window.location.href = "weight.html";
  } else if(customer_goal_athletic_performance == "athletic_performance"){
    window.location.href = "sport.html";
  } else {
    window.location.href = "sleep.html";
  }

}

// functions for current.html

var addBeginner = function(){
  var customerCurrent = "beginner";
  localStorage.setItem("customerCurrent", customerCurrent);
  window.location.href = "goal.html";
}

var addIntermediate = function(){
  var customerCurrent = "intermediate";
  localStorage.setItem("customerCurrent", customerCurrent);
  window.location.href = "experience.html";
}

var addAdvanced = function(){
  var customerCurrent = "advanced";
  localStorage.setItem("customerCurrent", customerCurrent);
  window.location.href = "experience.html";
}

// functions for experience.html

var addJustStarting = function(){
  var customerExperience = "just_starting";
  localStorage.setItem("customerExperience", customerExperience);
  window.location.href = "goal.html";
}

var addInterm = function(){
  var customerExperience = "interm";
  localStorage.setItem("customerExperience", customerExperience);
  window.location.href = "goal.html";
}

var addExperienced = function(){
  var customerExperience = "experienced";
  localStorage.setItem("customerExperience", customerExperience);
  window.location.href = "goal.html";
}

// functions for multivitamin.html

var addYesVitamin = function(){

   var customerVitamins = "yes_vitamins";
   localStorage.setItem("customerVitamins", customerVitamins);

   var gain_mass = localStorage.getItem("goal_gain_mass");
   var athletic_performance = localStorage.getItem("goal_athletic_performance");

   if(gain_mass == "gain_mass"){
     // gain_mass = null;
     // localStorage.setItem("goal_gain_mass", gain_mass);
     window.location.href = "weight.html";
   } else if(athletic_performance == "athletic_performance"){
     window.location.href = "sport.html";
   } else {
     window.location.href = "sleep.html";
   }

}

var addNoVitamin = function(){

  var customerVitamins = "no_vitamins";
  localStorage.setItem("customerVitamins", customerVitamins);

  var gain_mass = localStorage.getItem("goal_gain_mass");
  var athletic_performance = localStorage.getItem("goal_athletic_performance");

  if(gain_mass == "gain_mass"){
    // gain_mass = null;
    // localStorage.setItem("goal_gain_mass", gain_mass);
    window.location.href = "weight.html";
  } else if(athletic_performance == "athletic_performance"){
    window.location.href = "sport.html";
  } else {
    window.location.href = "sleep.html";
  }

}

// functions for weight.html

var addMoreSizeUrgent = function(){

  var customer_goal_athletic_performance = localStorage.getItem("goal_athletic_performance");
  console.log("Athletic performance: " + customer_goal_athletic_performance);

  var customerGainMass = "pack_size_fast";
  localStorage.setItem("customerGainMass", customerGainMass);

  var athletic_performance = localStorage.getItem("goal_athletic_performance");
  if(athletic_performance == "athletic_performance"){
    window.location.href = "sport.html";
  } else {
    window.location.href = "sleep.html";
  }
}

var addMoreSizeSlowly = function(){

  var customer_goal_athletic_performance = localStorage.getItem("goal_athletic_performance");
  console.log("Athletic performance: " + customer_goal_athletic_performance);

  var customerGainMass = "pack_size_slowly";
  localStorage.setItem("customerGainMass", customerGainMass);

  var athletic_performance = localStorage.getItem("goal_athletic_performance");
  if(athletic_performance == "athletic_performance"){
    window.location.href = "sport.html";
  } else {
    window.location.href = "sleep.html";
  }

}

// functions for sport.html

var addSportEndurance = function(){
  var customerSportStyle = "sport_endurance";
  localStorage.setItem("customerSportStyle", customerSportStyle);
  window.location.href = "sleep.html";
}

var addSportPower = function(){
  var customerSportStyle = "sport_power";
  localStorage.setItem("customerSportStyle", customerSportStyle);
  window.location.href = "sleep.html";
}

var addSportStrength = function(){
  var customerSportStyle = "sport_strength";
  localStorage.setItem("customerSportStyle", customerSportStyle);
  window.location.href = "sleep.html";
}

// functions for sleep.html

var addSleepPlenty = function(){
  var customerSleep = "plenty";
  localStorage.setItem("customerSleep", customerSleep);
  window.location.href = "energy.html";
}

var addSleepIssue = function(){
  var customerSleep = "issue";
  localStorage.setItem("customerSleep", customerSleep);
  window.location.href = "energy.html";

}

var addSleepUpDown = function(){
  var customerSleep = "updown";
  localStorage.setItem("customerSleep", customerSleep);
  window.location.href = "energy.html";
}

// functions for energy.html

var addEnergyNotNeeded = function(){
  var customerEnergy = "energy_not_needed";
  localStorage.setItem("customerEnergy", customerEnergy);
  window.location.href = "recovery.html";
}

var addEnergyNeeded = function(){
  var customerEnergy = "energy_needed";
  localStorage.setItem("customerEnergy", customerEnergy);
  window.location.href = "recovery.html";
}

// functions for recovery.html

var addFatigued = function(){
  var customerRecovery = "fatigued";
  localStorage.setItem("customerRecovery", customerRecovery);
  window.location.href = "diet.html";
}

var addFresh = function(){
  var customerRecovery = "fresh";
  localStorage.setItem("customerRecovery", customerRecovery);
  window.location.href = "diet.html";
}

var addNotSure = function(){
  var customerRecovery = "not_sure";
  localStorage.setItem("customerRecovery", customerRecovery);
  window.location.href = "diet.html";
}

// functions for diet.html

var addNotVeganOrVegetarian = function(){
  var customerDiet = "vegan_or_vegetarian";
  localStorage.setItem("customerDiet", customerDiet);
  window.location.href = "result.html";
}

var addVeganOrVegetarian = function(){
  var customerDiet = "not_vegan_or_vegetarian";
  localStorage.setItem("customerDiet", customerDiet);
  window.location.href = "result.html";
}
