(function () {
  const key = "travelcrown_cookie_accepted_v1";
  if (localStorage.getItem(key) === "1") return;
  const bar = document.createElement("div");
  bar.className = "cookiebar";
  bar.innerHTML = `<div>We use minimal local data to improve your visit. By accepting, you agree to our Cookie Policy.</div><div><button id='cookie-accept'>Accept</button></div>`;
  document.body.appendChild(bar);
  document
    .getElementById("cookie-accept")
    .addEventListener("click", function () {
      localStorage.setItem(key, "1");
      bar.remove();
    });
})();
