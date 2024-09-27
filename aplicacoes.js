// Selectors
const navLinks = document.querySelectorAll('nav a');
const radiologiaSection = document.querySelector('.Radiologia');
const calculadoraSection = document.querySelector('.calculadora');
const artigosSection = document.querySelector('.artigos');

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

// Add interactive elements to radioogia section
const radiologiaSection = document.querySelectorAll('.Radiologia img');
RadiologiaImages.forEach(image => {
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

// calculadora section
const calculadoraImages = document.querySelectorAll('.calculadora img');
interventionalProceduresImages.forEach(image => {
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

// artigos section
const resourcesLinks = document.querySelectorAll('.artigos');
resourcesLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetResource = link.getAttribute('href');
    window.open(targetResource, '_blank');
  });
});