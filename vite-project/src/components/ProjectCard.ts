import { Project } from "../data/projects";

export const createProjectCard = (project: Project): HTMLElement => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = project.imageUrl;
  cardImage.alt = project.title;
  card.appendChild(cardImage);

  const title = document.createElement("h2");
  title.textContent = project.title;
  title.classList.add("shadows-into-light-regular");
  card.appendChild(title);

  project.description.forEach((paragraph) => {
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = paragraph;
    card.appendChild(descriptionParagraph);
  });

  const linkContainer = document.createElement("div");
  linkContainer.classList.add("link-container");
  card.appendChild(linkContainer);

  const linkWebsite = document.createElement("a");
  linkWebsite.textContent = "Website";
  linkWebsite.href = project.linkWebsite;
  linkWebsite.target = "_blank";
  linkContainer.appendChild(linkWebsite);

  const linkGithub = document.createElement("a");
  linkGithub.textContent = "GitHub";
  linkGithub.href = project.linkGithub;
  linkGithub.target = "_blank";
  linkContainer.appendChild(linkGithub);

  return card;
}