function Customer(name, style, history, frequency, gender, age, goal){
  this.name = name;
  this.style = style;
  this.history = history;
  this.frequency = frequency;
  this.gender = gender;
  this.age = age;
  this.goal = goal;
}

var customerName = localStorage.getItem("customerName");
var customerStyle = localStorage.getItem("customerStyle");
var customerHistory = localStorage.getItem("customerHistory");
var customerFrequency = localStorage.getItem("customerFrequency");
var customerGender = localStorage.getItem("customerGender");
var customerAge = localStorage.getItem("customerAge");
var customerGoal = localStorage.getItem("customerGoal");

var newCustomer = new Customer(customerName, customerStyle, customerHistory, customerFrequency, customerGender, customerAge, customerGoal);

if(newCustomer.gender == "male"){
  var recommendation_box = document.getElementById("recommendations");
  recommendation_box.innerText = "Recommendation 1";

} else if (newCustomer.gender == "female"){

  // set of recommendations for blood type B
  var recommendations = ['recommendation 1', 'recommendation 2', 'recommendation 3', 'recommendation 4'];

  var recommendation_box = document.getElementById("recommendations");

  var number_of_recommendations_box = document.createElement('div');
  var number_of_recommendations = document.createElement('h1');
  number_of_recommendations.className = "recommendation_box";
  number_of_recommendations.innerText = recommendations.length;
  number_of_recommendations_box.appendChild(number_of_recommendations);

  recommendation_box.appendChild(number_of_recommendations_box);

  var text_for_recommendation = document.createElement('div');
  var text = document.createElement('p');
  text.className = "recommendation_box";
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
    if(recommendations[i] == "recommendation 1"){
      absolute_url.onclick = function(event){
        information.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam, purus non posuere finibus, purus dolor varius dui, id rhoncus nunc est non nisi. Integer elit tellus, accumsan porttitor velit eget, rutrum ornare urna. Duis efficitur at nisl in tristique. Mauris egestas congue dui, nec interdum tellus blandit ac. Maecenas ut metus ut augue faucibus consectetur nec vitae velit. Etiam ac nisi lacus. Nam libero eros, volutpat nec rutrum ac, malesuada id tellus. Curabitur varius egestas ligula, non tempus neque dignissim eu. Quisque nec ipsum non dui facilisis porta. Pellentesque sagittis malesuada pulvinar. Duis sit amet nisl quis arcu tempus auctor.";
      }
    } else if(recommendations[i] == "recommendation 2"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 2 box";
      }
    } else if(recommendations[i] == "recommendation 3"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 3 box";
      }
    } else if(recommendations[i] == "recommendation 4"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "recommendation 4 box";
      }
    }

    // create a sequence of <li></li> and store it within <ul></ul>
    var item = document.createElement("li");
    item.className = "bullets";
    item.innerText = recommendations[i];

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
