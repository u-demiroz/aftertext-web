/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath ve assetPrefix kaldırıldı — custom domain kullanıldığında gerek yok
}

module.exports = nextConfig
