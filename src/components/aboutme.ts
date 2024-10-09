export const AboutMe = () => {
  const aboutMeContainer = document.querySelector('#about');
  if (!aboutMeContainer) {
    console.error('#aboutMe element not found in the DOM');
    return;
  }
  const aboutMeWrapper = document.createElement('div');
  aboutMeWrapper.classList.add('aboutMeWrapper');
  aboutMeContainer.appendChild(aboutMeWrapper);

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = 'About Me';
  aboutMeWrapper.appendChild(aboutHeading);

  const aboutMeText = document.createElement('p');
  aboutMeText.classList.add('aboutMeText');
  aboutMeText.textContent = "As a Front-End Developer with a deep passion for UX design, I'm on a mission to leverage my 12 years of customer service expertise from the service industry and apply it to the digital realm.";
  aboutMeWrapper.appendChild(aboutMeText);

  const aboutMeText2 = document.createElement('p');
  aboutMeText2.classList.add('aboutMeText');
  aboutMeText2.textContent = "My lifelong creative spirit has taken many forms – from dance, which has been a significant part of my life, to my love for sewing, painting, cooking, and more.";
  aboutMeWrapper.appendChild(aboutMeText2);

  const aboutMeText3 = document.createElement('p');
  aboutMeText3.classList.add('aboutMeText');
  aboutMeText3.textContent = "I believe in the power of blending technical precision with artistic flair to create digital experiences that are not only functional but also visually appealing and user-centered.";
  aboutMeWrapper.appendChild(aboutMeText3);
}
