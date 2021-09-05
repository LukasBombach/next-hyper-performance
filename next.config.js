const { resolve } = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entry = await originalEntry();
        entry["main"] = resolve(process.cwd(), "pages/_client.ts");
        return entry;
      };
    }

    return config;
  },
};
