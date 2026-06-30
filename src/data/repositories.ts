import type { Repository } from "../types";

// Replace with your actual GitHub username and repositories
const GITHUB_USERNAME = "Steveguile";

export const repositories: Repository[] = [
  {
    id: "repo-1",
    name: "Project One",
    description: "test.",
    repoUrl: `https://github.com/Steveguile/Solutions-Architect-Quiz`,
    language: "TypeScript",
  },
  {
    id: "repo-2",
    name: "Project Two",
    description: "A short description of what this project does.",
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-two`,
    language: "Python",
  },
  {
    id: "repo-3",
    name: "Project Three",
    description: "A short description of what this project does.",
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-three`,
    language: "Rust",
  },
  {
    id: "repo-4",
    name: "Project Four",
    description: "A short description of what this project does.",
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-four`,
    language: "Go",
  },
  {
    id: "repo-5",
    name: "Project Five",
    description: "A short description of what this project does.",
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-five`,
    language: "Go",
  },
];
