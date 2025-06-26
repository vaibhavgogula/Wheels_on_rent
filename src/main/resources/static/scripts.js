  // Handle Book Now buttons
  document.querySelectorAll('.book-btn-bike, .book-btn-car').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = "booking.html";
    });
  });
document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const bikes = document.querySelectorAll(".card-bikes");
    const cars = document.querySelectorAll(".card-cars");

    bikes.forEach(card => {
        const name = card.querySelector(".bike-name").textContent.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
    });

    cars.forEach(card => {
        const name = card.querySelector(".car-name").textContent.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
    });
});
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.text();
  alert(data);
});
