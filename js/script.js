// FSJS - Random Quote Generator

// Create the array of quote objects with quote, source, citation, year and tags


var quotes = [
  { quote: "I firmly believe that any man's finest hour ... is that moment when he has worked his heart out in a good cause and lies exhausted on the field of battle - victorious.",
    source: 'Vince Lombardi',
    citation: 'What it Takes to be Number One',
    year: '1970',
    tags: ['vincelombardi', 'motivation', 'work', 'endurance']
  },
  { quote: "Do or do not. There is no try.",
    source: 'Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: '',
    tags: ['yoda', 'jedimaster', 'lightside', 'masterjedi']
  },
  { quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    source: 'Henry Ford',
    citation: '',
    year: '1970',
    tags: ['motivation', 'henryford', 'airplane']
  },
  { quote: "Let us therefore brace ourselves to our duties, and so bear ourselves that if the British Empire and its Commonwealth last for a thousand years, men will still say, ‘This was their finest hour.’",
    source: 'Winston Churchill',
    citation: 'Their Finest Hour Speech',
    year: '1940',
    tags: ['courage', 'motivation', 'winstonchurchill']
  },
  { quote: "All in, all the time",
    source: 'Navy Seals',
    citation: '',
    year: '',
    tags: ''
  }
];

//creat combos of foreground and bacground color objects, then use a a random function to get a different combo each time
var colorPlate = [
  {
    background: '#2C3E50',
    foreground: '#F64747'
  },
  {
    background: '#807D67',
    foreground: '#2E343B'
  },
  {
    background: '#5C97BF',
    foreground: '#1C2933'
  },
  {
    background: '#D2527F',
    foreground: '#E0FFFF'
  },
  {
    background: '#696969',
    foreground: '#1C1836'
  },

];

//need global variables - randommQuoteindex, randomeColorindex, htmlstring, and interval id (for stop and set timer)
var randomQuoteindx;
var randomColorindx;
var HTMLString;
var intervalID;

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote () {
  //since its from 0-array.length, we dont have to add 1
  randomQuoteindx = Math.floor((Math.random() * quotes.length));
  randomColorindx = Math.floor(Math.random() * colorPlate.length);

  //This clears the html string so that each time the function runs it outputs just one quote, and doesnt append it to the existing string.
  HTMLString = '';

  //one 'for' loop to make one whole html string output - it will include all the html and object properties.
  for (i=randomQuoteindx;i>=0;i+=0) {

    //console.log(quotes[randomQuoteindx].citation); - this is how we access each 'quote' object, in the array of quote objects

    HTMLString += '<p class="quote">' + quotes[i].quote + '</p>';
    HTMLString += '<p class="source">' + quotes[i].source;
    if (quotes[i].citation !== '') {
      HTMLString += '<span class="citation">' + quotes[i].citation + ' </span>';
    }
    if (quotes[i].year !== '') {
      HTMLString += '<span class="year">' + quotes[i].year + ' </span>';
    }
    HTMLString += '</p><p class=\" tags \" >';
    if (quotes[i].tags.length >0){

      for (t=0; t<quotes[i].tags.length; t++)
      {HTMLString += "<" + "span class='hashtag' ><a href=''>#" + quotes[i].tags[t] + "</a></span>";}
    }
    HTMLString += "</p>";
    break;
  }

}

function setTimer () {
    //the set interval function returns and ID value that is used by the clearInterval function. Pass the IntervalID to clearInterrval function.
    intervalID = setInterval(function timeToDo(){ printQuote(); }, 500);

}

function stopTimer () {
  //set this to be an onclick event - no matter how many times you start the interval, always have a way to stop it. **Tried using one button, but could figure it out.
  clearInterval(intervalID);

}

// Create the printQuote funtion and name it printQuote
function printQuote () {

    getRandomQuote();

    //always asign document.getElementById/getElementsByClassName('className') to a variable. Since it stores as an object, use 'dot' notation to acces various properties. Also, look at CSS to make sure that there are no specific properties that are overriding the JS.
    var quotebox = document.getElementById('quote-box');
    quotebox.innerHTML = HTMLString;
    quotebox.style.color = colorPlate[randomColorindx].foreground;

    //set variable.style.backgroundColor to HEX color.
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = colorPlate[randomColorindx].background;

    //since there are more than one array element - we need to access each one and and change the color property of each. Otherwise only one tag changes color.
    var y= document.getElementsByTagName("a");
      for (var i = 0; i < y.length; i++) {
        y[i].style.color = colorPlate[randomColorindx].foreground;
      }

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function(){ printQuote();}, false);
document.getElementById('setTimer').addEventListener("click", function(){ setTimer();}, false);
document.getElementById('stopTimer').addEventListener("click", function(){ stopTimer();}, false);
