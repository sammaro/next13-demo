interface LinkProps {
  href: string;
  title: string;
  description?: string;
  rel?: string;
  target?: string;
}

export interface Task {
  id?: string;
  title: string;
  description: string;
}