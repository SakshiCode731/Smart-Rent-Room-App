let rooms = [
  {id:1,type:"Single",price:4000,location:"Near College",available:true,img:"singleroom.jpg"},
  {id:2,type:"1BHK",price:7000,location:"Main Road",available:true},
  {id:3,type:"2BHK",price:10000,location:"City Center",available:true}
];

let saved = localStorage.getItem("rooms");
if(saved){
  rooms = JSON.parse(saved);
}

function showRooms(){
  let output = "";

  rooms.forEach(room=>{
    output += `
      <div class="room">
        <h3>${room.type}</h3>
        <p>₹${room.price}</p>
        <p>${room.location}</p>
        <button onclick="bookRoom(${room.id})">
          ${room.available ? "Book Now" : "Not Available"}
        </button>
      </div>
    `;
  });

  document.getElementById("rooms").innerHTML = result;
}

showRooms();

function bookRoom(id){
  let room = rooms.find(r=>r.id===id);
  room.available = false;

  localStorage.setItem("rooms",JSON.stringify(rooms));

  alert("Room Booked!");
  showRooms();
}


function calculateRent() {
  let roomtype = document.getElementById("roomtype").value;
  let roomsize = document.getElementById("roomsize").value;
  let location = document.getElementById("location").value;
  let privacy = document.getElementById("privacy").value;

  if(roomsize ==="" || roomsize <=0){
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


let baseRent = roomsize * pricepersqft;

let locationCharge = 0;
if(location === "main") locationCharge = 3000;
else if (location === "near") locationCharge = 2000;
else if (location === "far") locationCharge = 1000;

let privacyCharge = 0;
if (privacy === "high") privacyCharge = 2500;
else if (privacy === "medium") privacyCharge = 1000;

let totalRent = baseRent + locationCharge + privacyCharge;

document.getElementById("result").innerHTML = `Area: ${roomsize} sqft<br>
Base Rent: ₹${baseRent}<br>
Location Charges: ₹${locationCharge}<br>
Privacy Charges: ₹${privacyCharge}<br>
<strong>Total Rent: ₹${totalRent}</strong>`;

let img = document.getElementById("roomImage");

img.style.display = "block"; // show image

if (roomtype === "single") img.src = "image12.jpg";
else if (roomtype === "1bhk") img.src = "1bhk.jpg";
else if (roomtype === "2bhk") img.src = "2bhk.jpg";
else if (roomtype === "3bhk") img.src = "3bhk.jpg";
else if (roomtype === "4bhk") img.src = "4bhk.jpg";
else if (roomtype === "5bhk") img.src = "5bhk.jpg";

}