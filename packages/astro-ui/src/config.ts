import type { Site, SocialObjects } from "@repo/shared/types";

export const SITE: Site = {
  website: "https://example.com/", // replace this with your deployed domain
  author: "Andreas Adam",
  description: "Demo",
  title: "Demo Site",
  socialLinks: [],
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-GB"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObjects = [];
