export type Site = Record<string, unknown> & {
  website: string;
  author: string;
  desc: string;
  title: string;
  canonicalURL: string;
  ogImage?: string;
  lightAndDarkMode?: boolean;
  postPerPage?: number;
  scheduledPostMargin?: number;
};
