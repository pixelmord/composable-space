import type { Site, SocialObjects } from "@repo/shared/types";

export const defaultTitle = "Andreas Adam (@pixelmord)";
export const SITE: Site = {
  website: "https://pixelmord.de/", // replace this with your deployed domain
  author: "Andreas Adam",
  description:
    "Private Homepage von Andreas Adam mit Rezepten, Fotos und kreativen Experimenten",
  title: defaultTitle,
  ogImage: { src: "astropaper-og.jpg", alt: "pixelmord Logo" },
  postsPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  headerNavLinks: [
    {
      text: "Start",
      href: "/",
    },
    {
      text: "Projekte",
      href: "/projekte",
    },
    {
      text: "Rezepte",
      href: "/rezepte",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
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
    {
      name: "Mail",
      href: "mailto:andreas@pixelmord.de",
      linkTitle: `Send an email to ${defaultTitle}`,
      active: false,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pixelmord",
      linkTitle: `${defaultTitle} on Twitter`,
      active: true,
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/pixelmord",
      linkTitle: `${defaultTitle} on Twitch`,
      active: true,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCcn5P9gBK7mtVRMcboVDcoA",
      linkTitle: `${defaultTitle} on YouTube`,
      active: false,
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
