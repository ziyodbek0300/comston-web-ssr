/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        path: '/_next/image',
        disableStaticImages: false,
        dangerouslyAllowSVG: true,
        unoptimized: true,
    }
}

module.exports = nextConfig
