document.addEventListener("DOMContentLoaded", function () {
  console.log("📢 booking.js loaded!");

  const bookingForm = document.getElementById("bookingForm");
  const vehicleSelect = document.getElementById("vehicle");
  const modelInput = document.getElementById("model");
  const previewImage = document.getElementById("vehiclePreview");

  // Live preview of selected image
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

  // Form submission handler
  bookingForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("❌ Please sign in to confirm booking.");
      window.location.href = "signin.html";
      return;
    }

    // ✅ Field names must match your Java Booking.java model exactly
    const bookingData = {
      name: document.getElementById("name").value,
      vehicle: vehicleSelect.value,
      model: modelInput.value,
      date: document.getElementById("date").value,
      duration: document.getElementById("duration").value,
      payment: document.getElementById("payment").value
    };

    console.log("➡️ Booking payload:", bookingData);

    try {
      const response = await fetch("http://localhost:8080/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.text();

      document.getElementById("bookingMessage").textContent = "✅ Booking confirmed!";
      setTimeout(() => {
        document.getElementById("bookingMessage").textContent = "";
      }, 4000);

      bookingForm.reset();
      previewImage.src = "";

    } catch (error) {
      console.error("❌ Booking error:", error);
      alert("❌ Failed to confirm booking. Try again later.");
    }
  });
});
