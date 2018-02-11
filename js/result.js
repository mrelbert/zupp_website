function Customer(gender, general_health, fat_loss, gain_mass, athletic_performance, strength, energy, recovery, mass){
  this.gender = gender;

  this.general_health = general_health;
  this.fat_loss = fat_loss;
  this.gain_mass = gain_mass;
  this.athletic_performance = athletic_performance;
  this.strength = strength;

  this.energy = energy;
  this.recovery = recovery;
  this.mass = mass;
}

var customerName = localStorage.getItem("customerName"); // 1st
var customerAttitude = localStorage.getItem("customerAttitude"); // 2nd
var customerHistory = localStorage.getItem("customerHistory"); // 3rd
var customerFrequency = localStorage.getItem("customerFrequency"); // 4th
var customerGender = localStorage.getItem("customerGender"); // 5th
var customerAge = localStorage.getItem("customerAge"); // 6th
var customerCurrentState = localStorage.getItem("customerCurrent"); // 7th
var customerExperience = localStorage.getItem("customerExperience"); // 8th

// set of goals :: 9th
var customerGoal_1 = localStorage.getItem("goal_general_health");
var customerGoal_2 = localStorage.getItem("goal_fat_loss");
var customerGoal_3 = localStorage.getItem("goal_gain_mass");
var customerGoal_4 = localStorage.getItem("goal_athletic_performance");
var customerGoal_5 = localStorage.getItem("goal_strength");
var setOfGoals = [customerGoal_1, customerGoal_2, customerGoal_3, customerGoal_4, customerGoal_5];

var customerVitamins = localStorage.getItem("customerVitamins"); // 10th
var customerGainMass = localStorage.getItem("customerGainMass"); // 10th
var customerSportStyle = localStorage.getItem("customerSportStyle"); // 10th
var customerSleep = localStorage.getItem("customerSleep"); // 10th
var customerEnergy = localStorage.getItem("customerEnergy"); // 11th
var customerRecovery = localStorage.getItem("customerRecovery"); // 12th
var customerDiet = localStorage.getItem("customerDiet"); // 13th
var customerEmail = localStorage.getItem("customerEmail"); // 14th

// add all attributes to firebase
/////////////////////////////////////////////////////////////

var key = localStorage.getItem("uniqueKey");

var config = {
  apiKey: "AIzaSyDV2A0nsbVX_bPyGpjH9tn4lYkWnYtqk_k",
  authDomain: "zupp-7c197.firebaseapp.com",
  databaseURL: "https://zupp-7c197.firebaseio.com",
  projectId: "zupp-7c197",
  storageBucket: "",
  messagingSenderId: "558183275118"
};

var defaultApp = firebase.initializeApp(config);
console.log(defaultApp.name);
var defaultDatabase = defaultApp.database();
var reference = defaultDatabase.ref().child('users/' + key);

var data = {
  name: customerName,
  attitude: customerAttitude,
  history: customerHistory,
  frequency: customerFrequency,
  gender: customerGender,
  age: customerAge,
  current_state: customerCurrentState,
  experience: customerExperience,
  general_health: customerGoal_1,
  fat_loss: customerGoal_2,
  gain_mass: customerGoal_3,
  athletic_performance: customerGoal_4,
  strength: customerGoal_5,
  vitamins: customerVitamins,
  mass: customerGainMass,
  sport_style: customerSportStyle,
  sleep: customerSleep,
  energy: customerEnergy,
  recovery: customerRecovery,
  diet: customerDiet,
  email: customerEmail
};

reference.set(data);

/////////////////////////////////////////////////////////////


var newCustomer = new Customer(customerGender, customerGoal_1, customerGoal_2, customerGoal_3, customerGoal_4, customerGoal_5,
                               customerEnergy, customerRecovery, customerGainMass); // add parameters

var general_object = {
  "Fish oil": "../img/vitamin_1.jpg",
  "Multivitamin": "../img/vitamin_2.jpg",
};

var fat_object = {
  "Carnitine": "../img/vitamin_1.jpg",
  "Caffeine": "../img/vitamin_2.jpg",
  "Glutamine": "../img/vitamin_3.jpg"
};

var mass_object = {
  "Creatine": "../img/vitamin_1.jpg",
  "Glutamine": "../img/vitamin_2.jpg",
  "Whey Protein": "../img/vitamin_3.jpg",
  "Pre-workout": "../img/vitamin_4.jpg",
  "BCAA": "../img/vitamin_4.jpg"
};

var athletic_object = {
  "Whey Protein": "../img/vitamin_1.jpg",
  "B-vitamins": "../img/vitamin_2.jpg",
  "Pre-workout": "../img/vitamin_3.jpg",
  "Glutamine": "../img/vitamin_4.jpg",
  "BCAA": "../img/vitamin_4.jpg"
};

