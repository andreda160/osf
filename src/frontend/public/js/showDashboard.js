function showDashboard() {
  fetch("/session/info")
    .then(res => res.json())
    .then(data => {
      const dashboardDiv = document.getElementById("dashboard");
      if (!dashboardDiv) return;

      if (data.cargo === "admin") {
        dashboardDiv.classList.remove("is-hidden");
      }
    })
    .catch(err => {
      console.warn("Erro ao obter sessão:", err);
    });
}

window.showDashboard = showDashboard;
