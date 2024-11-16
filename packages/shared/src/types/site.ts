import type { Hero, Image, Link, Subscribe } from "./configEntities";
import type { SocialObjects } from "./social";

export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  subtitle?: string;
  ogImage?: Image;
  logo?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks: SocialObjects;
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  scheduledPostMargin?: number;
};
