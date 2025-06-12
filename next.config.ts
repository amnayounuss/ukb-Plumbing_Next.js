/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Bypasses ESLint errors/warnings during build
    },
};

module.exports = nextConfig;