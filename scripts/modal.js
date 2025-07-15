const container = document.querySelector(".portfolios");
const modal = document.getElementById("portfolioModal");
const closeModalBtn = document.querySelector(".close-btn");

// Modal Elements
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");

// Open Modal on Click
container.addEventListener("click", (e) => {
  const item = e.target.closest(".portfolio-item");
  if (!item) return;

  const index = item.dataset.index;
  const project = works[index];

  // Set basic info
  modalImage.src = project.img;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalLink.href = project.link;

  // Render Features
  modalFeatures.innerHTML = "";
  project.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  // Render Technologies Grouped
  modalTech.innerHTML = "";
  for (const [category, tools] of Object.entries(project.tech)) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${category}:</strong> ${tools.join(", ")}`;
    modalTech.appendChild(p);
  }

  modal.classList.add("active");
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
