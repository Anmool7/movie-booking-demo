let selectedSeats = [];
let selectedShow = "";

function goToMovies() {
  document.getElementById("city").classList.add("d-none");
  document.getElementById("movies").classList.remove("d-none");
}

function goToTheatre() {
  document.getElementById("movies").classList.add("d-none");
  document.getElementById("theatre").classList.remove("d-none");
}

function selectShow(show) {
  selectedShow = show;

  document.getElementById("theatre").classList.add("d-none");
  document.getElementById("seat").classList.remove("d-none");

  generateSeats();
}

function generateSeats() {
  let container = document.getElementById("seats");
  container.innerHTML = "";

  for (let i = 1; i <= 24; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;

    seat.onclick = () => {
      seat.classList.toggle("selected");

      if (selectedSeats.includes(i)) {
        selectedSeats = selectedSeats.filter(s => s !== i);
      } else {
        selectedSeats.push(i);
      }

      updateSeats();
    };

    container.appendChild(seat);
  }
}

function updateSeats() {
  document.getElementById("selected").innerText =
    selectedSeats.length > 0
      ? "Selected Seats: " + selectedSeats.join(", ")
      : "Selected Seats: None";
}

function confirmBooking() {
  document.getElementById("seat").classList.add("d-none");
  document.getElementById("confirm").classList.remove("d-none");

  document.getElementById("confirm").innerHTML = `
    <h2>✅ Booking Confirmed</h2>
    <p>${selectedShow}</p>
    <p>Seats: ${selectedSeats.join(", ")}</p>
  `;
}
