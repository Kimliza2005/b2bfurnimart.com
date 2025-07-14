// import * as React from 'react';
// // mui
// import { Box } from '@mui/material';
// // components
// import Navbar from 'src/components/layout/_main/navbar';
// import Footer from 'src/components/layout/_main/footer';
// import { cookies } from 'next/headers';

// // Meta information
// export const metadata = {
//   title: 'Commercehope E-commerce Script | Your Gateway to Seamless Shopping and Secure Transactions',
//   description:
//     'Log in to Commercehope for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!',
//   applicationName: 'Commercehope',
//   authors: 'Commercehope',
//   keywords: 'ecommerce, Commercehope, Commerce, Login Commercehope, LoginFrom Commercehope',
//   icons: {
//     icon: '/favicon.png'
//   },
//   openGraph: {
//     images: 'https://commercehope-app.vercel.app/opengraph-image.png'
//   }
// };

// export default async function RootLayout({ children }) {
//   const cookiesList = cookies();
//   const hasCookie = cookiesList.get('token');

//   return (
//     <>
//       <Navbar isAuth={hasCookie} />
//       {children}
//       <Box sx={{ py: { xs: 5, md: 3 } }} />
//       <Footer />
//     </>
//   );
// }
import * as React from 'react';
// mui
import { Box } from '@mui/material';
// components
import Navbar from 'src/components/layout/_main/navbar';
import Footer from 'src/components/layout/_main/footer';

// Meta information
export const metadata = {
  title: 'B2B Furnimart | Wholesale Furniture for Your Business',
  description:
    'Welcome to B2B Furnimart — your trusted source for high-quality wholesale furniture. Shop with ease, enjoy seamless transactions, and grow your business with our curated collections.',
  applicationName: 'B2B Furnimart',
  authors: 'B2B Furnimart',
  keywords: 'furniture, B2B furniture, wholesale furniture, office furniture, home furniture, business furniture',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    images: '/opengraph-image.jpg'
  }
};
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar /> {/* Removed isAuth to make it static-friendly */}
      {children}
      <Box sx={{ py: { xs: 5, md: 3 } }} />
      <Footer />
    </>
  );
}
