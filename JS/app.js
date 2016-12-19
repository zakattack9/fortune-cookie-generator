console.log("JS is Linked Properly");

function generateFortuneCookie(){
  var cookieText = document.getElementById("fortune-cookie-text");
  var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"];
  //randomizer for fortunes
  var randomFortune = " ";

  for (var i = 4; i >= 0; i--) {
    randomFortune = fortunesList.splice(Math.floor(Math.random() * (i + 1)), 1); //(i + 1) ensures 5 values are returned since the last value in math.random is excluded
    console.log("You will " + randomFortune + ".");
    
    //temporarily stores random list
    var tempCache = document.getElementById("fortune-cache");
    var node = document.createElement("UL");
    node.innerText = "You will " + randomFortune + "."
    tempCache.appendChild(node);
  }

  //appends first fortune from "fortune-cache" into "fortune-cookie-text"
  node = tempCache.lastChild;
  cookieText.appendChild(node); //remember "cookieText" is short for document.getElementById("fortune-cookie-text")
}

/*
function previousFortunes(){
  var prev = document.createElement("LI");
  prev.appendChild(cookieText);
  document.getElementById("previous-fortunes").appendChild(prev);
}

this should run after first fortune is produced
*/
/*
Side Notes:

for (var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"], i = fortunesList.length; i--; ) {
    var random = fortunesList.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
} 

simplified version, not used due to lack of knowledge of how it works (go to "goo.gl/qwwbu7" for reference)
*/