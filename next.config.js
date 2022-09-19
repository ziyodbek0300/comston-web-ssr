/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        path: '/_next/image',
        disableStaticImages: false,
        unoptimized: true
    }
}

module.exports = nextConfig
