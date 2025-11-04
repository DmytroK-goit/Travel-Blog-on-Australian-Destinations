(function () {
  const form = document.getElementById("subscribe-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput =
      form.querySelector("input[name=email]") ||
      form.querySelector("input[type=email]");
    const email = emailInput?.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const subs = JSON.parse(localStorage.getItem("travelcrown_subs") || "[]");

    const exists = subs.some((s) => s.email === email);
    if (exists) {
      alert("You are already subscribed!");
      return;
    }

    subs.push({ email, date: new Date().toISOString() });
    localStorage.setItem("travelcrown_subs", JSON.stringify(subs));

    form.innerHTML =
      '<p class="success">✅ Thanks for subscribing to the Crown Series!</p>';

    console.log("Travel Crown main.js loaded and subscription saved");
  });

  console.log("Travel Crown main.js loaded");
})();
