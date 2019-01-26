// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let message;

  if (someValue <= 400) {
    message = "This one is on me!";
  } else if (1999 < someValue && someValue < 2500) {
    message = "I will gladly take your thirty bucks.";
  } else {
    message = "No can do.";
  }

  return message;
}

function ternaryCheckCity(cityName) {
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
