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
  //var randomTime = "12:00:00";
  //var randomFormat = "hh:mm:ss";

  //---------Pseudocode Notes---------//

  // Create ability for user to add and submit train details
  $("button").on("click", function () {
    alert("Submission Received");
    var trainName = $("#exampleInputName").val().trim();
    var destination = $("#exampleInputDestination").val().trim();
    var time = $("#exampleInputTime").val().trim();
    var frequency = $("#exampleInputMinutes").val().trim();
    var minutesAaway = $("#formMinutesAway").text("TBD");

    console.log(trainName);
    console.log(destination);
    console.log(time);
    console.log(frequency);
    //console.log(minutesAaway);

   // Update HTML with submitted details
    $("#formName").append(trainName);
    $("#formDestination").append(destination);
    $("#formTime").append(time);
    $("#formFrequency").append(frequency);
    $("#formMinutesAway").append(minutesAaway);


  });

  
  // Update database with submitted details

  // Use Moment.js to determine minutes away

