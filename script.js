let selectedSeats = [];
let selectedShow = "";

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
  const container = document.getElementById("seats");
  container.innerHTML = "";
  for (let i = 1; i <= 24; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;
    // Randomly mark some seats as booked
    if (Math.random() < 0.2) seat.classList.add("booked");
    seat.onclick = () => {
      if (seat.classList.contains("booked")) return;
      seat.classList.toggle("selected");
      if (selectedSeats.includes(i)) selectedSeats = selectedSeats.filter(s => s !== i);
      else selectedSeats.push(i);
      updateSeats();
    };
    container.appendChild(seat);
  }
}

function updateSeats() {
  document.getElementById("selected").innerText =
    selectedSeats.length > 0 ? "Selected Seats: " + selectedSeats.join(", ") : "Selected Seats: None";
}

function confirmBooking() {
  document.getElementById("seat").classList.add("d-none");
  const confirmDiv = document.getElementById("confirm");
  confirmDiv.classList.remove("d-none");
  confirmDiv.innerHTML = `
    <h2 class="fw-bold">🎉 Booking Confirmed!</h2>
    <p>${selectedShow}</p>
    <p>Seats: ${selectedSeats.join(", ")}</p>
    <p class="mt-3">Enjoy Your Movie!</p>
  `;
  confirmDiv.scrollIntoView({ behavior: "smooth" });
}
