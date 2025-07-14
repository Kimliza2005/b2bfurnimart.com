// import { Suspense } from 'react';

// // mui
// import { Container } from '@mui/material';

// // components
// import Hero from 'src/components/_main/home/hero';
// import Categories from 'src/components/_main/home/categories';
// // import BestSeller from 'src/components/_main/home/bestSeller';
// import Banner from 'src/components/_main/home/banner';
// import TopCollections from 'src/components/_main/home/topCollections';
// // import Brands from 'src/components/_main/home/brands';
// import WhyUs from 'src/components/_main/home/whyUs';
// import TopBanners from 'src/components/_main/home/topBanners';

// export default async function IndexPage() {
//   return (
//     <>
//       <Hero />
//       <TopBanners />
//       <Container fixed>
//         <Categories />
//         <Suspense>
//           <TopCollections />
//         </Suspense>
//       </Container>
//       <Banner />
//       <Container fixed>
//         <Suspense>{/* <BestSeller /> */}</Suspense>
//         <Suspense>{/* <Brands /> */}</Suspense>
//         <WhyUs />
//       </Container>
//     </>
//   );
// }
import React from 'react';
import { Container } from '@mui/material';

// Components
import Hero from 'src/components/_main/home/hero';
import Categories from 'src/components/_main/home/categories';
import Banner from 'src/components/_main/home/banner';
import TopCollections from 'src/components/_main/home/topCollections';
import WhyUs from 'src/components/_main/home/whyUs';
import TopBanners from 'src/components/_main/home/topBanners';

export default function IndexPage() {
  return (
    <>
      <Hero />
      <TopBanners />
      <Container fixed>
        <Categories />
        {/* Removed Suspense to keep it static export friendly */}
        <TopCollections />
      </Container>
      <Banner />
      <Container fixed>
        <WhyUs />
      </Container>
    </>
  );
}
