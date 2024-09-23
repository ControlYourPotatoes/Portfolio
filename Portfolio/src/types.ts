import { IconType } from 'react-icons';

export interface TechStackItem {
  Icon: IconType;
  name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: TechStackItem[];
  githubLink: string;
  demoLink: string;
}