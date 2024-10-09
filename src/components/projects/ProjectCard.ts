import { Project } from "../../data/projects";

const createCardImage = (project: Project): HTMLImageElement => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = project.imageUrl;
  cardImage.alt = project.title;
  cardImage.loading = "lazy";
  return cardImage;
};

const createCardTitle = (project: Project): HTMLHeadingElement => {
  const title = document.createElement("h3");
  title.textContent = project.title;
  title.classList.add("shadows-into-light-regular");
  return title;
};

const createDescriptionContainer = (project: Project): HTMLDivElement => {
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  project.description.forEach((paragraph) => {
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = paragraph;
    descriptionContainer.appendChild(descriptionParagraph);
  });

  return descriptionContainer;
};

const createLinkContainer = (project: Project): HTMLDivElement => {
  const linkContainer = document.createElement("div");
  linkContainer.classList.add("link-container");

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

  return linkContainer;
};


export const createProjectCard = (project: Project): HTMLElement => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.appendChild(createCardImage(project));
  card.appendChild(createCardTitle(project));

  const descriptionContainer = createDescriptionContainer(project);
  const linkContainer = createLinkContainer(project);
  descriptionContainer.appendChild(linkContainer);
  card.appendChild(descriptionContainer);

  return card;
};