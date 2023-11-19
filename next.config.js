/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.pexels.com", "upload.wikimedia.org", "cdn.dribbble.com"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "i.dummyjson.com" },
    ],
  },
};

module.exports = nextConfig;
