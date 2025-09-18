export const AboutMe = (): void => {
  const aboutMeContainer: HTMLElement | null = document.querySelector('#about');
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
  aboutMeText.textContent = "I’m a Front-End Developer and UX Designer with a strong focus on user-friendly solutions. My background in the service industry has given me solid experience in communication, problem-solving and collaboration. Skills I now bring into tech.";
  aboutMeWrapper.appendChild(aboutMeText);

  const aboutMeText2 = document.createElement('p');
  aboutMeText2.classList.add('aboutMeText');
  aboutMeText2.textContent = "I build responsive websites with React and I’m currently expanding my skills in TypeScript and Python. I’m passionate about combining design thinking with code to create solutions that are not only functional, but also intuitive and visually engaging.";
  aboutMeWrapper.appendChild(aboutMeText2);

  const aboutMeText3 = document.createElement('p');
  aboutMeText3.classList.add('aboutMeText');
  aboutMeText3.textContent = "I’m eager to grow my skills, take responsibility, and contribute to solutions that truly make a difference.";
  aboutMeWrapper.appendChild(aboutMeText3);
}
