import type { Site, SocialObjects } from "@repo/shared/types";

export const SITE: Site = {
  website: "https://composableweb.com/", // replace this with your deployed domain
  canonicalURL: "https://composableweb.com/",
  author: "Andreas Adam",
  description:
    "My name is Andreas Adam and I am writing about the Composable Web",
  title: "Composable Web",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-GB"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pixelmord",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pixelmord",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
