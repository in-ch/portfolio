export interface ItemType {
  title: string;
  description: string[];
  date: string;
  imgs: string[];
  links: LinkType[];
}

export interface LinkType {
  title: string;
  link: string;
}

export interface BlogType {
  title: string;
  description: string;
  date: string;
  img: string;
  link: string;
}
