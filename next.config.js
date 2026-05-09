/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/aftertext-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aftertext-web/' : '',
}

module.exports = nextConfig
