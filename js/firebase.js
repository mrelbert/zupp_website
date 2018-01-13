// var config = {
//   apiKey: "AIzaSyDV2A0nsbVX_bPyGpjH9tn4lYkWnYtqk_k",
//   authDomain: "zupp-7c197.firebaseapp.com",
//   databaseURL: "https://zupp-7c197.firebaseio.com",
//   projectId: "zupp-7c197",
//   storageBucket: "",
//   messagingSenderId: "558183275118"
// };
//
// firebase.initializeApp(config);
//
// uniqueKey = function(){
//   var key = firebase.database().ref().child('users').push().key;
//   return {
//     usersKey: key
//   };
// }();

var addName = function(){
  var customerName = document.getElementById("name").value;
  localStorage.setItem("customerName", customerName);
  window.location.href="age.html";
}

var addAge10 = function(){
  var customerAge = 10;
  localStorage.setItem("customerAge", customerAge);
  window.location.href="blood_type.html";
}

var addAge20 = function(){
  var customerAge = 20;
  localStorage.setItem("customerAge", customerAge);
  window.location.href="blood_type.html";
}

var addAge30 = function(){
  var customerAge = 30;
  localStorage.setItem("customerAge", customerAge);
  window.location.href="blood_type.html";
}

var addBloodTypeA = function(){
  var bloodType = "A";
  localStorage.setItem("customerBloodType", bloodType);
  window.location.href="result.html";
}

var addBloodTypeB = function(){
  var bloodType = "B";
  localStorage.setItem("customerBloodType", bloodType);
  window.location.href="result.html";
}

var addBloodTypeO = function(){
  var bloodType = "O";
  localStorage.setItem("customerBloodType", bloodType);
  window.location.href="result.html";
}

var addBloodTypeAB = function(){
  var bloodType = "AB";
  localStorage.setItem("customerBloodType", bloodType);
  window.location.href="result.html";
}
