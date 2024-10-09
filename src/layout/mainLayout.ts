import { createProjectSection } from "../components/projects/projectSection";
import { Hero } from "../components/hero";

export const createMainLayout = (): HTMLElement => {
  const main = document.createElement("main");

  Hero();



  const projectSection = createProjectSection();
  main.appendChild(projectSection);

  return main;
};