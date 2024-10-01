import './style.css'
import { projects } from "./data/projects";
import { createProjectCard } from "./components/ProjectCard";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main>
<h1>My projects</h1> 
<div id="projects-container" class="projects-container"></div>
</main>
`

const projectsContainer = document.querySelector<HTMLDivElement>('#projects-container')!;

projects.forEach(project => {
  const card = createProjectCard(project);
  projectsContainer.appendChild(card);
});