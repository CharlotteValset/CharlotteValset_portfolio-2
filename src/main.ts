import "./style.css";
import { projects } from "./data/projects";
import { createProjectCard } from "./components/ProjectCard";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main>
<h1 class="shadows-into-light-regular">My projects</h1> 
<div id="projects-container" class="projects-container"></div>
</main>
`

const projectsContainer = document.querySelector<HTMLDivElement>('#projects-container')!;

projects.forEach(project => {
  const card = createProjectCard(project);

  const descriptionContainer = card.querySelector<HTMLDivElement>('.description-container')!;

  if (descriptionContainer) {
    card.addEventListener("mouseenter", () => {
      descriptionContainer.style.height = `${descriptionContainer.scrollHeight}px`;
    });

    card.addEventListener("mouseleave", () => {
      descriptionContainer.style.height = "0";
    });
  }

  projectsContainer.appendChild(card);
});