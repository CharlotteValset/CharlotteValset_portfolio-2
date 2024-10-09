export const Hero = () => {
  const heroContainer = document.querySelector<HTMLDivElement>('#hero');
  if (!heroContainer) {
    console.error('#hero element not found in the DOM');
    return;
  }

  const heroWrapper = document.createElement('div');
  heroWrapper.classList.add('heroWrapper');
  heroContainer.appendChild(heroWrapper);

  const heroImg = document.createElement('img');
  heroImg.src = "../../src/assets/images/headshot.jpg";
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

  const heroSubText = document.createElement('h2');
  heroSubText.classList.add('heroSubText');
  heroSubText.textContent = 'Front End Developer';
  textWrapper.appendChild(heroSubText);

  const heroSubText2 = document.createElement('h2');
  heroSubText2.classList.add('heroSubText');
  heroSubText2.textContent = 'UX Designer';
  textWrapper.appendChild(heroSubText2);

  const contactLink = document.createElement('a');
  contactLink.classList.add('contactLink');
  contactLink.textContent = '< Get in touch >';
  textWrapper.appendChild(contactLink);



};