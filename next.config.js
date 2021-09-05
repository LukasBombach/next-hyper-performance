const { resolve } = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entry = await originalEntry();
        entry["main"] = resolve(
          process.cwd(),
          "lib/hyper-performance/client.tsx"
        );
        return entry;
      };
    }

    return config;
  },
};
