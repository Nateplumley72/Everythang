var likesToTravel = true;


if(likesToTravel === true){
    console.log( "Bon voyage!" );
  } else {
    console.log("Enjoy your couch!")
  }
  
  
  var userFavoritefood = window.prompt("What is your favorite food?")

  if (userFavoritefood === "pizza" || "burgers"){
    console.log("You have excellent taste in food");
  } else {
    console.log("Your taste is terrible")
  }

  var likesDog = true;


  if(likesToTravel === true){
      console.log( "Youre a dog person" );
    } else {
      console.log("Youre a cat person")
    }


    if(1+1>20){
        console.log( "math good" );
      } else {
        console.log("math bad")
      }

      if(4*5<20){
        console.log( "math good" );
      } else {
        console.log("math bad")
      }

      if(6-2>0){
        console.log ("good math");
      } else {
        console.log("math bad")
      }


      var birthYear = "2000"
      if(birthYear === "2000"){
        console.log( "Youre in Gen Z" );
      } else {
        console.log("Youre before Gen Z")
      }

      var nateObject = {
        firstName: "Nate",
        lastName: "Plumley",
        preferredlanguage: "English"
    }
    if(nateObject.preferredlanguage === "English"){
      console.log( "Hello Nate" );
    } else if(nateObject.preferredlanguage === "Spanish"){
      console.log( "Hola Nate" );
    } else if(nateObject.preferredlanguage === "French"){
      console.log("Bonjour Nate");
    }
      
    var time = "12:00"
    var isHungry = "yes"
    if(time === "7:30" && isHungry === "yes"){
        console.log("Time for Breakfast");
      } else if(time === "12:00" && isHungry === "yes"){
        console.log("Time for Lunch");
      } else if(time === "6:00" && isHungry === "yes"){
        console.log("Time for Dinner");
      } else if(time === "7:30" && isHungry === "no"){
        console.log("Have a cookie");
      } else if(time === "12:00" && isHungry === "no"){
        console.log("Have a cookie");
      } else if(time === "6:00" && isHungry === "no"){
        console.log("Have a cookie");
      }

      var grade = 96
if (grade >= 0 && grade <= 69){console.log("You got an F")}
if (grade >= 70 && grade <= 76){console.log("You got an D")}
if (grade >= 77 && grade <= 84){console.log("You got an C")}
if (grade >= 84 && grade <= 92){console.log("You got an B")}
if (grade >= 93 && grade <= 100){console.log("You got an A")}

