export function createNavMenu(): HTMLElement | null {
  const headerContainer: HTMLElement | null = document.querySelector<HTMLElement>('#header');

  if (!headerContainer) {
    console.error('#header element not found in the DOM');
    return null;
  }

  const nav: HTMLElement = document.createElement('nav');

  const ul: HTMLUListElement = document.createElement('ul');
  ul.classList.add('nav-menu');

  const menuItems: { text: string, href: string, ariaCurrent?: string }[] = [
    { text: 'Home', href: '#', ariaCurrent: 'page' },
    { text: 'About me', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ];

  menuItems.forEach(item => {
    const li: HTMLLIElement = document.createElement('li');
    const a: HTMLAnchorElement = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;

    if (item.ariaCurrent) {
      a.setAttribute('aria-current', item.ariaCurrent);
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  headerContainer.appendChild(nav);

  return nav;
}