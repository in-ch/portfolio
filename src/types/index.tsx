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
