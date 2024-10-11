import "./style.css";
import { createNavMenu } from "./components/nav/headerNav";
import { footerNav } from "./components/nav/footerNav";
import { createMainLayout } from "./layout/mainLayout";

const appContainer: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#app");

if (appContainer) {
  const mainLayout = createMainLayout();

  if (mainLayout) {
    appContainer.appendChild(mainLayout);
  } else {
    console.error("Failed to create main layout.");
  }
} else {
  console.error("#app element not found in the DOM");
}

createNavMenu();
footerNav();