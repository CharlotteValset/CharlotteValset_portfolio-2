export const TechStack = (): void => {
  const techStackContainer: HTMLElement | null = document.querySelector('#techStack');

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

  const techstack = ['Figma', 'Visual Studio Code', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript', 'React', 'Wordpress', 'Rest API'];
  techstack.forEach((tech) => {
    const techStackItem = document.createElement('li');
    techStackItem.classList.add('techStackItem');
    techStackItem.textContent = tech;
    techStackList.appendChild(techStackItem);
  }, techStackList);

  const techstackLearning = ['TypeScript (ongoing)', 'Python (ongoing)'];
  techstackLearning.forEach((tech) => {
    const techStackLearningItem = document.createElement('li');
    techStackLearningItem.classList.add('techStackLearningItem');
    techStackLearningItem.textContent = tech;
    techStackList.appendChild(techStackLearningItem);
  }, techStackList);

};