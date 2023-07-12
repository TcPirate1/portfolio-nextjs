const projectData = [
  {
    title: "Todo List App",
    description:
      "A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.",
    gitHubLink: "https://github.com/olawanlejoel/Todo-List-App",
  },
  {
    title: "Books Library App",
    description:
      "A simple Book Library App built with JavaScript. It helps readers have a good list of books they are either currently reading or have finished reading.",
    gitHubLink: "https://github.com/olawanlejoel/Book-Library",
  },
  {
    title: "Quotes Generator",
    description:
      "Helps you generate quotes from about 1600 quotes written by different authors . Quotes are automatically copied to your clipboards.",
    gitHubLink: "https://github.com/olawanlejoel/random-quote-generator",
  },
  {
    title: "Password Generator",
    description:
      "Helps you generates random passwords, you can select what you want your password to entail and also you can copy generated password to clipboard.",
    gitHubLink: "https://github.com/olawanlejoel/Password-Generator",
  },
  {
    title: "Twitter UI Clone",
    description:
      "Simple Twitter UI clone built with TailwindCSS and Vue Js. This covers only the homepage of Twitter UI. This is cool to get started with TailwindCSS as it helps understand basic concepts.",
    gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
  },
];

projectData.map((project, index) => {
  ({ ...project, id: index + 1 });
});

export default projectData;
