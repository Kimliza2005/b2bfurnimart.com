// 'use client';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useMutation } from 'react-query';
// // mui
// import { Box, Card, Typography, Stack, IconButton, useTheme, useMediaQuery, Tooltip, Skeleton } from '@mui/material';
// // redux
// import { useDispatch } from 'src/lib/redux/store';
// import { setWishlist } from 'src/lib/redux/slices/wishlist';
// import { useSelector } from 'react-redux';
// // next
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// // components
// import Label from 'src/components/label';
// import { fCurrency } from 'src/utils/formatNumber';
// import BlurImage from 'src/components/blurImage';
// // icons
// import { IoMdHeartEmpty } from 'react-icons/io';
// // api
// import * as api from 'src/services';
// // toast
// import { toast } from 'react-hot-toast';
// // icons

// import { GoEye } from 'react-icons/go';

// import { IoIosHeart } from 'react-icons/io';
// import dynamic from 'next/dynamic';
// import { FaRegStar } from 'react-icons/fa';
// import ColorPreviewGroup from 'src/components/colorPreviewGroup';
// const ProductDetailsDialog = dynamic(() => import('../dialog/productDetails'));
// export default function ShopProductCard({ ...props }) {
//   const { product, loading } = props;

//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   // type error
//   const { wishlist } = useSelector(({ wishlist }) => wishlist);
//   const { isAuthenticated } = useSelector(({ user }) => user);
//   const isTablet = useMediaQuery('(max-width:900px)');
//   const [isLoading, setLoading] = useState(false);

//   const { mutate } = useMutation(api.updateWishlist, {
//     onSuccess: (data) => {
//       toast.success(data.message);
//       setLoading(false);
//       dispatch(setWishlist(data.data));
//     },
//     onError: (err) => {
//       setLoading(false);
//       const message = JSON.stringify(err.response.data.message);
//       toast.error(t(message ? t('common:' + JSON.parse(message)) : t('common:something-wrong')));
//     }
//   });

//   const { name, slug, image, _id, averageRating } = !loading && product;
//   console.log(wishlist, product?._id);
//   const linkTo = `/product/${slug ? slug : ''}`;

//   const onClickWishList = async (event) => {
//     if (!isAuthenticated) {
//       event.stopPropagation();
//       router.push('/auth/login');
//     } else {
//       event.stopPropagation();
//       setLoading(true);
//       await mutate(_id);
//     }
//   };

//   return (
//     <Card
//       sx={{
//         display: 'block',
//         boxShadow:
//           theme.palette.mode === 'light' ? '0 6px 16px rgba(145, 158, 171, 25%)' : '0 6px 16px rgb(5 6 6 / 25%)',
//         '&:hover': {
//           border: '1px solid ' + theme.palette.primary.main + '!important'
//         }
//       }}
//     >
//       <Box
//         sx={{
//           position: 'relative'
//         }}
//       >
//         {!loading && product?.available < 1 && (
//           <Label
//             variant="filled"
//             color={'error'}
//             sx={{
//               top: isTablet ? 8 : 12,
//               left: isTablet ? 8 : 12,
//               zIndex: 9,
//               position: 'absolute',
//               textTransform: 'uppercase',
//               fontSize: isTablet ? 8 : 12
//             }}
//           >
//             Out of Stock
//           </Label>
//         )}
//         <Box
//           {...(product?.available > 0 && {
//             component: Link,
//             href: linkTo
//           })}
//           sx={{
//             bgcolor: isLoading || loading ? 'transparent' : 'common.white',
//             position: 'relative',
//             cursor: 'pointer',

//             '&:after': {
//               content: `""`,
//               display: 'block',
//               paddingBottom: '100%'
//             },
//             width: '100%'
//           }}
//         >
//           {loading ? (
//             <Skeleton
//               variant="rectangular"
//               width="100%"
//               sx={{
//                 height: '100%',
//                 position: 'absolute'
//               }}
//             />
//           ) : (
//             <Box component={Link} href={linkTo}>
//               <BlurImage
//                 alt={name}
//                 src={image.url}
//                 fill
//                 draggable="false"
//                 objectFit="cover"
//                 placeholder="blur"
//                 blurDataURL={image?.blurDataURL}
//                 // quality={15}
//               />
//             </Box>
//           )}
//         </Box>
//       </Box>

