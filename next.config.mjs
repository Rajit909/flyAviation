// /** @type {import('next').NextConfig} */
// const nextConfig = {
      
//     // images: {
//     //     remotePatterns: [0]['ap-south-1.graphassets.com/*'],
//     //   },n
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'ap-south-1.graphassets.com',
//           // port: '',
//           // pathname: '/account123/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'aceternity.com',
//           // port: '',
//           // pathname: '/account123/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'assets.aceternity.com',
//           // port: '',
//           // pathname: '/account123/**',
//         },
//       ],
//     },
// };


// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'ap-south-1.graphassets.com',
          },
          {
              protocol: 'https',
              hostname: 'aceternity.com',
          },
          {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
          },
      ],
  },
  webpack: (config, { dev, isServer }) => {
      if (dev) {
          config.devtool = 'source-map'; // Enable source maps in development
      } else {
          config.devtool = false; // Disable source maps in production (optional)
      }
      return config;
  },
};

export default nextConfig;
