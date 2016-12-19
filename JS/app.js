console.log("JS is Linked Properly");

function generateFortuneCookie(){
  var cookieText = document.getElementById("fortune-cookie-text");
  var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"];

  for (var i = 4; i >= 0; i--) {
    var random = fortunesList.splice(Math.floor(Math.random() * (i + 1)), 1)[0]; //(i + 1) ensures 5 values are returned since the last value in math.random is excluded
    console.log("You will " + random + ".");
  }

  document.getElementById("cookieText").innerText;

  var node = document.createElement("LI");
  var textnode = document.createTextNode();
  node.appendChild(textnode);
  document.getElementById("previous-fortunes").appendChild(node);
}




/*
Side Notes:

for (var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"], i = fortunesList.length; i--; ) {
    var random = fortunesList.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
} 

simplified version, not used due to lack of knowledge of how it works (go to "goo.gl/qwwbu7" for reference)
*/