//       <Stack
//         justifyContent="center"
//         sx={{
//           zIndex: 111,
//           p: 1,
//           width: '100%',

//           a: {
//             color: 'text.primary',
//             textDecoration: 'none'
//           }
//         }}
//       >
//         <Box sx={{ display: 'grid' }}>
//           {' '}
//           <Typography
//             sx={{
//               cursor: 'pointer',
//               textTransform: 'capitalize'
//               // fontWeight: 500,
//             }}
//             {...(product?.available > 0 && {
//               component: Link,
//               href: linkTo
//             })}
//             variant={'subtitle1'}
//             noWrap
//           >
//             {loading ? <Skeleton variant="text" width={120} /> : name}
//           </Typography>
//         </Box>
//         <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
//           <Typography
//             variant="subtitle2"
//             color="text.primary"
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5
//             }}
//           >
//             {loading ? (
//               <Skeleton variant="text" width={72} />
//             ) : (
//               <>
//                 <FaRegStar /> ({averageRating || 0})
//               </>
//             )}
//           </Typography>
//           {loading ? (
//             <Skeleton variant="text" width={72} />
//           ) : (
//             <ColorPreviewGroup limit={3} colors={product?.colors} sx={{ minWidth: 72 }} />
//           )}
//         </Stack>

//         <Stack spacing={0.5} direction="row" justifyContent={'space-between'} alignItems="center">
//           <Typography
//             variant={isTablet ? 'body1' : 'h5'}
//             component="p"
//             sx={{
//               fontWeight: 700,
//               display: 'flex',
//               alignItems: 'center',
//               '& .discount': {
//                 fontSize: { md: 14, xs: 12 },
//                 fontWeight: 600,
//                 color: 'error.main',
//                 ml: 0.5
//               }
//             }}
//           >
//             {loading ? (
//               <Skeleton variant="text" width={120} />
//             ) : (
//               <>
//                 <span>{fCurrency(product?.priceSale)}</span>
//                 <span className="discount">
//                   ({`-${(100 - (product?.priceSale / product?.price) * 100).toFixed()}%`})
//                 </span>
//               </>
//             )}
//           </Typography>
//           <Stack direction={'row'}>
//             {loading ? (
//               <Skeleton variant="circular" width={isTablet ? 24 : 44} height={isTablet ? 24 : 44} />
//             ) : (
//               <Tooltip title="Add to cart">
//                 <IconButton
//                   aria-label="add to cart"
//                   disabled={loading || product?.available < 1}
//                   onClick={() => setOpen(true)}
//                   size={isTablet ? 'small' : 'medium'}
//                 >
//                   <GoEye />
//                 </IconButton>
//               </Tooltip>
//             )}

//             {loading ? (
//               <Skeleton variant="circular" width={isTablet ? 24 : 44} height={isTablet ? 24 : 44} />
//             ) : wishlist?.filter((v) => v._id === _id).length > 0 ? (
//               <Tooltip title="Remove from cart">
//                 <IconButton
//                   disabled={isLoading}
//                   onClick={onClickWishList}
//                   aria-label="add to cart"
//                   color="primary"
//                   size={isTablet ? 'small' : 'medium'}
//                 >
//                   <IoIosHeart />
//                 </IconButton>
//               </Tooltip>
//             ) : (
//               <Tooltip title="Add to wishlist">
//                 <IconButton
//                   disabled={isLoading}
//                   onClick={onClickWishList}
//                   aria-label="add to wishlist"
//                   size={isTablet ? 'small' : 'medium'}
//                 >
//                   <IoMdHeartEmpty />
//                 </IconButton>
//               </Tooltip>
//             )}
//           </Stack>
//         </Stack>
//       </Stack>
//       {open && <ProductDetailsDialog slug={product.slug} open={open} onClose={() => setOpen(false)} />}
//     </Card>
//   );
// }
// ShopProductCard.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string,
//     sku: PropTypes.string,
//     status: PropTypes.string,
//     image: PropTypes.object.isRequired,
//     price: PropTypes.number.isRequired,
//     priceSale: PropTypes.number,
//     available: PropTypes.number,
//     colors: PropTypes.array,
//     averageRating: PropTypes.number
//   }),
//   loading: PropTypes.bool.isRequired
// };
'use client';

