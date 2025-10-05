import { JSX } from "react";

export type Project = {
  id: number
  title: string;
  description: string[];
  shortDescription: string;
  youtubeUrl: string;
  image: {
    desktop?: string,
    mobile?: string,
  };
  skills: string[];
};
