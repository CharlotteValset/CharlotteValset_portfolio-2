export const TechStack = (): void => {
  const techStackContainer = document.querySelector('#techStack');

  if (!techStackContainer) {
    console.error('#techStack element not found in the DOM');
    return;
  }
  const techStackHeading = document.createElement('h2');
  techStackHeading.textContent = 'Tech Stack';
  techStackContainer.appendChild(techStackHeading);

  const techStackList = document.createElement('ul');
  techStackList.classList.add('techStackList');
  techStackContainer.appendChild(techStackList);

  const techstack = ['Figma', 'Visual Studio Code', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Wordpress', 'Rest API'];
  techstack.forEach((tech) => {
    const techStackItem = document.createElement('li');
    techStackItem.classList.add('techStackItem');
    techStackItem.textContent = tech;
    techStackList.appendChild(techStackItem);
  }, techStackList);

};