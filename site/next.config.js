/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AN\'s registry',
    description: 'Workspaces for web development.',
    icon: '/img/logo.svg',
    listUrl: 'https://anakhwa.github.com/kasm_dev_workspaces/',
    contactUrl: 'https://github.com/anakhwa',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_dev_workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
