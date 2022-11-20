const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'pages'), path.join(__dirname, 'components')],
  },
};

module.exports = nextConfig;
