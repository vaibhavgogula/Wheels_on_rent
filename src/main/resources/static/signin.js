// 🔁 Toggle between Login and Signup Forms
function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginMessage = document.getElementById("loginMessage");
  const signupMessage = document.getElementById("signupMessage");

  // Clear messages
  loginMessage.textContent = "";
  signupMessage.textContent = "";

  // Toggle visibility
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}

// 🔐 Login Handler
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const msgBox = document.getElementById("loginMessage");

  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: form.username.value,
      password: form.password.value
    })
  });

  if (res.ok) {
    const data = await res.json(); // Get token from response
    console.log("Login successful:", data);

    localStorage.setItem("token", data.token); // ✅ Save token

    msgBox.textContent = "Login successful!";
    msgBox.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    const errorMsg = await res.text();
    msgBox.textContent = errorMsg;
    msgBox.style.color = "red";
  }
});


// 📝 Signup Handler
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const msgBox = document.getElementById("signupMessage");

  const res = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: form.username.value,
      password: form.password.value
    })
  });

  const msg = await res.text();
  msgBox.textContent = msg;

  if (msg.trim() === "Registered successfully!") {
    msgBox.style.color = "green";

    // Switch to login after short delay
    setTimeout(() => {
      toggleForm();
      msgBox.textContent = "";
    }, 1500);
  } else {
    msgBox.style.color = "red";
  }
});
