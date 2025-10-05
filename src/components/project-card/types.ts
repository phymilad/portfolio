import { JSX } from "react";

export type Project = {
  title: string;
  description: string;
  image: {
    desktop?: string,
    mobile?: string,
  };
  skills: { name: string; icon: JSX.Element }[];
};
