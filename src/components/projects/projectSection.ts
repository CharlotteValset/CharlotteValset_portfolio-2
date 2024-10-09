import { projects } from "../../data/projects";
import { createProjectCard } from "./ProjectCard";

export const createProjectSection = (): HTMLElement => {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.classList.add("shadows-into-light-regular");
  h2.id = "projects";
  h2.textContent = "My Projects";
  section.appendChild(h2);

  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  projectsContainer.classList.add("projects-container");

  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });

  section.appendChild(projectsContainer);
  return section;
};