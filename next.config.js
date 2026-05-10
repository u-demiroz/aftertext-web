/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/aftertext-web',
  assetPrefix: '/aftertext-web/',
}

module.exports = nextConfig
