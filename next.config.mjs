/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    // NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    // PORT: process.env.PORT || 3000
  },
  images: {
    domains: [
      "saniiro.sgp1.cdn.digitaloceanspaces.com",
      "picsum.photos",
    ],
  },
  // distDir: "build",
  // output: "export",
};

export default nextConfig;
