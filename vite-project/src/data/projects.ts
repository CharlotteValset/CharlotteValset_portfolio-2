export interface Project {
  id: number;
  title: string;
  description: string[];
  imageUrl: string;
  linkWebsite: string;
  linkGithub: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BidOnIt",
    description: [
      "BidOnIt, an auction site where you can bid on items you like and put your own items up for auction.",
      "This was my Semester Project 2 assignment, designed in Figma, built with Vite, Tailwind, vanilla JS and using Noroffs Rest API.",
    ],
    imageUrl: "src/assets/images/bidonit.png",
    linkWebsite: "https://bidonit.netlify.app/",
    linkGithub: "https://github.com/CharlotteValset/auction-site-sp2",
  },
  {
    id: 2,
    title: "Vivance",
    description: [
      "Get a great deal and shop the latest trends at Vivance,an e-commerce store. Let's get shopping!",
      "The website was created for JS framework course , designed in Figma, built with Vite, Tailwind, React and using Noroffs Rest API.",
    ],
    imageUrl: "src/assets/images/vivance.png",
    linkWebsite: "https://vivance.netlify.app/",
    linkGithub: "https://github.com/CharlotteValset/react-ecom-store",
  },
  {
    id: 3,
    title: "Holidaze",
    description: [
      "Book your next holiday with Holidaze. Find the perfect accommodation for your next trip.",
      "My final project exam - designed in Figma, built with Vite, Tailwind, React and using Noroffs Rest API.",
      "Log in with: cvtest@stud.noroff.no / cvtest123",
    ],
    imageUrl: "src/assets/images/holidaze.png",
    linkWebsite: "https://book-at-holidaze.netlify.app/",
    linkGithub: "https://github.com/CharlotteValset/Holidaze",
  },
]
