export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  canonicalURL: string;
  ogImage?: string;
  lightAndDarkMode?: boolean;
  postPerPage?: number;
  scheduledPostMargin?: number;
};
