/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'cdn.sanity.io'},
      {hostname: 'picsum.photos'},
      {hostname: 'flowbite.s3.amazonaws.com'},
    ],
  },
};

module.exports = nextConfig;
