/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/register', // mau diganti jadi apa ?
        destination: '/auth/register', // path lama ?
      },
    ]
  },
}

module.exports = nextConfig