import PropTypes from 'prop-types';
// MUI
import { Box, Card, Typography, Stack, IconButton, useTheme, useMediaQuery, Tooltip, Skeleton } from '@mui/material';
// Next
import Link from 'next/link';
import Image from 'next/image';
// Utils
import { fCurrency } from 'src/utils/formatNumber';
// Components
import ColorPreviewGroup from 'src/components/colorPreviewGroup';
// Icons
import { GoEye } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
// Dialog (optional)
import dynamic from 'next/dynamic';
const ProductDetailsDialog = dynamic(() => import('../dialog/productDetails'));

// ----------------------------------------------------------------------

export default function ShopProductCard({ product, loading }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery('(max-width:900px)');

  const {
    name = 'Unnamed Product',
    slug = '',
    image = { url: '/placeholder.png' },
    averageRating = 0,
    available = 0,
    price = 0,
    priceSale = 0,
    colors = []
  } = product || {};

  const linkTo = `/product/${slug}`;

  return (
    <Card
      sx={{
        display: 'block',
        boxShadow:
          theme.palette.mode === 'light' ? '0 6px 16px rgba(145, 158, 171, 0.25)' : '0 6px 16px rgb(5 6 6 / 25%)',
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main} !important`
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {!loading && available < 1 && (
          <Typography
            variant="caption"
            color="error"
            sx={{
              position: 'absolute',
              top: isTablet ? 8 : 12,
              left: isTablet ? 8 : 12,
              backgroundColor: 'error.main',
              color: '#fff',
              px: 1,
              borderRadius: 1,
              fontSize: isTablet ? 8 : 12,
              zIndex: 9
            }}
          >
            Out of Stock
          </Typography>
        )}

        <Box
          component={Link}
          href={linkTo}
          sx={{
            position: 'relative',
            width: '100%',
            bgcolor: loading ? 'transparent' : 'common.white',
            cursor: 'pointer',
            '&:after': {
              content: '""',
              display: 'block',
              paddingBottom: '100%'
            }
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" width="100%" sx={{ height: '100%', position: 'absolute' }} />
          ) : (
            <Image src={image?.url || '/placeholder.png'} alt={name} fill objectFit="cover" draggable={false} />
          )}
        </Box>
      </Box>

      <Stack justifyContent="center" sx={{ p: 1, width: '100%' }}>
        <Typography
          component={Link}
          href={linkTo}
          variant="subtitle1"
          noWrap
          sx={{
            textTransform: 'capitalize',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'text.primary'
          }}
        >
          {loading ? <Skeleton variant="text" width={120} /> : name}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="subtitle2" color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {loading ? (
              <Skeleton variant="text" width={72} />
            ) : (
              <>
                <FaRegStar /> ({averageRating})
              </>
            )}
          </Typography>

          {loading ? (
            <Skeleton variant="text" width={72} />
          ) : (
            <ColorPreviewGroup limit={3} colors={colors || []} sx={{ minWidth: 72 }} />
          )}
        </Stack>

        <Stack spacing={0.5} direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant={isTablet ? 'body1' : 'h5'}
            component="p"
            sx={{
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              '& .discount': {
                fontSize: { md: 14, xs: 12 },
                fontWeight: 600,
                color: 'error.main',
                ml: 0.5
              }
            }}
          >
            {loading ? (
              <Skeleton variant="text" width={120} />
            ) : (
              <>
                <span>{fCurrency(priceSale)}</span>
                {price > 0 && priceSale > 0 && (
                  <span className="discount">({`-${Math.round(100 - (priceSale / price) * 100)}%`})</span>
                )}
              </>
            )}
          </Typography>

          <Tooltip title="Quick view">
            <IconButton
              aria-label="preview"
              disabled={loading || available < 1}
              onClick={() => setOpen(true)}
              size={isTablet ? 'small' : 'medium'}
            >
              <GoEye />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {open && <ProductDetailsDialog slug={slug} open={open} onClose={() => setOpen(false)} />}
    </Card>
  );
}

// ----------------------------------------------------------------------

import { useState } from 'react';

ShopProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    price: PropTypes.number,
    priceSale: PropTypes.number,
    available: PropTypes.number,
    colors: PropTypes.array,
    averageRating: PropTypes.number
  }),
  loading: PropTypes.bool.isRequired
};
