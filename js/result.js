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

  // set of recommendations for blood type B
  var recommendations = ['Pre-workout', 'Whey protein', 'BCAA', 'Creatine'];

  var recommendation_box = document.getElementById("recommendations");

  var number_of_recommendations_box = document.createElement('div');
  var number_of_recommendations = document.createElement('h1');
  number_of_recommendations.className = "recommendation_box_number";
  number_of_recommendations.innerText = recommendations.length;
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
  information.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam, purus non posuere finibus, purus dolor varius dui, id rhoncus nunc est non nisi. Integer elit tellus, accumsan porttitor velit eget, rutrum ornare urna. Duis efficitur at nisl in tristique. Mauris egestas congue dui, nec interdum tellus blandit ac. Maecenas ut metus ut augue faucibus consectetur nec vitae velit. Etiam ac nisi lacus. Nam libero eros, volutpat nec rutrum ac, malesuada id tellus. Curabitur varius egestas ligula, non tempus neque dignissim eu. Quisque nec ipsum non dui facilisis porta. Pellentesque sagittis malesuada pulvinar. Duis sit amet nisl quis arcu tempus auctor.";

  for(var i = 0; i < recommendations.length; i++){
    // create <a></a>
    var absolute_url = document.createElement('a');
    absolute_url.className = "url";
    absolute_url.href = "#";

    // if and else statements for recommendations
    // is there a more efficient way to traverse?
    if(recommendations[i] == "Pre-workout"){
      absolute_url.onclick = function(event){

        // getting rid of Lorem ipsum text
        information.innerText = "";

        // hello world
        // var div = document.createElement("div");
        // var text = document.createTextNode("hello world");;
        // div.appendChild(text);
        // information.appendChild(div);

        // zupp logo
        var image = document.createElement("IMG");
        image.className = "banner";
        image.setAttribute("src", "../img/banner.png");
        // image.setAttribute("width", "104");
        // image.setAttribute("height", "28");
        information.appendChild(image);

        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        // 1st compartment

        var div1 = document.createElement("div");
        div1.className = "compartment";

        var text1_1 = document.createElement("p");
        text1_1.className = "statements";
        text1_1.innerText = "You live above 37 latitude";

        // var br1 = document.createElement("br");

        var text1_2 = document.createElement("p");
        text1_2.className = "reasoning";
        text1_2.innerText = "It's hard to get the vitamin D you need from sun exposure alone if you live in the northern half of the U.S., based on weather and cloud cover patterns.";

        // 2nd 1st_compartment

        var div2 = document.createElement("div");
        div2.className = "compartment";

        var text2_1 = document.createElement("p");
        text2_1.className = "statements";
        text2_1.innerText = "Vitamin D supports healthier bones";

        // var br2 = document.createElement("br");

        var text2_2 = document.createElement("p");
        text2_2.className = "reasoning";
        text2_2.innerText = "Getting enough Vitamin D is essential to overall health and maintaining healthy bones. A recent study done in 2011 showed that over 70% of Americans are not getting enough Vitamin D.";

        div1.appendChild(text1_1);
        // div1.appendChild(br1);
        div1.appendChild(text1_2);

        div2.appendChild(text2_1);
        // div2.appendChild(br2);
        div2.appendChild(text2_2);

        wrapper.appendChild(div1);
        wrapper.appendChild(div2);

        // button

        var div_for_button = document.createElement("div");
        div_for_button.className = "button_compartment";

        var button = document.createElement("h3");
        button.id = "button";
        button.innerText = "VIEW/UPDATE MY BUNDLE";
        button.style.cursor = "pointer";
        button.addEventListener("click", viewCart);

        div_for_button.appendChild(button);
        wrapper.appendChild(div_for_button);

        information.appendChild(wrapper);
      }

    } else if(recommendations[i] == "Whey protein"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 2 box";
      }
    } else if(recommendations[i] == "BCAA"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 3 box";
      }
    } else if(recommendations[i] == "Creatine"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 4 box";
      }
    }

    // create a sequence of <li></li> and store it within <ul></ul>
    var item = document.createElement("li");
    item.className = "bullets";
    item.innerText = recommendations[i];

    var pill = document.createElement("IMG");
    pill.className = "pills";
    pill.setAttribute("src", "../img/vitamin_" + counter + ".jpg");
    pill.setAttribute("width", "28");
    pill.setAttribute("height", "28");
    item.appendChild(pill);
    counter++;

    // store each bullet point within <a></a>
    absolute_url.appendChild(item);

    // store each <a></a> within the <ul></ul>
    bullet_points.appendChild(absolute_url);
  }

  // store <ul></ul> recommendation box
  recommendation_box.appendChild(bullet_points);

  // INFORMATION BOX

  // create a button


}

// document.getElementById("test1").innerText ="Hey " + newCustomer.name + ", ";
// document.getElementById("test2").innerText ="Your age is " + newCustomer.age + " and your blood type is " + newCustomer.bloodType;
//
// var div = document.createElement("div");
// var text = document.createTextNode("Hello World");
// div.appendChild(text);
// document.body.appendChild(div);


// function for button
var viewCart = function(){
  window.location.href = "https://www.zuppclub.com/cart"
}
