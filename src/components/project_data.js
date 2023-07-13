const projectData = [
  {
    title: "Full-stack Card database website",
    description:
      'A website that used Next.js, Node.js and MongoDB. This website started as a website for the "MHA" card game where users could register and login, search the database for cards and build their decks, however within a few weeks we had to scale-down our project to meet the deadline. This meant the website is now only a card database with a search function and login functionalities.',
    gitHubLink: "",
  },
  {
    title: "Card Searcher",
    description:
      "A terminal program designed to search through an excel file for a particular card when its card code or name is entered. This was done with a Python library called Openpyxl and has limited editing capabilities.",
    gitHubLink: "",
  },
  {
    title: "Django portfolio website",
    description:
      "Prior to making this website, I created a basic portfolio website using Django and Bootstrap, the main feature of this site was the capability for it to organize, the projects I entered into the SQLite database, into categories without my interference. This was my 2nd time creating a portfolio site and my first time hosting a website live. I used pythonanywhere to host the website.",
    gitHubLink: "",
  },
  {
    title: "Spotify Playlist Generator",
    description:
      'This is a Python project that uses the Spotify API and Spotipy library to generate 2 different playlists. Calm and Upbeat. This organized my music library into the 2 playlists based on the "dancability" of the song.',
    gitHubLink: "",
  },
];

projectData.map((project, index) => {
  ({ ...project, id: index + 1 });
});

export default projectData;
