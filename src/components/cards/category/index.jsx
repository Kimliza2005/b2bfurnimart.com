// 'use client';
// import PropTypes from 'prop-types';
// // next
// import Link from 'next/link';
// import Image from 'next/image';
// // mui
// import { Typography, CardActionArea, Card, Box, Skeleton, Stack } from '@mui/material';

// export default function CategoriesCard({ category, isLoading }) {
//   const baseUrl = '/products/';

//   return (
//     <Stack spacing={1} alignItems="center">
//       <Card
//         sx={{
//           borderRadius: '50%',
//           borderWidth: '3px !important',
//           transform: 'scale(1.0)',
//           transition: 'all 0.2s ease-in-out',
//           width: { xs: 90, md: 150 },
//           height: { xs: 90, md: 150 },
//           border: isLoading && 'none !important',
//           '&:hover': {
//             color: '#000',
//             borderColor: (theme) => theme.palette.primary.main + '!important',
//             transform: 'scale(1.05)'
//           },
//           '& .image-wrapper': {
//             position: 'relative',
//             width: '100%',
//             img: {
//               borderRadius: '50%'
//             },
//             '&:after': {
//               content: `""`,
//               display: 'block',
//               paddingBottom: '100%'
//             }
//           }
//         }}
//       >
//         {isLoading ? (
//           <Skeleton
//             variant="circular"
//             sx={{
//               position: 'absolute',
//               height: '100%',
//               width: '100%'
//             }}
//           />
//         ) : (
//           <CardActionArea component={Link} href={`${baseUrl}${category?.slug}`}>
//             <Box p={0.4} sx={{ bgcolor: (theme) => theme.palette.background.default }}>
//               <Box className="image-wrapper">
//                 <Image
//                   alt="category"
//                   src={category?.cover?.url}
//                   fill
//                   style={{ objectFit: 'cover', borderRadius: '50%' }}
//                   draggable={false}
//                   quality={5}
//                   sizes="50vw"
//                 />
//               </Box>
//             </Box>
//           </CardActionArea>
//         )}
//       </Card>

//       <Typography
//         {...(!isLoading && {
//           component: Link,
//           href: baseUrl + category.slug
//         })}
//         color="text.primary"
//         variant="subtitle2"
//         textAlign="center"
//         noWrap
//         sx={{ py: 0.5, textTransform: 'capitalize' }}
//       >
//         {isLoading ? <Skeleton variant="text" width={100} /> : category?.name}
//       </Typography>
//     </Stack>
//   );
// }

// CategoriesCard.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   category: PropTypes.shape({
//     slug: PropTypes.string.isRequired,
//     cover: PropTypes.shape({
//       url: PropTypes.string.isRequired
//     }),
//     name: PropTypes.string.isRequired
//   }).isRequired
// };
'use client';
import PropTypes from 'prop-types';
// next
import Link from 'next/link';
import Image from 'next/image';
// mui
import { Typography, Card, Box, Skeleton, Stack, useTheme } from '@mui/material';

export default function CategoriesCard({ category, isLoading }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const baseUrl = '/products/';

  return (
    <Stack spacing={1} alignItems="center" sx={{ width: { xs: '25%', md: '20%' } }}>
      <Link href={`${baseUrl}${category?.slug}`} style={{ textDecoration: 'none' }}>
        <Card
          elevation={0}
          sx={{
            borderRadius: '50%',
            border: `2px solid ${theme.palette.divider}`,
            width: { xs: 70, md: 100 },
            height: { xs: 70, md: 100 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
            '&:hover': {
              backgroundColor: 'transparent !important'
            }
          }}
        >
          {isLoading ? (
            <Skeleton variant="circular" sx={{ height: '100%', width: '100%' }} />
          ) : (
            <Box
              sx={{
                width: '60%',
                height: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                alt={category?.name}
                src={category?.cover?.url}
                width={40}
                height={40}
                style={{
                  objectFit: 'contain',
                  filter: isDark ? 'invert(1)' : 'none'
                }}
                draggable={false}
              />
            </Box>
          )}
        </Card>
      </Link>

      <Typography
        {...(!isLoading && {
          component: Link,
          href: baseUrl + category.slug
        })}
        color="text.primary"
        variant="subtitle2"
        textAlign="center"
        noWrap
        sx={{ py: 0.5, textTransform: 'capitalize' }}
      >
        {isLoading ? <Skeleton variant="text" width={80} /> : category?.name}
      </Typography>
    </Stack>
  );
}

CategoriesCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  category: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    cover: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    name: PropTypes.string.isRequired
  }).isRequired
};
