export const footerNav = (): void => {
  const footerContainer: HTMLElement | null = document.querySelector<HTMLElement>('#footer');

  const footer = document.createElement("div");
  footer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © Designed & developed by Charlotte Valset";
  footerText.classList.add("footer-text");
  footer.appendChild(footerText);

  footerContainer?.append(footer);
}