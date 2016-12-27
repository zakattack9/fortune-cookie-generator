console.log("JS is Linked Properly"); //this should always show in console

var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"];
//if any fortunes are added to the list above, make sure to change "for loop" paramter one value (var i = " ";) and pie chart at bottom
function generateFortuneCookie(){ //runs for the first time button is pressed
  var clonesList = fortunesList.slice();
  
  //randomizer for fortunes
  var randomFortune = " ";
  for (var i = 4; i >= 0; i--){
    randomFortune = clonesList.splice(Math.floor(Math.random() * (i + 1)), 1); //(i + 1) ensures 5 values are returned since the last value in math.random is excluded
    console.log("You will " + randomFortune + ".");
    //temporarily stores random list
    var tempCache = document.getElementById("fortune-cache");
    var nodeone = document.createElement("DIV");
    nodeone.innerText = "You will " + randomFortune + ".";
    tempCache.appendChild(nodeone);
  }
  
  //changes button to prevent a new list of variables from being created
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "block";
  
  //appends last fortune from "fortune-cache" into "fortune-cookie-text"
  var cookieText = document.getElementById("fortune-cookie-text");
  var nodetwo = tempCache.lastChild;
  cookieText.appendChild(nodetwo);
}

var count = 0;
var max = fortunesList.length;
//variables above pertain to the "count" function that reruns the "generateFortuneCookie()" function
var heightCount = 0;
//must be seperate and increase OUTSIDE of function, determines div height (dynamicDiv)
function anotherFortune(){ //this should run only after the first fortune is produce
  var cookieText = document.getElementById("fortune-cookie-text"); //this variable MUST go before nodethree otherwise if declared after, nodethree won't recognize variable
  //appends text from "fortune-cookie-text" to "previous-fortunes", this must be run first before adding new text from tempCache
  var nodethree = document.createElement("LI");
  nodethree.appendChild(cookieText.lastChild); 
  document.getElementById("previous-fortunes").appendChild(nodethree);

  //button counter
  count++
  //console.log(count);
  if(count == max){ //once it runs out of fortunes, it will regenerate a new list
    generateFortuneCookie();
    count = 0; //resets count back to zero 
    pieChart(); //will prevent error from screwing up count for pie chart
    var nodetwo = tempCache.lastChild; //this needs to be here to prevent errors, will cause error on console
  }
  
  //this increases div height as list increases
  var dynamicDiv = document.getElementById("other-fortunes-div");
  var height = dynamicDiv.clientHeight;
  heightCount++
  //console.log(heightCount);
  if(heightCount >= 2){
    dynamicDiv.style.height = height + 1 + "px";
  }

  //appends text from "fortune-cache" into "fortune-cookie-text", runs after appending text into "previous-fortunes"
  var tempCache = document.getElementById("fortune-cache");
  var nodetwo = tempCache.lastChild;
  cookieText.appendChild(nodetwo);
}

var fortuneOneTotal = 0;
var fortuneTwoTotal = 0;
var fortuneThreeTotal = 0;
var fortuneFourTotal = 0;
var fortuneFiveTotal = 0;
function pieChart(){
  //http://www.jscharts.com/how-to-use-pie-charts
  //pie chart of fortunes
  var data = document.getElementById("previous-fortunes");
  var dataLast = data.lastChild.innerText;
  if(dataLast == "You will die 2mrrw."){  
    fortuneOneTotal++
    console.log(fortuneOneTotal);
  }
  if(dataLast == "You will find a dollar."){
    fortuneTwoTotal++
  }
  if(dataLast == "You will become poor."){
    fortuneThreeTotal++  
  }
  if(dataLast == "You will jump off a cliff."){
    fortuneFourTotal++
  }
  if(dataLast == "You will turn into Batman."){
    fortuneFiveTotal++
  } 
}

  //Pie Chart
  //http://stackoverflow.com/questions/6995797/html5-canvas-pie-chart
  var canvas = document.getElementById("pie");
  var context = canvas.getContext("2d");
  var lastend = 0;
  var data = [200, 60, 15];
  var total = 0;
  var color = ['aquamarine', 'palegreen', 'paleturquoise'];

  for(var z = 0; z < data.length; z++){
    total += data[z];
  }

  for(var y = 0; y < data.length; y++){
    context.fillStyle = color[y];
    context.beginPath();
    context.moveTo(canvas.width/2,canvas.height/2);
    context.arc(canvas.width/2,canvas.height/2,canvas.height/2,lastend,lastend+(Math.PI*2*(data[y]/total)),false);
    context.lineTo(canvas.width/2,canvas.height/2);
    context.fill();
    lastend += Math.PI*2*(data[y]/total);
  }
/*
---------------------------
Features:

"cache div" that temporarily holds the list data until used up
text transfers between the two divs
dynamic div that streatches as list grows
generates a new fortune list, does not reuse fortunes until list is depleted
counters that keep track of when certain elements need to run again
---------------------------
Future Development:

add a scrollbar once the "Previous Fortunes" list gets to long
add a way to generate for multiple people
add other statisics (ex. percentage of same fortunes recieved)
make the page appear with a wave of the mouse over a "Crystal Ball"
sound effects???
---------------------------
Side Notes:

nodeone: is an UL html element that is assigned text within it
nodetwo: calls out the last child of "fortune-cache" or whatever text is stored within that id
nodethree: creates an LI html element that has text appended to it

for (var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"], i = fortunesList.length; i--; ) {
    var random = fortunesList.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
} 
simplified version, not used due to lack of knowledge of how it works (go to "goo.gl/qwwbu7" for reference)
---------------------------
Problems With Current Code:

fortunesList must be set as both a global and local variable
other variable like "tempCache" cannot be set as a global varible for some reason
multiple variables that are the same but within different functions however cannot be set to global ^ 
refer to line 48 (count, var nodetwo)
height of div doesn't increase all the time stops after 5 clicks then continues again
---------------------------
*/