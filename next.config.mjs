/** @type {import('next').NextConfig} */
const nextConfig = {
      
    // images: {
    //     remotePatterns: [0]['ap-south-1.graphassets.com/*'],
    //   },n
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ap-south-1.graphassets.com',
          // port: '',
          // pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'aceternity.com',
          // port: '',
          // pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          // port: '',
          // pathname: '/account123/**',
        },
      ],
    },
};


export default nextConfig;