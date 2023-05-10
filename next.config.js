/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['icongr.am'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
