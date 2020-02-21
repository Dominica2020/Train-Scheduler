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

  firebase.database().ref().on("child_added",function(snapshot){ //listens to what is added to the DB. Use child_added instead of value.
      console.log(snapshot.val());
      console.log(snapshot.val().time);

      var train = snapshot.val();
      console.log(train.time, train.destination);
  //template literals
      var newTableRow = $(
        `<tr class="formValues"> 
          <th scope="row" class="formName"> ${train.trainName} 
            <td class="formDestination"> ${train.destination} </td> 
            <td class="formFrequency"> ${train.frequency} </td>
            <td class="formTime"> ${train.time} </td>
            <td class="formMinutesAway"> TBD </td>
          </th>
        </tr>`
      );

    $("tbody").append(newTableRow);
    
  })

  // Database Variable
  var database = firebase.database();

  //---------Pseudocode Notes---------//

  // Create ability for user to add and submit train details
  $("button").on("click", function () {
    alert("Submission Received");
    var trainName = $("#exampleInputName").val().trim();
    var destination = $("#exampleInputDestination").val().trim();
    var time = $("#exampleInputTime").val().trim();
    var frequency = $("#exampleInputMinutes").val().trim();
   
    //var minutesAaway = $("#formMinutesAway").text("TBD"); will calculate this when putting on the screen

    console.log(trainName);
    console.log(destination);
    console.log(time);
    console.log(frequency); 

    //console.log(minutesAaway);

    //Pushing input values to DB (if you decide to do a column w/ the same name as the var/key name you can do the shorthand below)
    database.ref().push({
      trainName,
      destination,
      time,
      frequency,
  });

  });

  // Use Moment.js to determine minutes away

  


