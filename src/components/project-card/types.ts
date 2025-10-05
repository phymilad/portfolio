import { JSX } from "react";

export type Project = {
  id: number
  title: string;
  description: string[];
  youtubeUrl: string;
  image: {
    desktop?: string,
    mobile?: string,
  };
  skills: { name: string; icon: JSX.Element }[];
};
