(function () {
  const config = window.CF_WEB_ANALYTICS || {};
  const token = typeof config.token === "string" ? config.token.trim() : "";

  if (!token || token === "REPLACE_WITH_CF_SITE_TOKEN") {
    return;
  }

  if (document.querySelector('script[src*="static.cloudflareinsights.com/beacon.min.js"]')) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
  document.head.appendChild(script);
})();
