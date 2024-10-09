import { projects } from "../../data/projects";
import { createProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  const projectContainer = document.querySelector<HTMLDivElement>('#projects');

  if (!projectContainer) {
    console.error('#hero element not found in the DOM');
    return;
  }

  const projectsHeading = document.createElement("h2");
  projectsHeading.textContent = "My Projects";
  projectsHeading.classList.add("projects-heading");
  projectContainer.appendChild(projectsHeading);

  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  projectsContainer.classList.add("projects-container");

  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });

  projectContainer.appendChild(projectsContainer);
  return projectContainer;
};