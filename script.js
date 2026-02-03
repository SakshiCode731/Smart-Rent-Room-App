function calculateRent() {
  let roomtype = document.getElementById("roomtype").value;
  let roomsize = document.getElementById("roomsize").value;
  let location = document.getElementById("location").value;
  let privacy = document.getElementById("privacy").value;

  if(roomsize ==="" || <=0){
    alert("Please enter a valid room size.");
    return;
  }
  roomsize = Number(roomsize);

  let pricepersqft = 0;

  if(roomtype === "single") pricepersqft = 8;
  else if(roomtype === "1bhk") pricepersqft = 12;
  else if(roomtype === "2bhk") pricepersqft = 15;
  else if(roomtype === "3bhk") pricepersqft = 18;
  else if(roomtype === "4bhk") pricepersqft = 22;
}

let baseRent = roomsize * pricepersqft;

let locationCharge = 0;
if(location === "main") locationCharge = 3000;
else if (location === "near") locationCharge = 2000;
else if (location === "far") locationCharge = 1000;

let privacyCharge = 0;
if (privacy === "high") privacyCharge = 2500;
else if (privacy === "medium") privacyCharge = 1000;
