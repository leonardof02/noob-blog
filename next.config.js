/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/noob-blog",
    reactStrictMode: true,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
}

module.exports = nextConfig