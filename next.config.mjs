// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: ["highlightly.net"], // Add the hostname of your image source
    },
  };
  return nextConfig;
};
