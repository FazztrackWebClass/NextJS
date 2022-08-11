/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/register', // mau diganti jadi apa ?
        destination: '/auth/register', // path lama ?
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/auth/register', // jika ada yang akses ini
        destination: '/register', // lempar kesini
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
