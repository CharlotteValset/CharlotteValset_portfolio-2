import { ProjectSection } from "../components/projects/projectSection";
import { Hero } from "../components/hero";
import { AboutMe } from "../components/aboutme";
import { TechStack } from "../components/techStack";
import { Contact } from "../components/contact";

export const createMainLayout = (): HTMLElement => {
  const main = document.createElement("main");

  Hero();

  AboutMe();

  TechStack();

  ProjectSection();

  Contact();

  return main;
};