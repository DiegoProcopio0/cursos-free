
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports =  {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co/com',
        port: '',
        pathname: '/i.ibb.co/**',
      },
    ],
  },
}
