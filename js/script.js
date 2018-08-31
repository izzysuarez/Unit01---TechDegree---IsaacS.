// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes


var quotes = [
  { quote: "I firmly believe that any man's finest hour ... is that moment when he has worked his heart out in a good cause and lies exhausted on the field of battle - victorious.",
    source: 'Vince Lombardi',
    citation: 'What it Takes to be Number One',
    year: '1970'
  },
  { quote: "Do or do not. There is no try.",
    source: 'Yoda',
    citation: 'Star Wars: The Empire Strikes Back',
    year: ''
  },
  { quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    source: 'Henry Ford',
    citation: 'What it Takes to be Number One',
    year: '1970'
  },
  { quote: "Let us therefore brace ourselves to our duties, and so bear ourselves that if the British Empire and its Commonwealth last for a thousand years, men will still say, ‘This was their finest hour.’",
    source: 'Winston Churchill',
    citation: 'Their Finest Hour Speech',
    year: '1940'
  },
  { quote: "All in, all the time",
    source: 'Navy Seals',
    citation: '',
    year: ''
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

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote () {
  randomQuoteindx = Math.floor((Math.random() * quotes.length));
  randomColorindx = Math.floor(Math.random() * colorPlate.length);

  HTMLString = '';

  for (i=randomQuoteindx;i>=0;i+=0) {

    //console.log(quotes[randomQuoteindx].quote);

    HTMLString += '<p class="quote">' + quotes[i].quote + '</p>';
    HTMLString += '<p class="source">' + quotes[i].source;
    //'<span class="citation"> [citation here] </span>'
    //'<span class="year"> [year here] </span>'
    HTMLString += '</p>';
    break;
  }

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

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
