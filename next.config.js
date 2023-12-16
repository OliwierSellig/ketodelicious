/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
