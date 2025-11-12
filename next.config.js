/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'export',
    basePath: "https://eveldapanzarino.github.io/pixelgrid-live/",
    distDir: "static",
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
