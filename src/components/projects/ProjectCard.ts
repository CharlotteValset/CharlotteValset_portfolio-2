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

  if (project.linkWebsite) {
    const linkWebsite = document.createElement("a");
    linkWebsite.textContent = "Website";
    linkWebsite.href = project.linkWebsite;
    linkWebsite.target = "_blank";
    linkContainer.appendChild(linkWebsite);
  }

  if (project.linkGithub) {
    const linkGithub = document.createElement("a");
    linkGithub.textContent = "GitHub";
    linkGithub.href = project.linkGithub;
    linkGithub.target = "_blank";
    linkContainer.appendChild(linkGithub);
  }

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

  card.addEventListener("click", handleCardClick);

  return card;
};

const handleCardClick = (event: MouseEvent): void => {
  const targetCard = event.currentTarget as HTMLElement;

  if (!(targetCard instanceof HTMLElement)) return;

  if (targetCard.classList.contains("show-description")) {
    targetCard.classList.remove("show-description");
  } else {
    targetCard.classList.add("show-description");
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (!(targetCard.contains(e.target as Node))) {
      targetCard.classList.remove("show-description");
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  document.addEventListener("click", handleOutsideClick, { once: true });
};