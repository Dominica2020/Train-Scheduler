// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeNg70EH-8v8FGnJeI0QEGEp0OVawGb5I",
    authDomain: "train-schedule-a5b6e.firebaseapp.com",
    databaseURL: "https://train-schedule-a5b6e.firebaseio.com",
    projectId: "train-schedule-a5b6e",
    storageBucket: "train-schedule-a5b6e.appspot.com",
    messagingSenderId: "461415688178",
    appId: "1:461415688178:web:2856fd73b1c48fe1a7ed6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().on("value",function(snapshot){
      console.log(snapshot.val());
  })

  // Database Variable
  var database = firebase.database();

  // Global Time Variables

  var randomTime = "12:00:00";
  var randomFormat = "hh:mm:ss";

  //---------Pseudocode Notes---------//
  // Create ability for user to add and submit train details

  // Submitted details should update the HTML & database

  // Use Moment.js to determine minutes away

  $("button").on("click", function () {
    alert("Submitted");
    var newRow = $("<>")
  });


  


