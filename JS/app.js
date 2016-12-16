console.log("JS is Linked Properly");

function generateFortuneCookie(){
  var cookieText = document.getElementById("fortune-cookie-text");
  var fortunesList = ["die 2mrrw", "find a dollar", "become poor"];

  for (var i = 0; i <= 2; i++){
  console.log("You will " + fortunesList[i] + ".")
  
  var node = document.createElement("LI");
  var textnode = document.createTextNode();
  node.appendChild(textnode);
  document.getElementById("previous-fortunes").appendChild(node);
  }
}