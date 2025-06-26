document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const vehicleSelect = document.getElementById("vehicle");
  const modelInput = document.getElementById("model");
  const previewImage = document.getElementById("vehiclePreview");

  modelInput.addEventListener("input", function () {
    const model = modelInput.value.toLowerCase().replace(/\s+/g, "");
    const type = vehicleSelect.value.toLowerCase();
    if (type && model) {
      const imgPath = `images/${type}${model}.jpg`;
      previewImage.onerror = () => previewImage.src = "";
      previewImage.src = imgPath;
    } else {
      previewImage.src = "";
    }
  });

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = localStorage.getItem("signedInUser");
    if (!user) {
      alert("❌ Please sign in to confirm booking.");
      return;
    }

    const bookingData = {
      name: document.getElementById("name").value,
      vehicleType: vehicleSelect.value,
      model: modelInput.value,
      date: document.getElementById("date").value,
      duration: document.getElementById("duration").value,
      paymentMethod: document.getElementById("payment").value,
    };

    let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    allBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    alert("✅ Booking confirmed!\n\n" +
      `Name: ${bookingData.name}\n` +
      `Vehicle: ${bookingData.vehicleType} - ${bookingData.model}\n` +
      `Date: ${bookingData.date}\n` +
      `Duration: ${bookingData.duration} day(s)\n` +
      `Payment: ${bookingData.paymentMethod}`
    );

    bookingForm.reset();
    previewImage.src = "";
  });
});
