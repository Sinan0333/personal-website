const portfolioContainer = document.querySelector(".portfolios");

works.forEach((item, index) => {
  const portfolioHTML = `
        <div class="portfolio-item" data-index="${index}">
            <div class="image">
                <img src="${item.img}" alt="">
            </div>
            <div class="hover-items">
                <h3>Tap to open</h3>
            </div>
        </div>
    `;
  portfolioContainer.innerHTML += portfolioHTML;
});
