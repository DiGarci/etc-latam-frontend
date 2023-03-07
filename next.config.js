/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_URL: "http://localhost:3000/v1/",
    },
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
        localeDetection: false,
    },
};

module.exports = nextConfig;
