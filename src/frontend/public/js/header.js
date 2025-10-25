function loadPartial(id, url, callback) {
    console.log(`[loadPartial] Iniciando carregamento do partial: ${url}`);
    fetch(url)
      .then(res => {
        console.log(`[loadPartial] Resposta recebida para ${url}: status ${res.status}`);
        return res.text();
      })
      .then(html => {
        const container = document.getElementById(id);
        if (container) {
          container.innerHTML = html;
          console.log(`[loadPartial] Conteúdo inserido no elemento #${id}`);
        } else {
          console.warn(`[loadPartial] Elemento com id #${id} não encontrado no DOM`);
        }
        if (callback) {
          console.log(`[loadPartial] Executando callback após inserir ${url}`);
          callback();
        }
      })
      .catch(err => {
        console.error(`[loadPartial] Erro ao carregar ${url}:`, err);
      });
  }
  
  function setupHeaderButton() {
    console.log("[setupHeaderButton] Iniciando configuração do botão");
    const btn = document.getElementById("header-action-btn");
    const path = window.location.pathname;
  
    if (!btn) {
      console.warn("[setupHeaderButton] Botão #header-action-btn NÃO encontrado no DOM");
      return;
    }
    console.log("[setupHeaderButton] Botão encontrado no DOM");
  
    const buttonMap = {
      "/home": {
        text: "Login",
        classAdd: "bg-success",
        classRemove: "bg-danger",
        action: () => (window.location.href = "/auth"),
        visible: true,
      },
      "/auth": {
        visible: false,
      },
    };
  
    let config = {
      text: "Logout",
      classAdd: "bg-danger",
      classRemove: "bg-success",
      action: () => (window.location.href = "/home"),
      visible: true,
    };
  
    if (buttonMap[path]) {
      console.log(`[setupHeaderButton] Configuração específica para a rota: ${path}`);
      config = { ...config, ...buttonMap[path] };
    } else {
      console.log(`[setupHeaderButton] Usando configuração padrão para a rota: ${path}`);
    }
  
    btn.style.display = config.visible ? "inline-block" : "none";
  
    if (config.visible) {
      console.log(`[setupHeaderButton] Ajustando botão: texto="${config.text}"`);
      btn.textContent = config.text;
      btn.classList.remove(config.classRemove);
      btn.classList.add(config.classAdd);
      btn.onclick = config.action;
    } else {
      console.log("[setupHeaderButton] Botão oculto nesta rota");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("[DOMContentLoaded] DOM carregado, iniciando carregamento dos partials");
    loadPartial("header-placeholder", "/public/partials/html/header.html", () => {
      console.log("[DOMContentLoaded] Header carregado, configurando botão");
      setupHeaderButton();
    });
    loadPartial("footer-placeholder", "/public/partials/html/footer.html");
  });
  