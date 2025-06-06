// Dynamic service data for ASCOR Labs
const services = [
  {
    title: "iPSC-Derived Organoids",
    img: "assets/images/organoid.png",
    short: "Human-specific models developed from induced pluripotent stem cells.",
    details: `Our iPSC-derived organoids are miniaturized, three-dimensional human tissues grown from induced pluripotent stem cells. These organoids closely mimic the structure and function of real human organs, providing a powerful, ethical, and scalable alternative to animal models.\n\nApplications include disease modeling, drug screening, and personalized medicine. Each organoid is tailored to your research needs, ensuring high relevance and reproducibility.`
  },
  {
    title: "Custom Patient Models",
    img: "assets/images/patient.png",
    short: "Tailored organoid models for personalized medicine applications.",
    details: `We create patient-specific organoids using donor cells, enabling researchers to study disease mechanisms and drug responses in a truly personalized context.\n\nThese models are invaluable for rare disease research, precision medicine, and preclinical testing, helping to predict patient outcomes and accelerate the path to new therapies.`
  },
  {
    title: "Drug & Toxicity Testing",
    img: "assets/images/testing.png",
    short: "Accurate preclinical assessments reducing reliance on animal models.",
    details: `Our organoid-based drug and toxicity testing services provide more predictive, human-relevant data than traditional animal studies.\n\nWe offer high-throughput screening, dose-response analysis, and toxicity profiling, supporting safer and more effective drug development while reducing animal use.`
  },
  {
    title: "Partnership & Collaboration",
    img: "assets/images/collabrate.png",
    short: "Collaborative research opportunities and partnerships.",
    details: `ASCOR Labs partners with academic institutions, biotech companies, and pharmaceutical firms to advance organoid science.\n\nWe offer joint research projects, technology transfer, and custom service development. Let’s work together to accelerate innovation in biomedical research.`
  }
];

// Render service cards dynamically
function renderServiceCards(cardsContainer, services) {
  cardsContainer.innerHTML = '';
  services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${service.img}" alt="${service.title}">
      <h3>${service.title}</h3>
      <p>${service.short}</p>
      <button class="learn-more" data-index="${index}">Learn More</button>
    `;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
    detailsDiv.innerHTML = service.details.replace(/\n/g, '<br>');
    card.appendChild(detailsDiv);

    card.querySelector('.learn-more').addEventListener('click', function(e) {
      e.preventDefault();
      const allCards = document.querySelectorAll('.card');
      allCards.forEach((otherCard, i) => {
        if (i === index) {
          const isExpanded = otherCard.classList.contains('expanded');
          otherCard.classList.toggle('expanded', !isExpanded);
        } else {
          otherCard.classList.remove('expanded');
        }
      });
    });

    cardsContainer.appendChild(card);
  });
}

// Initialize rendering on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.getElementById('services-cards');
  if (cardsContainer) {
    renderServiceCards(cardsContainer, services);
  }
});
