interface LinkProps {
  href: string;
  title: string;
  description?: string;
  rel?: string;
  target?: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
}