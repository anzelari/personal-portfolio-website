const planets = ['Moon', 'Sun', 'Mercury', 'Venus', 'Mars'];

const elements = ['Water', 'Earth', 'Fire', 'Air'];

const activities = {
   'Moon and Water': "meditate",
   'Sun and Water': "express your emotions through art",
   'Mercury and Water': "talk about your feelings",
   'Venus and Water': "fall in love",
   'Mars and Water': "have a cup of strong coffee",

   'Moon and Earth': "do yoga",
   'Sun and Earth': "get a massage",
   'Mercury and Earth': "make business contacts",
   'Venus and Earth': "eat something delicious ",
   'Mars and Earth': "cook a dinner for your family",

   'Moon and Fire': "go for dancing",
   'Sun and Fire': "add a new picture to Instagram",
   'Mercury and Fire': "be straightforward and tell the truth",
   'Venus and Fire': "show your love, be expressive and creative",
   'Mars and Fire': "start something new",

   'Moon and Air': "visit Facebook and have a chat",
   'Sun and Air': "do volunteering or donate",
   'Mercury and Air': "meet your friends ",
   'Venus and Air': "do something silly together with your partner",
   'Mars and Air': "do coding"
};

// random number generator
const randomNum = (arr) => {
   return Math.floor(Math.random()*arr.length);
};

//random planet and random element concatenation
const randomPlanet = planets[randomNum(planets)];
const randomElement = elements[randomNum(elements)];
const planetElement = `${randomPlanet} and ${randomElement}`;

//log the messages
function generateMessage() {
   document.getElementById('oracle-button').style.display = "none";
  for (let activity in activities ) {
     if (activity === planetElement) {
        document.getElementById('planet').innerHTML = `At the moment your planet is ${randomPlanet}`;
        document.getElementById('element').innerHTML = `and your element is ${randomElement}.`;
        document.getElementById('message').innerHTML = `It is time to ${activities[activity]}`;
      }
   }
};
document.getElementById('oracle-button').onclick = generateMessage;