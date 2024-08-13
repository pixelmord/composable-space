import type { Site, SocialObjects } from "@repo/shared/types";

export const SITE: Site = {
  website: "https://pixelmord.de/", // replace this with your deployed domain
  canonicalURL: "https://pixelmord.de/",
  author: "Andreas Adam",
  desc: "Private Homepage von Andreas Adam mit Rezepten, Fotos und kreativen Experimenten",
  title: "Andreas Adam (@pixelmord)",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
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

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pixelmord",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/andreas.sahle",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andreassahle/?locale=en_US",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:andreas@pixelmord.de",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pixelmord",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/pixelmord",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCSGYNiTmp3NQGXrVfEB8e9w",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
];
