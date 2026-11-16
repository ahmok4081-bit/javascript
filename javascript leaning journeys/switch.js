const day = "sunday"
switch (day) {
    case "Monday":
        console.log("Dating");
        break;
    case "Tuesday":
        console.log("go to the gym");
        break;
    case "Wendesday":
        console.log("visit home town");
        break;
    case "Thursday":
        console.log("went to battambong");
        break;
    case "Friday":
        console.log("enjoy my friday night");
        break;
    case "Saturday":
        console.log("go to watch football");
        break;
    case "sunday":
        console.log("prepare for monday");
    default:
        console.log("There is no such day");
}
for (var i = 1; i < 4; i++) {
  switch(i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}