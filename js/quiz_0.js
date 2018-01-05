// var database;
// var ref;
// var data;
// var sure;
// var back;
//
// var config = {
//   apiKey: "AIzaSyDV2A0nsbVX_bPyGpjH9tn4lYkWnYtqk_k",
//   authDomain: "zupp-7c197.firebaseapp.com",
//   databaseURL: "https://zupp-7c197.firebaseio.com",
//   projectId: "zupp-7c197",
//   storageBucket: "",
//   messagingSenderId: "558183275118"
// };
// firebase.initializeApp(config);
// database = firebase.database();
// ref = database.ref('need_help')
// data = {
//   sure: true,
//   back: false
// }
// ref.push(data);


var take_back = document.getElementById("take_back");
take_back.style.cursor = 'pointer';

take_back.onclick = function(){
  window.location.href = "index.html";
}

var sure = document.getElementById("sure");
sure.style.cursor = 'pointer';

sure.onclick = function(){
  window.location.href = "https://suppzupp.myshopify.com/";
}
