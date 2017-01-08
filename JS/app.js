console.log("JS is Linked Properly"); //this should always show in console

var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"];
//if any fortunes are added to the list above, make sure to change "for loop" paramter one value (var i = " ";) and stats function at bottom
function generateFortuneCookie(){ //runs for the first time button is pressed
  var cloneList = fortunesList.slice(); //this will console all values within the array, allowing fortunesList to stay as a global variable

  //randomizer for fortunes
  var randomFortune = " ";
  for (var i = 4; i >= 0; i--){       
    randomFortune = cloneList.splice(Math.floor(Math.random() * (i + 1)), 1); //(i + 1) ensures 5 values are returned since the last value in math.random is excluded
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
/*
var heightCount = 0;
must be seperate and increase OUTSIDE of function, determines div height (dynamicDiv)
^^^^^^^^
This was put here to make div size increase as the fortune list gets longer
*/
function anotherFortune(){ //this should run only after the first fortune is produce
  var cookieText = document.getElementById("fortune-cookie-text"); //this variable MUST go before nodethree otherwise if declared after, nodethree won't recognize variable
  //appends text from "fortune-cookie-text" to "previous-fortunes", this must be run first before adding new text from tempCache
  var nodethree = document.createElement("LI");
  nodethree.appendChild(cookieText.lastChild); 
  document.getElementById("previous-fortunes").appendChild(nodethree);

  /*
  //this increases div height as list increases
  var dynamicDiv = document.getElementById("other-fortunes-div");
  var height = dynamicDiv.clientHeight; //client height is div height minus padding
  heightCount++
  //console.log(heightCount);
  if(heightCount >= 2 && height < 250){
    dynamicDiv.style.height = height - 5 + "px";
  }
  if(dynamicDiv.style.height == 250 + "px"){
    dynamicDiv.style.overflow = "auto";
  }

  code above does not need to be added as long as div height for "other-fortunes-div" is not set to anything, only the max height is needed to indicate at what height the scroll bar is needed
  */

  //button counter
  count++
  //console.log(count);
  if(count == max){ //once it runs out of fortunes, it will regenerate a new list
    generateFortuneCookie();
    count = 0; //resets count back to zero
    stats();
    pieChart();
    var nodetwo = tempCache.lastChild; //this needs to be here to prevent errors, will cause error on console
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
function stats(){
  var totalFortunes = document.getElementById("other-fortunes-div").getElementsByTagName("LI").length; //can console.log to check it counts all previously generated fortunes
  var data = document.getElementById("previous-fortunes");
  var dataLast = data.lastChild.innerText;
  if(dataLast.includes("2mrrw")){  
    fortuneOneTotal++ //console.log(fortuneOneTotal); //use to test if conditional works
  }
  if(dataLast.includes("dollar")){
    fortuneTwoTotal++
  }
  if(dataLast.includes("poor")){
    fortuneThreeTotal++  
  }
  if(dataLast.includes("cliff")){
    fortuneFourTotal++   
  }
  if(dataLast.includes("Batman")){
    fortuneFiveTotal++  
  }
  //calculates percent below and creates a phrase
  //percent for fortune one
  var percentOne = ((fortuneOneTotal / totalFortunes) * 100);
  var phraseOne = "% of the fortunes generated say you will " + fortunesList[0] + ".";

  //percent for fortune two
  var percentTwo = ((fortuneTwoTotal / totalFortunes) * 100);
  var phraseTwo = "% of the fortunes generated say you will " + fortunesList[1] + ".";

  //percent for fortune three
  var percentThree = ((fortuneThreeTotal / totalFortunes) * 100);
  var phraseThree = "% of the fortunes generated say you will " + fortunesList[2] + ".";

  //percent for fortune four
  var percentFour = ((fortuneFourTotal / totalFortunes) * 100);
  var phraseFour = "% of the fortunes generated say you will " + fortunesList[3] + ".";

  //percent for fortune five
  var percentFive = ((fortuneFiveTotal / totalFortunes) * 100);
  var phraseFive = "% of the fortunes generated say you will " + fortunesList[4] + ".";

  //this below prevents fortune percents from showing if not generated yet
  //if the fortune HAS been generated, it displays its percent in a phrase
  //fortune one
  if(fortuneOneTotal == 0){
    document.getElementById("one").innerText = " ";
  }
  if(fortuneOneTotal > 0){
    document.getElementById("one").innerText = Math.round(percentOne) + phraseOne;
  }
  //fortune two
  if(fortuneTwoTotal == 0){
    document.getElementById("two").innerText = " ";
  }
  if(fortuneTwoTotal > 0){
    document.getElementById("two").innerText = Math.round(percentTwo) + phraseTwo;
  }
  //fortune three
  if(fortuneThreeTotal == 0){
    document.getElementById("three").innerText = " ";
  }
  if(fortuneThreeTotal > 0){
    document.getElementById("three").innerText = Math.round(percentThree) + phraseThree;
  }
  //fortune four
  if(fortuneFourTotal == 0){
    document.getElementById("four").innerText = " ";
  }
  if(fortuneFourTotal > 0){
    document.getElementById("four").innerText = Math.round(percentFour) + phraseFour; 
  }
  //fortune five
  if(fortuneFiveTotal == 0){
    document.getElementById("five").innerText = " ";
  }
  if(fortuneFiveTotal > 0){
    document.getElementById("five").innerText = Math.round(percentFive) + phraseFive;
  }
}

//Pie Chart
//http://stackoverflow.com/questions/6995797/html5-canvas-pie-chart
function pieChart(){
  var canvas = document.getElementById("pie");
  var context = canvas.getContext("2d");
  var lastend = 0;
  var data = [fortuneOneTotal, fortuneTwoTotal, fortuneThreeTotal, fortuneFourTotal, fortuneFiveTotal];
  var total = 0;
  var color = ['aquamarine', 'palegreen', 'paleturquoise', 'red', 'peru'];

  for(var z = 0; z < data.length; z++){
    total += data[z];
  }

  for(var y = 0; y < data.length; y++){
    context.fillStyle = color[y];
    context.beginPath();
    context.moveTo(canvas.width/2,canvas.height/2);
    context.arc(canvas.width/2,canvas.height/2,canvas.height/2,lastend,lastend+(Math.PI*2*(data[y]/total)), false);
    context.lineTo(canvas.width/2,canvas.height/2);
    context.stroke();
    context.strokeStyle = "white";
    context.lineWidth = 3;
    context.fill();
    lastend += Math.PI*2*(data[y]/total);
  }
}

/*
function pieChart(){
  //pie chart of fortunes
  var data = document.getElementById("previous-fortunes");
  var dataLast = data.lastChild.innerText;
  if(dataLast == "You will die 2mrrw."){  
    console.log("does this work?");
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
*/

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