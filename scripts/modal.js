const mainContainer = document.getElementById("portfolios");
const personalContainer = document.getElementById("personal-works");
const modal = document.getElementById("portfolioModal");
const closeModalBtn = document.querySelector(".close-btn");

// Modal Elements
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");

// Helper to populate and show modal
function showProjectModal(project) {
  if (!project) return;

  modalImage.src = project.img || "";
  modalTitle.textContent = project.title || "";
  modalSubtitle.textContent = project.subtitle || "";
  modalDescription.textContent = project.description || "";
  modalLink.href = project.link || "#";

  // Render Features
  modalFeatures.innerHTML = "";
  (project.features || []).forEach((feature) => {
    const li = document.createElement("li");
    li.style.listStyle = "disc";
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  // Render Technologies Grouped
  modalTech.innerHTML = "";
  const tech = project.tech || {};
  for (const [category, tools] of Object.entries(tech)) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${category}:</strong> ${tools.join(", ")}`;
    modalTech.appendChild(p);
  }

  modal.classList.add("active");
}

// Attach click handlers for both containers
if (mainContainer) {
  mainContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".portfolio-item");
    if (!item) return;
    const index = item.dataset.index;
    const project = works && works[index];
    showProjectModal(project);
  });
}

if (personalContainer) {
  personalContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".portfolio-item");
    if (!item) return;
    const index = item.dataset.index;
    const project = personalWorks && personalWorks[index];
    showProjectModal(project);
  });
}

// Close Modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
