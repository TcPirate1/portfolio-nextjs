const projectData = [
  {
    id: 0,
    image: "/projects/news_aggregator_website.webp",
    title: "News Aggregator",
    description:
      "News aggregate website using NextJS. Uses RSS to get and display links to articles on a page, can also search for specific types of feeds. In future this maybe extended to being able to display the actual article in their own page.",
    link: "https://github.com/TcPirate1/Newsly",
  },
  {
    id: 1,
    image: "/projects/uvsMhaSite.webp",
    title: "Card database website",
    description:
      'A website built with Next.js, Node.js and MongoDB. Started as a website for the "MHA" card game where users could register and login, search the database for cards and build their decks, however within a few weeks we had to scale-down our project to meet the deadline. This meant the website is now only a card database with a search function and login functionalities.',
    link: "https://youtu.be/JbZzsTftdrw",
  },
  {
    id: 2,
    image: "/projects/Avalonia_FFGUI_HomePage.webp",
    title: "Avalonia GUI for Card Searcher",
    description:
      "A GUI interface for the Card Searcher program. This removes the dependency on Excel spreadsheets and uses MongoDB to store information. Work in Progress.",
    link: "https://github.com/TcPirate1/FF_collection_GUI",
  },
  {
    id: 3,
    image: "/projects/pythonExcelScript.webp",
    title: "CLI Card Searcher",
    description:
      "A terminal program designed to search through an excel file for a card based on its card code or name. This was done with a Python library called Openpyxl and has limited editing capabilities.",
    link: "https://github.com/TcPirate1/Excel_Searcher-Python",
  },
  {
    id: 4,
    image: "/projects/pythonSpotify.webp",
    title: "Spotify Playlist Generator",
    description:
      'This is a Python project that uses the Spotify API and Spotipy library to generate 2 different playlists. Calm and Upbeat. This organized my music library into the 2 playlists based on the "dancability" of the song.',
    link: "https://youtu.be/8s0RqRqwOnQ",
  },
];

export default projectData;
