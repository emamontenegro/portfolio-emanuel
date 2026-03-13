import reactLogo from "../skills/react-original.svg";
import jsLogo from "../skills/javascript-original.svg";
import htmlLogo from "../skills/html5-original.svg";
import cssLogo from "../skills/css3-original.svg";
import sassLogo from "../skills/sass-original.svg";
import bootstrapLogo from "../skills/bootstrap-original.svg";
import nodeLogo from "../skills/nodejs-original.svg";
import expressLogo from "../skills/express-original.svg";
import mongoLogo from "../skills/mongodb-original.svg";
import firebaseLogo from "../skills/firebase-plain.svg";
import gitLogo from "../skills/git-original.svg";
import githubLogo from "../skills/github-original.svg";

const skills = [
  {
    category: "frontend",
    items: [
      { name: "React", logo: reactLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Responsive Design" },
      { name: "State Management" },
      { name: "Web Performance" },
      { name: "Accessibility (a11y)" }
    ]
  },
  {
    category: "backend",
    items: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "REST APIs" },
      { name: "CRUD Operations" }
    ]
  },
  {
    category: "tools",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Cloudinary" },
      { name: "API Testing (Postman)" }
    ]
  },
  {
    category: "practices",
    items: [
      { name: "Modular Architecture" },
      { name: "Debugging" },
      { name: "Refactoring" },
      { name: "AI-Assisted Development" }
    ]
  },
  {
    category: "methodologies",
    items: [
      { name: "Agile Principles" }
    ]
  }
];

export default skills;