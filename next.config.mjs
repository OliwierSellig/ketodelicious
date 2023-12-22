/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      { protocol: "https", hostname: "tinyurl.com", port: "", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/app/homeboard",
        permanent: true,
      },
      {
        source: "/app/recipes",
        destination: "/app/homeboard",
        permanent: true,
      },
      {
        source: "/app/users",
        destination: "/app/homeboard",
        permanent: true,
      },
    ];
  },
};

export default withPlaiceholder(nextConfig);
