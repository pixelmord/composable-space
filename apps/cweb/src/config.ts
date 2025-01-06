import type { Site } from "@repo/shared/types";
const defaultTitle = "Composable Web";
export const SITE: Site = {
  website: "https://composableweb.com/", // replace this with your deployed domain
  author: "Andreas Adam",
  description:
    "My name is Andreas Adam and I am writing about the Composable Web",
  title: defaultTitle,
  ogImage: { src: "astropaper-og.jpg", alt: "ComposableWeb" },
  postsPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  socialLinks: [
    {
      name: "Github",
      href: "https://github.com/pixelmord",
      linkTitle: ` ${defaultTitle} on Github`,
      active: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pixelmord",
      linkTitle: `${defaultTitle} on Twitter`,
      active: true,
    },
  ],
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
