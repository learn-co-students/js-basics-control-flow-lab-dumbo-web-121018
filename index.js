// Write your code in this file!
function scuberGreetingForFeet(x){
  if (x <= 400) {
    return 'This one is on me!';
  } else if (x > 2500) {
    return 'No can do.';
  } else if (x >=2000 ){
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  switch (true) {
    case tip === 'generous':
      return "Thank you so much.";
      break;
    case tip === 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
