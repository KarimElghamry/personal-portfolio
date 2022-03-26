import { images } from "../assets";
import Project from "../models/Project";

export const routes = ["Home", "Projects", "Skills", "Contact"];

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
    frameworkLogo: images.frameworks.flutter,
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
    frameworkLogo: images.frameworks.flutter,
  },
  {
    project: {
      title: "GraphAV - Graph Algorithms Visualizer",
      description: `A Graph Algorithms Visualizer built using React and Typescript. GraphAV 
      currently has 100+ stars on Github. It is capable of drawing graphs and visualize 
      different algorithms such as DFS, BFS and Dijkstra.
`,
      image: images.graphAV,
      url: "https://karimelghamry.github.io/GraphAV/",
    },
    color: "#F3FAFF",
    frameworkLogo: images.frameworks.react,
  },
  {
    project: {
      title: "Sorting Algorithms Visualizer",
      description: `A tool to visualize sorting algorithms built using ReactJS. It supports
      the control of visualization speed, changing the array size, randomizing the input,
      and choosing from various algorithms such as merge sort and quick sort.`,
      image: images.sortingVisualizer,
      url: "https://karimelghamry.github.io/sorting-visualizer/",
    },
    color: "#FEF9F4",
    frameworkLogo: images.frameworks.react,
  },
];
