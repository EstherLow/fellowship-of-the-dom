console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $('body').append("<section id = 'middle-earth'></section>");
  for (var i = 0; i < lands.length; i++) {
  $('#middle-earth').append( "<article><h1>" + lands[i] + "</h1></article>");
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
$('article:first-of-type').append("<ul></ul>")
for (var i = 0; i < hobbits.length; i++) {
  $('ul').append("<li>" + hobbits[i] + "</li>");
    $('li').addClass('hobbit');
    }
}
makeHobbits()
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
$('.hobbit:first-of-type').append("<div id='the-ring'></div>");
$('#the-ring').addClass("magic-imbued-jewelry");
}
//keepItSecretKeepItSafe()

$('#the-ring').click(nazgulScreech)

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
$('article:nth-of-type(2)').append("<aside><ul></ul></aside>")
for (var i = 0; i < buddies.length; i++) {
  $("aside ul").append("<li class='buddies'>" + buddies[i] + "</li>")
  }
}
makeBuddies()


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('aside ul li:nth-child(4)').replaceWith("<li class='buddies'>Aragorn</li>")
}

//beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $("article:first-of-type ul li").appendTo("aside ul")
}
//leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var obj = $('li');
  var arr = $.makeArray(obj)
  console.log(arr);
  $("article:nth-of-type(2)").append("<div id='the-fellowship'></div>");
  for (var i = 0; i < arr.length; i++ ){
  $(arr[i]).appendTo("#the-fellowship");
  // console.log($(arr[i]).text());
  alert($(arr[i]).text() + " joined my party")

  }
}

//forgeTheFellowShip()
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
$("li:first-of-type").text("Gandalf the White")
$("li:first-of-type").css({"background-color": "white", "border": "2px grey solid"} )
}

//theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
alert("Horn of Gondor has been blown! Boromir is KILLED!");
$("li:contains('Boromir')").css("text-decoration", "line-through");
setTimeout(function(){
  $("li").remove(":contains('Boromir')")
  console.log('timeoutfired');
}, 5000)
}

//hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  $("h1:contains('Mordor')").wrap("<div id='mount-doom'></div>")
  $("#mount-doom").append("<ul></ul>");
  $("li:contains('Frodo')").appendTo("#mount-doom ul");
  $("li:contains('Sam')").appendTo("#mount-doom ul");
}
//itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $("article:contains('Mordor')").append("<div id='gollum'>Gollum</div");
  $("#the-ring").detach().appendTo("#gollum");
  $("#gollum").appendTo("#mount-doom");
}

//weWantsIt()

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
$("#gollum").remove();
$(".buddies").remove();
$(".hobbit").appendTo("article:contains('Shire')");
}

//thereAndBackAgain()
