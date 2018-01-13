function Customer(name, age, blood_type){
  this.name = name;
  this.age = age;
  this.bloodType = blood_type;
}

var customerName = localStorage.getItem("customerName");
var customerAge = localStorage.getItem("customerAge");
var customerBloodType = localStorage.getItem("customerBloodType");

var newCustomer = new Customer(customerName, customerAge, customerBloodType);

if(newCustomer.bloodType == "A"){
  var recommendation_box = document.getElementById("recommendations");
  recommendation_box.innerText = "Recommendation 1";
} else if (newCustomer.bloodType == "B"){

  // set of recommendations for blood type B
  var recommendations = ['protein', 'pre-workout', 'amino acids'];

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
  var bullet_points = document.createElement("ul");
  bullet_points.id = "unordered_list";
  // bullet_points.setAttribute("style", "square");

  for(var i = 0; i < recommendations.length; i++){
    // create <a></a>
    var absolute_url = document.createElement('a');
    absolute_url.className = "url";
    absolute_url.href = "#";

    // if and else statements regarding recommendations
    // is there a more efficient way to traverse?
    if(recommendations[i] == "protein"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        // information.innerText = "protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here";

        var div1 = document.createElement('div');
        var par1 = document.createElement('p');
        par1.innerText = "protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here";
        div1.appendChild(par1);

        var div2 = document.createElement('div');
        var par2 = document.createElement('p');
        par2.innerText = "protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here";
        div2.appendChild(par2);

        var div3 = document.createElement('div');
        var par3 = document.createElement('p');
        par3.innerText = "protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here protein information here";
        div3.appendChild(par3);

        information.appendChild(div1);
        information.appendChild(div2);
        information.appendChild(div3);

      }
    } else if(recommendations[i] == "pre-workout"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here pre-workout information here";
      }
    } else if(recommendations[i] == "amino acids"){
      absolute_url.onclick = function(event){
        var information = document.getElementById("information");
        information.innerText = "amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here amino acids information here";
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
  // LOREM IPSUM text

} else if (newCustomer.bloodType == "O"){
  var recommendation_box = document.getElementById("recommendations");
  recommendation_box.innerText = "Recommendation 3";
} else {
  var recommendation_box = document.getElementById("recommendations");
  recommendation_box.innerText = "Recommendation 3";
}

// document.getElementById("test1").innerText ="Hey " + newCustomer.name + ", ";
// document.getElementById("test2").innerText ="Your age is " + newCustomer.age + " and your blood type is " + newCustomer.bloodType;
//
// var div = document.createElement("div");
// var text = document.createTextNode("Hello World");
// div.appendChild(text);
// document.body.appendChild(div);
