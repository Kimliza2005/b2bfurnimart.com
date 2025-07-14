'use client';
import React from 'react';
import Link from 'next/link';
// mui
import { Box, Card, Grid, Stack, Typography, Button, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// next
import Image from 'next/image';

export default function Index() {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up('xl'));
  const isDeskTopBtn = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box my={6}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* === LEFT CARD === */}
          <Grid item lg={6} md={6} xs={12}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#0c5290',
                borderRadius: 1,
                boxShadow: 'none',
                height: '100%',
                position: 'relative',
                '&:after': {
                  content: "''",
                  position: 'absolute',
                  top: '-10px',
                  right: 0,
                  backgroundColor: '#0c5290',
                  height: { xs: 250, md: 250, xl: 340 },
                  width: { xs: 160, md: 220, xl: 340 },
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  zIndex: '-1'
                }
              }}
            >
              <Stack spacing={isDeskTop ? 2 : 1.5} sx={{ p: { sm: '24px', xs: '12px' } }}>
                <Typography
                  variant={isDeskTop ? 'h3' : 'h4'}
                  color="common.white"
                  lineHeight={1}
                  sx={{
                    fontSize: {
                      xl: 32,
                      lg: 24,
                      md: 24,
                      sm: 20,
                      xs: 12
                    }
                  }}
                >
                  ErgoMax Pro Chair
                </Typography>
                <Typography
                  variant={isDeskTop ? 'subtitle1' : 'subtitle2'}
                  color="common.white"
                  lineHeight={1}
                  noWrap
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 16,
                      xs: 12
                    }
                  }}
                >
                  {/* Optional Sale Text */}
                </Typography>
                <Typography
                  variant={isDeskTop ? 'body1' : 'body2'}
                  color="common.white"
                  mb={2}
                  display={{ md: 'block', xs: 'none' }}
                  width={{ xl: 270 }}
                >
                  Ergonomic design that supports you through work and play. <br />
                  Perfect for gamers, creators, and long hours at the desk.
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="#"
                    variant="contained"
                    color={'primary'}
                    size={isDeskTopBtn ? 'medium' : 'small'}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Stack>
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 150, md: 235, xl: 340 },
                  height: { xs: 151, md: 220, xl: 320 },
                  zIndex: 1
                }}
              >
                <Image
                  fill
                  objectFit="contain"
                  draggable="false"
                  src="/images/top-banners/blue-chair.png"
                  alt="blue chair"
                  sizes="20vw"
                />
              </Box>
            </Card>
          </Grid>

          {/* === RIGHT CARD === */}
          <Grid item lg={6} md={6} xs={12}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#0c5290',
                borderRadius: 1,
                boxShadow: 'none',
                height: '100%',
                position: 'relative',
                '&:after': {
                  content: "''",
                  position: 'absolute',
                  top: '-10px',
                  right: 0,
                  backgroundColor: '#0c5290',
                  height: { xs: 250, md: 250, xl: 340 },
                  width: { xs: 160, md: 220, xl: 340 },
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  zIndex: '-1'
                }
              }}
            >
              <Stack spacing={isDeskTop ? 2 : 1.5} sx={{ p: { sm: '24px', xs: '12px' } }}>
                <Typography
                  variant={isDeskTop ? 'h3' : 'h4'}
                  color="common.white"
                  lineHeight={1}
                  noWrap
                  sx={{
                    fontSize: {
                      xl: 32,
                      lg: 24,
                      md: 24,
                      sm: 20,
                      xs: 12
                    }
                  }}
                >
                  ComfortX Executive Chair
                </Typography>
                <Typography
                  variant={isDeskTop ? 'subtitle1' : 'subtitle2'}
                  color="common.white"
                  lineHeight={1}
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 16,
                      xs: 12
                    }
                  }}
                >
                  {/* Optional Sale Highlight */}
                </Typography>
                <Typography
                  variant={isDeskTop ? 'body1' : 'body2'}
                  color="common.white"
                  mb={2}
                  display={{ md: 'block', xs: 'none' }}
                >
                  Elevate your home office with premium lumbar support and bold style. <br />
                  Built for comfort and confidence.
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="/products?gender=men"
                    variant="contained"
                    color={'secondary'}
                    size={isDeskTopBtn ? 'medium' : 'small'}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Stack>
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 150, md: 215, xl: 300 },
                  height: { xs: 150, md: 220, xl: 320 },
                  zIndex: 1
                }}
              >
                <Image
                  fill
                  objectFit="cover"
                  src="/images/top-banners/red-chair.png"
                  alt="red chair"
                  sizes="20vw"
                  draggable="false"
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
