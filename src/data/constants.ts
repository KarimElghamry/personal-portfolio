import { images } from "../assets";
import Project from "../models/Project";

export const routes = ["Home", "Personal Projects", "About", "Contact"];

export const personalProjects: {
  project: Project;
  color: string;
  frameworkLogo: string;
}[] = [
  {
    project: {
      title: "Chillify - Music App",
      description: `
    An offline music player mobile application established using
    Flutter and Dart. Currently, Chillify has 550+ stars on Github and is 
    listed as one of the top open source Flutter apps made
    by the community.
`,
      image: images.chillify,
      url: "https://github.com/KarimElghamry/chillify",
    },
    color: "#fcf4f4",
    frameworkLogo: images.flutterLogo,
  },
  {
    project: {
      title: "Cryptoholic - Cryptocurrency App",
      description: ` A Crypto-currency mobile application established using Flutter and Dart. Cryptoholic 
      currently has 120+ stars on Github. It is capable of real-time data retrieval of top 
      crypto-currencies and display charts of performance.
`,
      image: images.cryptoholic,
      url: "https://github.com/KarimElghamry/cryptoholic",
    },
    color: "#F3F9F4",
    frameworkLogo: images.flutterLogo,
  },
  {
    project: {
      title: "GraphAV - Graph Algorithms Visualizer",
      description: `A Graph Algorithms Visualizer built using React and Typescript. GraphAV 
      currently has 100+ stars on Github. It is capable of drawing graphs and visualize 
      different algorithms such as DFS, BFS and Dijkstra.
`,
      image: images.graphAVLogo,
      url: "https://karimelghamry.github.io/GraphAV/",
    },
    color: "#F3FAFF",
    frameworkLogo: images.reactLogo,
  },
];
