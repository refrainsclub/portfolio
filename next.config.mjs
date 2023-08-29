/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/refrainsclub",
        permanent: false,
      },
      {
        source: "/gh",
        destination: "https://github.com/refrainsclub",
        permanent: false,
      },
      {
        source: "/github/:slug*",
        destination: "https://github.com/refrainsclub/:slug*",
        permanent: false,
      },
      {
        source: "/gh/:slug*",
        destination: "https://github.com/refrainsclub/:slug*",
        permanent: false,
      },
    ];
  },
};

export default config;
