function Customer(gender){
  this.gender = gender;
}

var customerName = localStorage.getItem("customerName"); // 1st
var customerAttitude = localStorage.getItem("customerStyle"); // 2nd
var customerHistory = localStorage.getItem("customerHistory"); // 3rd
var customerFrequency = localStorage.getItem("customerFrequency"); // 4th
var customerGender = localStorage.getItem("customerGender"); // 5th
var customerAge = localStorage.getItem("customerAge"); // 6th
var customerCurrentState = localStorage.getItem("customerCurrent"); // 7th
var customerExperience = localStorage.getItem("customerExperience");

// set of goals :: 8th
var customerGoal_1 = localStorage.getItem("goal_general_health");
var customerGoal_2 = localStorage.getItem("goal_fat_loss");
var customerGoal_3 = localStorage.getItem("goal_gain_mass");
var customerGoal_4 = localStorage.getItem("goal_athletic_performance");
var customerGoal_5 = localStorage.getItem("goal_strength");

var customerVitamins = localStorage.getItem("customerVitamins"); // 9th
var customerGainMass = localStorage.getItem("customerGainMass"); // 10th
var customerSportStyle = localStorage.getItem("customerSportStyle"); // 11th
var customerSleep = localStorage.getItem("customerSleep"); // 12th
var customerEnergy = localStorage.getItem("customerEnergy"); // 13th
var customerRecovery = localStorage.getItem("customerRecovery"); // 14th
var customerDiet = localStorage.getItem("customerDiet"); // 15th
var customerEmail = localStorage.getItem("customerEmail"); // 16th

var newCustomer = new Customer(customerGender); // add parameters

// for small pill images
var counter = 1;

if(newCustomer.gender == "male"){
  var recommendation_box = document.getElementById("recommendations");
  recommendation_box.innerText = "Recommendation 1";

} else if (newCustomer.gender == "female"){

  // DICTIONARY
  var recommendation_object = {
    "Pre-workout": "../img/vitamin_1.jpg",
    "Whey protein": "../img/vitamin_2.jpg",
    "BCAA": "../img/vitamin_3.jpg",
    "Creatine": "../img/vitamin_4.jpg"
  };

  // var recommendations = ['Pre-workout', 'Whey protein', 'BCAA', 'Creatine'];

  var recommendation_box = document.getElementById("recommendations");
  var recommendations_length = Object.keys(recommendation_object).length;

  var number_of_recommendations_box = document.createElement('div');
  var number_of_recommendations = document.createElement('h1');
  number_of_recommendations.className = "recommendation_box_number";
  number_of_recommendations.innerText = recommendations_length;
  number_of_recommendations_box.appendChild(number_of_recommendations);

  recommendation_box.appendChild(number_of_recommendations_box);

  var text_for_recommendation = document.createElement('div');
  var text = document.createElement('p');
  text.className = "recommendation_box_text";
  text.innerText = "recommendations";
  text_for_recommendation.appendChild(text);

  recommendation_box.appendChild(text_for_recommendation);
  // recommendation_box.innerText = recommendations.length + " Recommendations";

  // create <ul></ul>
  // bullet_points.setAttribute("style", "square");
  var bullet_points = document.createElement("ul");
  bullet_points.id = "unordered_list";

  // showing information box right away for the first recommendation
  // information box
  var information = document.getElementById("information");

  // same as first recommendation onclick
  // calls from result_aid.js
  first_show();

  //
  for(var key in recommendation_object){
    var absolute_url = document.createElement('a');
    absolute_url.className = "url";
    absolute_url.href = "#";

    var item = document.createElement("li");
    item.className = "bullets";
    item.innerText = key;

    var pill = document.createElement("IMG");
    pill.className = "pills";
    pill.setAttribute("src", recommendation_object[key]);
    pill.setAttribute("width", "28");
    pill.setAttribute("height", "28");
    item.appendChild(pill);
    counter++;

    // store each bullet point within <a></a>
    absolute_url.appendChild(item);

    // store each <a></a> within the <ul></ul>
    bullet_points.appendChild(absolute_url);

    if(key == "Pre-workout"){
      absolute_url.onclick = function(event){
        first_show(); // from result_aid.js
      }

    } else if(key == "Whey protein"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 2 box";
      }
    } else if(key == "BCAA"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 3 box";
      }
    } else if(key == "Creatine"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 4 box";
      }
    }
  }


  // store <ul></ul> recommendation box
  recommendation_box.appendChild(bullet_points);

}

// function for button
var viewCart = function(){
  window.location.href = "https://www.zuppclub.com/cart"
}

// let b = $(document);
// let d = $('#information');
// let scrollamt = 0;
// b.on('wheel', function(e) {
//     if((scrollamt <= d[0].scrollHeight - d[0].offsetHeight) && (b.scrollTop() == 0)){
//         e.preventDefault();
//     } else{
//         scrollamt = d[0].scrollHeight - d[0].offsetHeight;
//         return;
//     }
//     scrollamt < 0 ? scrollamt = 0 : null;
//     e.originalEvent.deltaY > 0 ? scrollamt +=100 : scrollamt -=100;
//     d.animate({
//        scrollTop: scrollamt
//     },50);
// })
