// 'use client';
// // react
// import React from 'react';
// // mui
// import { alpha } from '@mui/material/styles';
// import { Fab, Typography, Card, Grid, Box } from '@mui/material';
// import { createGradient } from 'src/theme/palette';

// // icons
// import { MdOutlineLocalShipping } from 'react-icons/md';
// import { MdOutlineSupportAgent } from 'react-icons/md';
// import { MdLoop } from 'react-icons/md';
// import { BiDollar } from 'react-icons/bi';

// export default function WhyUs() {
//   const data = [
//     {
//       title: 'Support',
//       icon: <MdOutlineSupportAgent size={24} />,
//       description:
//         'Our dedicated support team is here to assist you. Reach out to us for any queries or concerns, and experience exceptional customer service.'
//     },
//     {
//       title: 'Return',
//       icon: <MdLoop size={24} />,
//       description:
//         "Hassle-free returns within a specified period. If you're not satisfied with your purchase, we make the return process simple and convenient for you."
//     },
//     {
//       title: 'Payment',
//       icon: <BiDollar size={24} />,
//       description:
//         'Secure and convenient payment options for a seamless shopping experience. Choose from various payment methods to complete your order.'
//     }
//   ];

//   return (
//     <Box
//       sx={{
//         mt: 5,
//         mb: 5,
//         display: {
//           md: 'block',
//           xs: 'none'
//         }
//       }}
//     >
//       <Grid container spacing={3} justifyContent="center">
//         {data.map((v) => (
//           <Grid item lg={3} md={4} xs={6} key={Math.random()}>
//             <Card
//               className="card"
//               sx={{
//                 position: 'relative',
//                 height: '100%',
//                 padding: 3,
//                 pl: 4,
//                 pr: 4,
//                 textAlign: 'center',
//                 background: 'transparent',
//                 overflow: 'hidden',
//                 '&:before': {
//                   content: "''",
//                   position: 'absolute',
//                   top: 60,
//                   left: '-23%',
//                   bgcolor: 'transparent',
//                   height: 100,
//                   width: 100,
//                   borderRadius: '50px',
//                   zIndex: 0
//                 },
//                 '&:after': {
//                   content: "''",
//                   position: 'absolute',
//                   bottom: -20,
//                   right: '-23%',
//                   bgcolor: 'transparent',
//                   height: 100,
//                   width: 100,
//                   borderRadius: '50px',
//                   zIndex: 0
//                 }
//               }}
//             >
//               <Fab
//                 color="primary"
//                 sx={{
//                   bgcolor: '#0c5290'
//                 }}
//                 name={v.title}
//               >
//                 {v.icon}
//               </Fab>
//               <Typography variant="h4" color="common.white" mt={2} mb={1}>
//                 {v.title}
//               </Typography>
//               <Typography variant="body1" color="common.white">
//                 {v.description}
//               </Typography>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Fab, Typography, Card, Grid, Box } from '@mui/material';
import { MdOutlineSupportAgent, MdLoop } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';

export default function WhyUs() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const data = [
    {
      title: 'Support',
      icon: <MdOutlineSupportAgent size={24} />,
      description:
        'Our dedicated support team is here to assist you. Reach out to us for any queries or concerns, and experience exceptional customer service.'
    },
    {
      title: 'Return',
      icon: <MdLoop size={24} />,
      description:
        "Hassle-free returns within a specified period. If you're not satisfied with your purchase, we make the return process simple and convenient for you."
    },
    {
      title: 'Payment',
      icon: <BiDollar size={24} />,
      description:
        'Secure and convenient payment options for a seamless shopping experience. Choose from various payment methods to complete your order.'
    }
  ];

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        display: {
          md: 'block',
          xs: 'none'
        }
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {data.map((v) => (
          <Grid item lg={3} md={4} xs={6} key={Math.random()}>
            <Card
              className="card"
              sx={{
                position: 'relative',
                height: '100%',
                padding: 3,
                pl: 4,
                pr: 4,
                textAlign: 'center',
                background: 'transparent',
                overflow: 'hidden',
                '&:before': {
                  content: "''",
                  position: 'absolute',
                  top: 60,
                  left: '-23%',
                  bgcolor: 'transparent',
                  height: 100,
                  width: 100,
                  borderRadius: '50px',
                  zIndex: 0
                },
                '&:after': {
                  content: "''",
                  position: 'absolute',
                  bottom: -20,
                  right: '-23%',
                  bgcolor: 'transparent',
                  height: 100,
                  width: 100,
                  borderRadius: '50px',
                  zIndex: 0
                }
              }}
            >
              <Fab
                color="primary"
                sx={{
                  bgcolor: '#0c5290'
                }}
                name={v.title}
              >
                {v.icon}
              </Fab>
              <Typography
                variant="h4"
                sx={{
                  mt: 2,
                  mb: 1,
                  color: isDark ? 'common.white' : 'common.black'
                }}
              >
                {v.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? 'common.white' : 'common.black'
                }}
              >
                {v.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
