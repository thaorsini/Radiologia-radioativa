// Selectors
const navLinks = document.querySelectorAll('nav a');
const calculadoraSection = document.querySelector('.calculadora');
const artigosSection = document.querySelector('.artigos');
const radiationTherapySection = document.querySelector('.radiation-therapy');
const resourcesSection = document.querySelector('.resources');
const aboutUsSection = document.querySelector('.about-us');

// Add event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(`.${link.getAttribute('href').replace('#', '')}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


// Add event listeners to section headings
const sectionHeadings = document.querySelectorAll('h2');
sectionHeadings.forEach(heading => {
  heading.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = heading.parentNode;
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Calculadora
const calculadoraImages = document.querySelectorAll('.diagnostic-imaging img');
calculadoraImages.forEach(image => {
  image.addEventListener('click', event => {
    event.preventDefault();
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-modal">Close</button>
    `;
    document.body.appendChild(modal);
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', event => {
      event.preventDefault();
      modal.remove();
    });
  });
});

// Artigos
const artigosImages = document.querySelectorAll('.artigos img');
artigosImages.forEach(image => {
  image.addEventListener('click', event => {
    event.preventDefault();
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-modal">Close</button>
    `;
    document.body.appendChild(modal);
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', event => {
      event.preventDefault();
      modal.remove();
    });
  });
});