var strength_object = {
  "Creatine": "../img/vitamin_1.jpg",
  "Glutamine": "../img/vitamin_2.jpg",
  "BCAA": "../img/vitamin_3.jpg",
  "Whey Protein": "../img/vitamin_4.jpg",
  "Pre-workout": "../img/vitamin_3.jpg",
};

var goals = [];
for(var i = 0; i < setOfGoals.length; i++){
  if(setOfGoals[i] != null){
    goals.push(setOfGoals[i]);
  }
}

var goal_object = {};
for(var i = 0; i < goals.length; i++){
  if(goals[i] == "general_health"){
    Object.assign(goal_object, general_object);
  } else if(goals[i] == "fat_loss"){
    Object.assign(goal_object, fat_object);
  } else if(goals[i] == "gain_mass"){
    Object.assign(goal_object, mass_object);
  } else if(goals[i] == "athletic_performance"){
    Object.assign(goal_object, athletic_object);
  } else if(goals[i] == "strength"){
    Object.assign(goal_object, strength_object);
  }
}

console.log(goal_object);

setUp();

// bullet points
var bullet_points = document.createElement("ul");
bullet_points.id = "unordered_list";

// showing information box right away for the first recommendation
// information box
var information = document.getElementById("information");

// first info to show
if(Object.keys(goal_object)[0] == "Fish oil"){
  fishOil();
} else if(Object.keys(goal_object)[0] == "Multivitamin"){
  multiVitamin();
} else if(Object.keys(goal_object)[0] == "Carnitine"){
  carnitine();
} else if(Object.keys(goal_object)[0] == "Green tea extract"){
  greenTeaExtract();
} else if(Object.keys(goal_object)[0] == "Glutamine"){
  glutamine();
} else if(Object.keys(goal_object)[0] == "Creatine"){
  creatine();
} else if(Object.keys(goal_object)[0] == "Whey Protein"){
  wheyProtein();
} else if(Object.keys(goal_object)[0] == "Pre-workout"){
  preWorkout();
} else if(Object.keys(goal_object)[0] == "BCAA"){
  bcaa();
} else if(Object.keys(goal_object)[0] == "B-vitamins"){
  b_vitamins();
}

for(var key in goal_object){
  console.log(key);

  var absolute_url = document.createElement('a');
  absolute_url.className = "url";
  absolute_url.href = "#";

  var item = document.createElement("li");
  item.className = "bullets";
  item.innerText = key;

  // if "NO" for #11
  if(key == "Caffeine" && newCustomer.energy == "energy_not_needed"){
    item.innerText = "Green tea extract";
  }

  var pill = document.createElement("IMG");
  pill.className = "pills";
  pill.setAttribute("src", goal_object[key]);
  pill.setAttribute("width", "28");
  pill.setAttribute("height", "28");
  item.appendChild(pill);

  // store each bullet point within <a></a>
  absolute_url.appendChild(item);

  // store each <a></a> within the <ul></ul>
  bullet_points.appendChild(absolute_url);

  if(key == "Carnitine"){
    absolute_url.onclick = function(event){
      first_show(); // from result_aid.js
    }
  } else if(key == "Caffeine"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      if(newCustomer.energy == "energy_not_needed"){
        information.innerText = "GREEN TEA EXTRACT INFO";
      } else {
        information.innerText = "CAFFEINE INFO";
      }
    }
  } else if(key == "Glutamine"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      information.innerText = "GLUTAMINE INFO";
    }
  } else if(key == "Multivitamin"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      information.innerText = "MULTIVITAMIN INFO";
    }
  } else if(key == "Fish oil"){
    absolute_url.onclick = function(event){
      fishOil(); // from result_aid.js
    }
  } else if(key == "Creatine"){
    absolute_url.onclick = function(event){
      first_show(); // from result_aid.js
    }
  } else if(key == "Whey Protein"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      if(newCustomer.mass == "pack_size_fast"){
        information.innerText = "MASS GAINER INFO";
      } else {
        information.innerText = "WHEY PROTEIN INFO";
      }
    }
  } else if(key == "Pre-workout"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      information.innerText = "PRE-WORKOUT INFO";
    }
  } else if(key == "BCAA"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      information.innerText = "BCAA INFO";
    }
  } else if(key == "B-vitamins"){
    absolute_url.onclick = function(event){
      var information = document.getElementById("information");
      information.innerText = "B-VITAMINS INFO";
    }
  }
}

var recommendation_box = document.getElementById("recommendations");
recommendation_box.appendChild(bullet_points);

// function for button
var viewCart = function(){
  window.location.href = "https://www.zuppclub.com/cart"
}
