function basicTeenager(age) {
if (age <= 19 && age >= 13) {return "You are a teenager!"}
}

function teenager(age) {
  if (age <= 19 && age >= 13) {return "You are a teenager!"}
  else {return "You are not a teenager"}
}

function ageChecker(age) {
  if (age <= 19 && age >= 13) {return "You are a teenager!"}
else if (age <= 12) {return "You are a kid"}
  else {return "You are a grownup"}
}

function ternaryTeenager(age) {
return (age <= 19 && age >= 13) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case "13":
    console.log("You are a teenager");
        case "14":
        console.log("You are a teenager");
        case "15":
        console.log("You are a teenager");
          case "16":
          console.log("You are a teenager");
            case "17":
            console.log("You are a teenager");
              case "18":
              console.log("You are a teenager");
                case "19":
                console.log("You are a teenager");
    default:
    console.log("You have an age")
  }
}
