// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let output;
  if (distance <= 400) {
    output = "This one is on me!";
  }
  else if (distance > 2500) {
    output = "No can do.";
  }
  else if (distance > 2000) {
    output = "I will gladly take your thirty bucks.";
  }
  return output;
}

function ternaryCheckCity(destination) {
  let output;
  destination == "NYC" ? output = "Ok, sounds good." : output = "No go.";
  return output;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default : response = "Bye."
  }
  return response;
}
