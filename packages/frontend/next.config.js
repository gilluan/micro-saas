/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/todo",
        permanent: true,
      },
    ];
  },

  webpack: (config, { webpack, isServer, nextRuntime }) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === "nodejs")
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
      );
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^encoding$/ })
    );

    return config;
  },
};
module.exports = nextConfig;
