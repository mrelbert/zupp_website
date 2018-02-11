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
var reference = defaultDatabase.ref().child('users');

// get the customer name
var customerName = localStorage.getItem("customerName");
console.log(customerName);

var newPostRef = reference.push({
  name: customerName
});

// save customers unique id
var uniqueKey = newPostRef.key;
localStorage.setItem("uniqueKey", uniqueKey);
console.log(uniqueKey);
