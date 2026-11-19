const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Optional GitHub API check: verifies that the featured repositories remain public.
// The portfolio remains usable if GitHub rate-limits anonymous requests.
const repositories = [
  "walmart-sales-forecasting",
  "Sephora-Products-Analysis",
  "boston-crime-hotspots",
  "Data-Analysis-with-Lorenz-Curve",
  "diabetes-prediction-ml-project"
];

async function checkGitHubProjects() {
  const status = document.querySelector("#githubStatus");
  try {
    const results = await Promise.all(repositories.map(async (repo) => {
      const response = await fetch(`https://api.github.com/repos/sncodeviz/${repo}`);
      if (!response.ok) throw new Error("GitHub API unavailable");
      return response.json();
    }));
    const publicCount = results.filter((repo) => !repo.private).length;
    status.textContent = `${publicCount} featured public repositories verified through the GitHub API. Repository cards link directly to GitHub for code and documentation.`;
  } catch {
    status.textContent = "Browse the featured projects directly on GitHub. Live repository verification is temporarily unavailable.";
  }
}

checkGitHubProjects();
