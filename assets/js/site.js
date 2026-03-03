(function () {
  const pages = [
    { href: "index.html", label: "Início", key: "index" },
    { href: "suporte.html", label: "Suporte", key: "suporte" },
    { href: "termos.html", label: "Termos", key: "termos" },
    { href: "cookies.html", label: "Cookies", key: "cookies" },
    { href: "privacidade.html", label: "Privacidade", key: "privacidade" },
    { href: "funcionalidades.html", label: "Funcionalidades", key: "funcionalidades" }
  ];

  function currentKey() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (file === "" || file === "/") return "index";
    if (file.startsWith("index")) return "index";
    if (file.startsWith("suporte")) return "suporte";
    if (file.startsWith("termos")) return "termos";
    if (file.startsWith("cookies")) return "cookies";
    if (file.startsWith("privacidade")) return "privacidade";
    if (file.startsWith("funcionalidades")) return "funcionalidades";
    return "index";
  }

  function navHtml() {
    const key = currentKey();
    return pages.map(p => {
      const current = (p.key === key) ? ' aria-current="page"' : "";
      return `<a href="${p.href}"${current}>${p.label}</a>`;
    }).join("");
  }

  function footerLinksHtml() {
    // No teu print do rodapé aparecem estes 5:
    const links = [
      { href: "index.html", label: "Início" },
      { href: "suporte.html", label: "Suporte" },
      { href: "termos.html", label: "Termos" },
      { href: "cookies.html", label: "Cookies" },
      { href: "privacidade.html", label: "Privacidade" },
      { href: "funcionalidades.html", label: "Funcionalidades" }
    ];
    return links.map(l => `<a href="${l.href}">${l.label}</a>`).join("");
  }

  function injectHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;

    el.innerHTML = `
      <div class="site-top">
        <div class="topbar">
          <a class="brand" href="index.html" aria-label="Ponto Zero">
            <span class="title">Ponto Zero</span>
            <span class="tag">Site oficial</span>
          </a>
          <nav class="nav" aria-label="Navegação">
            ${navHtml()}
          </nav>
        </div>
      </div>
    `;
  }

  function injectFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;

    const year = new Date().getFullYear();
    el.innerHTML = `
      <div class="site-footer">
        <div class="footer-inner">
          <div>© ${year} Ponto Zero — Portugal</div>
          <div class="footer-links">
            ${footerLinksHtml()}
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectHeader();
    injectFooter();
  });
})();