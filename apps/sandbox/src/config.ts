import type { Site, SocialObjects } from "@repo/shared/types";
export const defaultTitle = "ComposableWeb Sandbox";
export const SITE: Site = {
  website: "https://sandbox.composableweb.com/", // replace this with your deployed domain
  author: "Andreas Adam",
  description: "A sandbox to try out new features of the Composable Web",
  title: defaultTitle,
  ogImage: { src: "astropaper-og.jpg", alt: "Sandbox" },
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
      name: "Instagram",
      href: "https://instagram.com/andreas.sahle",
      linkTitle: `${defaultTitle} on Instagram`,
      active: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/andreassahle/?locale=en_US",
      linkTitle: `${defaultTitle} on LinkedIn`,
      active: true,
    },
  ],
};

export const LOCALE = {
  lang: "de", // html lang code. Set this empty and default will be "en"
  langTag: ["de-DE"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
