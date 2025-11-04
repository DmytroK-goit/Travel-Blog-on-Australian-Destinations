(function () {
  const logoSvg = `
    <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="100%" height="100%" fill="#003244" rx="8"/>
      <text x="32" y="38" font-size="20" fill="#ffd166" font-family="Arial" text-anchor="middle">TC</text>
    </svg>
  `;

  function getPathPrefix() {
    return "./";
  }

  const p = getPathPrefix();

  const headerHtml = `
  <header class="header" role="banner">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;">
      <div class="logo" aria-hidden="false">
        <a href="${p}" style="display:flex;align-items:center;gap:.5rem;text-decoration:none;color:inherit;">
          ${logoSvg}
          <div style="font-size:14px">
            <strong>Travel Crown</strong>
            <div style="font-size:11px;color:#596f7f">Australian Destinations</div>
          </div>
        </a>
      </div>
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <a href="${p}#latest">Latest</a>
        <a href="${p}travel-guides.html">Travel Guides</a>
        <a href="${p}photo-stories.html">Photo Stories</a>
        <a href="${p}terms.html">Terms</a>
      </nav>
    </div>
  </header>`;

  const footerHtml = `
  <footer class="footer" role="contentinfo">
    <div class="container" style="display:flex;flex-direction:column;gap:.5rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div><strong>Travel Crown</strong> — Australia</div>
        <div><a href="${p}privacy.html">Privacy</a> &nbsp;|&nbsp; <a href="${p}cookie-policy.html">Cookie Policy</a></div>
      </div>
      <div style="font-size:.9rem;color:#e6f6ff">© <span id="year"></span> Travel Crown</div>
    </div>
  </footer>`;

  const hp = document.getElementById("header-placeholder");
  const fp = document.getElementById("footer-placeholder");

  if (hp) hp.innerHTML = headerHtml;
  if (fp) fp.innerHTML = footerHtml;

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
