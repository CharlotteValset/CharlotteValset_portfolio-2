import headshot from '../assets/images/headshot.jpg';

export const Hero = (): void => {
  const heroContainer: HTMLElement | null = document.querySelector<HTMLDivElement>('#hero');
  if (!heroContainer) {
    console.error('#hero element not found in the DOM');
    return;
  }

  const heroWrapper = document.createElement('div');
  heroWrapper.classList.add('heroWrapper');
  heroContainer.appendChild(heroWrapper);

  const heroImg = document.createElement('img');
  heroImg.src = headshot;
  heroImg.alt = 'Charlotte Valset';
  heroImg.classList.add('heroImg');
  heroWrapper.appendChild(heroImg);

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('textWrapper');
  heroWrapper.appendChild(textWrapper);

  const heroText = document.createElement('h1');
  heroText.classList.add('heroText');
  heroText.textContent = 'Charlotte Valset';
  textWrapper.appendChild(heroText);

  const heroSubText = document.createElement('h3');
  heroSubText.classList.add('heroSubText');
  heroSubText.textContent = 'Front End Developer';
  textWrapper.appendChild(heroSubText);

  const heroSubText2 = document.createElement('h3');
  heroSubText2.classList.add('heroSubText');
  heroSubText2.textContent = 'UX Designer';
  textWrapper.appendChild(heroSubText2);

  const contactLink = document.createElement('a');
  contactLink.classList.add('contactLinkHero');
  contactLink.textContent = '< Get in touch >';
  contactLink.href = 'mailto:charlottevalset@gmail.com';
  textWrapper.appendChild(contactLink);
};