// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes


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

var randomQuoteindx;
var randomColorindx;
var HTMLString;
var intervalID;

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote () {
  randomQuoteindx = Math.floor((Math.random() * quotes.length));
  randomColorindx = Math.floor(Math.random() * colorPlate.length);

  HTMLString = '';

  for (i=randomQuoteindx;i>=0;i+=0) {

    //console.log(quotes[randomQuoteindx].citation);

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

    intervalID = setInterval(function timeToDo(){ printQuote(); }, 500);

}

function stopTimer () {

  clearInterval(intervalID);

}

// Create the printQuote funtion and name it printQuote
function printQuote () {

    getRandomQuote();

    //need to generate random number from 0 to index length and use to get random BG and FG colors.
    var quotebox = document.getElementById('quote-box');
    quotebox.innerHTML = HTMLString;
    quotebox.style.color = colorPlate[randomColorindx].foreground;

    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = colorPlate[randomColorindx].background;

    var y= document.getElementsByTagName("a");

    for (var i = 0; i < y.length; i++) {
      y[i].style.color = colorPlate[randomColorindx].foreground;
    }

    var hashcolor = document.getElementsByClassName("hashtag");
    for (c=0;c<hashcolor.length;c++) { hashcolor[c].style.color = colorPlate[randomColorindx].foreground }

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function(){ printQuote();}, false);
document.getElementById('setTimer').addEventListener("click", function(){ setTimer();}, false);
document.getElementById('stopTimer').addEventListener("click", function(){ stopTimer();}, false);
