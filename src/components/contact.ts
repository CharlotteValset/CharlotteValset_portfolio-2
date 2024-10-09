export const Contact = () => {
  const contactContainer = document.querySelector<HTMLDivElement>('#contact');
  if (!contactContainer) {
    console.error('#contact element not found in the DOM');
    return;
  }

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contactWrapper');
  contactContainer.appendChild(contactWrapper);

  const contactHeading = document.createElement('h2');
  contactHeading.classList.add('contactHeading');
  contactHeading.textContent = 'Contact me';
  contactWrapper.appendChild(contactHeading);

  const contactLinkWrapper = document.createElement('div');
  contactLinkWrapper.classList.add('contactLinkWrapper');
  contactWrapper.appendChild(contactLinkWrapper);

  const contactLink = document.createElement('a');
  contactLink.classList.add('contactLink');
  contactLink.textContent = 'Email';
  contactLink.href = 'mailto: charlottevalset@gmail.com';
  contactLinkWrapper.appendChild(contactLink);

  const contactLink2 = document.createElement('a');
  contactLink2.classList.add('contactLink');
  contactLink2.textContent = 'LinkedIn';
  contactLink2.href = 'https://www.linkedin.com/in/charlotte-valset-6195b521a/';
  contactLink2.target = '_blank';
  contactLink2.rel = 'noopener noreferrer';
  contactLinkWrapper.appendChild(contactLink2);

  const contactLink3 = document.createElement('a');
  contactLink3.classList.add('contactLink');
  contactLink3.textContent = 'GitHub';
  contactLink3.href = 'https://github.com/CharlotteValset';
  contactLink3.target = '_blank';
  contactLink3.rel = 'noopener noreferrer';
  contactLinkWrapper.appendChild(contactLink3);


};