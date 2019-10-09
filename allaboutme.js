var firstName = "Nate";
console.log(firstName)

var lastName = "Plumley";
console.log(lastName)

var age = "19";
console.log(age)

var likesTravel = "True";
console.log(likesTravel)

fullName = `${firstName} ${lastName}`;
console.log(fullName)

var x = "2";
console.log(x)

var y = "4";
console.log(y)

var total = x+y;
console.log(total)

var tempArray = [97, 55, 62, 82, 79, 91, 74, 86];
var firstItem = tempArray[0] // 97
var secondItem = tempArray[1] // 55
var thirdItem = tempArray[2] // 62
console.log(tempArray[2])
console.log(tempArray.length)
var fave = "my favorite weather is "
var faveTotal = fave+tempArray[2];
console.log(faveTotal)
tempArray.push(100);
console.log(tempArray[9])


var months = ['Jan', 'March', 'April', 'June'];

 
months.splice(1, 0, 'Feb');


months.splice(4, 1, 'May');
console.log(months);

var movieArray= ['Fight Club', 'Rango'];
console.log(movieArray[0]);
console.log(movieArray[1]);
console.log(`The two movies I put in my array were ${movieArray[0]}`);

var nateObject = {
    firstName: "Nate",
    lastName: "Plumley",
    age: 19,
    movies: ['Fight Club', 'Rango'],
    likesTravel: true 
 
}

var temperature = ['71'];
var conditions =['cloudy'];
var sunriseTime = ['7:17 a.m.'];
var sunsetTime = ['7:24 p.m.'];

console.log(temperature);
console.log(conditions);
console.log(sunriseTime);
console.log(sunsetTime);

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

console.log(55);
console.log(32);
console.log(highTemperatures[2]);
console.log(lowTemperatures[5]);

var temperature = ['71 Fahrenheit'];
console.log(temperature);
var conditions = ['cloudy'];
console.log(conditions);

var currentWeather = ("It's 71 degrees F and sunny.");
console.log(currentWeather);

var todaysWeather = {
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  }

  var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
]
    console.log(weatherForecast)

    var williamGrades = [62, 97, 99, 85, 73, 97];
    console.log(williamGrades[0])
    console.log(williamGrades[5])
    var williamAverage = 85.5
    var williamAllgrades = (62+97+99+85+73+97) 
    var williamAver = "Williams average is"
    console.log(williamAver + williamAverage)

