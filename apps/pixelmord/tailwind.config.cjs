const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      textColor: {
        main: "rgb(var(--color-text-main) / <alpha-value>)",
      },
      backgroundColor: {
        main: "rgb(var(--color-bg-main) / <alpha-value>)",
        muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
      },
      borderColor: {
        main: "rgb(var(--color-border-main) / <alpha-value>)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme) => ({
        dante: {
          css: {
            "--tw-prose-body": theme("textColor.main / 100%"),
            "--tw-prose-headings": theme("textColor.main / 100%"),
            "--tw-prose-lead": theme("textColor.main / 100%"),
            "--tw-prose-links": theme("textColor.main / 100%"),
            "--tw-prose-bold": theme("textColor.main / 100%"),
            "--tw-prose-counters": theme("textColor.main / 100%"),
            "--tw-prose-bullets": theme("textColor.main / 100%"),
            "--tw-prose-hr": theme("borderColor.main / 100%"),
            "--tw-prose-quotes": theme("textColor.main / 100%"),
            "--tw-prose-quote-borders": theme("borderColor.main / 100%"),
            "--tw-prose-captions": theme("textColor.main / 100%"),
            "--tw-prose-code": theme("textColor.main / 100%"),
            "--tw-prose-pre-code": theme("colors.zinc.100"),
            "--tw-prose-pre-bg": theme("colors.zinc.800"),
            "--tw-prose-th-borders": theme("borderColor.main / 100%"),
            "--tw-prose-td-borders": theme("borderColor.main / 100%"),
          },
        },
        DEFAULT: {
          css: {
            a: {
              fontWeight: "normal",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textDecorationThickness: "1px",
              textUnderlineOffset: "2px",
              "&:hover": {
                textDecorationStyle: "solid",
              },
            },
            "h1,h2,h3,h4,h5,h6": {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: 500,
            },
            blockquote: {
              border: 0,
              fontFamily: theme("fontFamily.serif"),
              fontSize: "1.3125em",
              fontStyle: "italic",
              fontWeight: "normal",
              lineHeight: 1.4,
              paddingLeft: 0,
              '@media (min-width: theme("screens.sm"))': {
                fontSize: "1.66667em",
                lineHeight: 1.3,
              },
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
