const portfolioContainer = document.getElementById("portfolios");
works.forEach((item, index) => {
    const hoverHTML = item.dialog === true ? `\n            <div class="hover-items">\n                <h3>Tap to open</h3>\n            </div>` : ``;

    const portfolioHTML = `
                <div class="portfolio-item" data-index="${index}" style="cursor: ${item.dialog === true ? "pointer" : "default"};">
                        <div class="image">
                                <img src="${item.img}" alt="">
                        </div>${hoverHTML}
                </div>
        `;

    portfolioContainer.innerHTML += portfolioHTML;
});

const personalWorksContainer = document.getElementById("personal-works");
personalWorks.forEach((item, index) => {
    const hoverHTML = item.dialog === true ? `\n            <div class="hover-items">\n                <h3>Tap to open</h3>\n            </div>` : ``;

    const portfolioHTML = `
                <div class="portfolio-item" data-index="${index}" style="cursor: ${item.dialog === true ? "pointer" : "default"};">
                        <div class="image">
                                <img src="${item.img}" alt="">
                        </div>${hoverHTML}
                </div>
        `;

    personalWorksContainer.innerHTML += portfolioHTML;
});
