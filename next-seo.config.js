// next-seo.config.js
const defaultSEOConfig = {
  title: "Your Website Title",
  description: "Your website description goes here.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com/",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    handle: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
