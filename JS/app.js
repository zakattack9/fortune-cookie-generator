console.log("JS is Linked Properly");

function generateFortuneCookie(){
  var cookieText = document.getElementById("fortune-cookie-text");
  var fortunesList = ["die 2mrrw", "find a dollar", "become poor", "jump off a cliff", "turn into Batman"];

  for (var i = 0; i <= 4; i++){
  console.log("You will " + fortunesList[Math.floor(Math.random() * fortunesList.length)] + ".");
  }
  document.getElementById("cookieText").innerText;

  var node = document.createElement("LI");
  var textnode = document.createTextNode();
  node.appendChild(textnode);
  document.getElementById("previous-fortunes").appendChild(node);
}