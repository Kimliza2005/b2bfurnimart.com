// 'use client';
// import React from 'react';
// import { Typography, Grid, Box, Stack, Paper } from '@mui/material';
// import CategoriesCard from 'src/components/cards/category';

// const staticCategories = [
//   {
//     id: 1,
//     name: 'Living Room',
//     slug: '#',
//     cover: {
//       url: '/images/categories/livingroom.png'
//     }
//   },
//   {
//     id: 2,
//     name: 'Bedroom',
//     slug: '#',
//     cover: {
//       url: '/images/categories/bedroom.png'
//     }
//   },
//   {
//     id: 3,
//     name: 'Office Room',
//     slug: '#',
//     cover: {
//       url: '/images/categories/office.png'
//     }
//   },
//   {
//     id: 4,
//     name: 'Dinning Room',
//     slug: '#',
//     cover: {
//       url: '/images/categories/dinningroom.png'
//     }
//   },
//   {
//     id: 5,
//     name: 'Promote',
//     slug: '#',
//     cover: {
//       url: '/images/categories/discount.png'
//     }
//   }
// ];

// export default function Categories() {
//   return (
//     <Paper elevation={0}>
//       <Stack direction="column" sx={{ gap: 3, mt: 5 }}>
//         <Box>
//           <Typography variant="h2" color="text.primary" textAlign="center">
//             Categories
//           </Typography>
//           <Typography variant="body1" color="text.secondary" textAlign="center">
//             Browse by furniture type to find exactly what you need.
//           </Typography>
//         </Box>

//         <Box>
//           <Grid container spacing={2} justifyContent="center" alignItems="center">
//             {staticCategories.map((category) => (
//               <Grid item lg={2} md={3} sm={4} xs={6} key={category.slug}>
//                 <CategoriesCard category={category} isLoading={false} />
//               </Grid>
//             ))}

//             {staticCategories.length === 0 && (
//               <Grid item xs={12}>
//                 <Typography variant="h3" color="error.main" textAlign="center">
//                   Categories not found
//                 </Typography>
//               </Grid>
//             )}
//           </Grid>
//         </Box>
//       </Stack>
//     </Paper>
//   );
// }
'use client';
import React from 'react';
import { Typography, Grid, Box, Stack, Paper } from '@mui/material';
import CategoriesCard from 'src/components/cards/category';

const staticCategories = [
  {
    id: 1,
    name: 'Living Room',
    slug: '#',
    cover: { url: '/images/categories/livingroom.png' }
  },
  {
    id: 2,
    name: 'Bedroom',
    slug: '#',
    cover: { url: '/images/categories/bedroom.png' }
  },
  {
    id: 3,
    name: 'Office Room',
    slug: '#',
    cover: { url: '/images/categories/office.png' }
  },
  {
    id: 4,
    name: 'Dinning Room',
    slug: '#',
    cover: { url: '/images/categories/dinningroom.png' }
  },
  {
    id: 5,
    name: 'Promote',
    slug: '#',
    cover: { url: '/images/categories/discount.png' }
  }
];

export default function Categories() {
  return (
    <Paper elevation={0} sx={{ py: 5 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h2" color="text.primary" textAlign="center">
            Categories
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Browse by furniture type to find exactly what you need.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center" sx={{ px: { xs: 2, md: 6 } }}>
          {staticCategories.map((category) => (
            <Grid
              item
              key={category.slug}
              xs={3} // 4 per row on mobile
              sm={2.4} // 5 per row on tablets/desktops
              md={2.4}
              lg={2.4}
              xl={2.4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <CategoriesCard category={category} isLoading={false} />
            </Grid>
          ))}

          {staticCategories.length === 0 && (
            <Grid item xs={12}>
              <Typography variant="h3" color="error.main" textAlign="center">
                Categories not found
              </Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Paper>
  );
}
