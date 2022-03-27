import { images } from "../assets";
import Project from "../models/Project";

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
      title: "Sorting Algorithms Visualizer",
      description: `A tool to visualize sorting algorithms built using ReactJS. It supports
      the control of visualization speed, changing the array size, randomizing the input,
      and choosing from various algorithms such as merge sort and quick sort.`,
      image: images.sortingVisualizer,
      url: "https://karimelghamry.github.io/sorting-visualizer/",
    },
    color: "#F8F4FD",
    frameworkLogo: images.frameworks.react,
  },
  {
    project: {
      title: "Java OOP Design Patterns",
      description: `A collection of design patterns implemented in Java 
      and referenced from the book of Design Patterns: Elements of Reusable Object-Oriented Software.
      The repo covers a wide variety of creational, behavioural and structural patterns.`,
      image: images.desginPatterns,
      url: "https://github.com/KarimElghamry/design-patterns",
    },
    color: "#FEF9F4",
    frameworkLogo: images.languages.java,
  },
  {
    project: {
      title: "Codeforces Randomizer",
      description: `a Codeforces problem randomizer built using React, Styled components and Typescript.
      A user is able to select topics from the provided list (max 4), adjust the range of ratings to your likings 
      and press Randomize to retrieve a random problem from Codeforces based on your inputs.
`,
      image: images.codeforces,
      url: "https://github.com/KarimElghamry/Codeforces-Randomizer",
    },
    color: "#F3FAFF",
    frameworkLogo: images.frameworks.react,
  },
  {
    project: {
      title: "Keyboard Macros Desktop App",
      description: `A simple keyboard macros desktop app made with React and Electron.
    How it works: 
    The user adds their desired keyboard macros and is stored in a json format.
    The app listens to the keyboard events on the main Electron thread using ioHook.
    If a registered macro is detected, the corresponding key mapping is retrieved and is programatically pressed.
    DFS graph traversal is used to detect any loops in the given macro sequence.
`,
      image: images.macros,
      url: "https://github.com/KarimElghamry/K_Macros",
    },
    color: "#EEF3F7",
    frameworkLogo: images.frameworks.electron,
  },
];
