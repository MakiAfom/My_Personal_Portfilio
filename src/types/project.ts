export interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  tags: string[];
  color: string;
}

export interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: (id: number) => void;
} 