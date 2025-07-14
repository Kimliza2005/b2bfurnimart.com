// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// });
// /** /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'upload.wikimedia.org'
//       },
//       {
//         protocol: 'https',
//         hostname: '1000logos.net'
//       }
//     ]
//   },
//   reactStrictMode: true,
//   swcMinify: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   }
// module.exports = nextConfig;

//   // swcMinify: false,

//   env: {
//     BASE_URL: process.env.BASE_URL,
//     CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//     STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
//     STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
//     CURRENCY: process.env.CURRENCY,
//     SHIPPING_FEE: process.env.SHIPPING_FEE,
//     JWT_SECRET: process.env.JWT_SECRET,
//     PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
//   },
//   images: {
//     domains: ['commercehope-app.vercel.app"', 'res.cloudinary.com']
//   }
// };

// module.exports = withBundleAnalyzer(nextConfig);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: '1000logos.net'
      }
    ]
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  //   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  //   STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  //   STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  //   CURRENCY: process.env.CURRENCY,
  //   SHIPPING_FEE: process.env.SHIPPING_FEE,
  //   JWT_SECRET: process.env.JWT_SECRET,
  //   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
