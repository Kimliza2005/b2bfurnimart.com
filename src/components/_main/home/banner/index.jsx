'use client';
import React from 'react';
import Link from 'next/link';
// mui
import { Box, Typography, Grid, Button, Container, Stack } from '@mui/material';
// blur image
import Image from 'next/image';

export default function Banner() {
  return (
    <Box
      sx={{
        mt: 4,
        overflow: 'hidden',
        position: 'relative',
        display: { md: 'block', xs: 'none' },
        color: 'common.white',
        '&:before': {
          content: "''",
          position: 'absolute',
          bottom: '-40px',
          left: 100,
          height: 80,
          width: 80,
          borderRadius: '50px',
          zIndex: 0
        }
      }}
    >
      <Box
        sx={{
          mt: 3,
          border: (theme) => '1px solid ' + theme.palette.divider,
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          py: 1,
          bgcolor: '#0c5290',
          color: 'common.white',
          '&:before': {
            content: "''",
            position: 'absolute',
            top: '-40px',
            left: '40%',
            height: 100,
            width: 100,
            borderRadius: '50px',
            zIndex: 0
          }
        }}
      >
        <Container fixed>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={6} md={6}>
              <Stack spacing={2}>
                <Typography variant="h2" fontWeight={900} color="common.white">
                  Modern Dining Furniture Collection
                </Typography>
                <Typography variant="body1" color="common.white">
                  Discover timeless designs crafted for comfort and elegance. Our premium dining sets blend style and
                  functionality to transform your space into a welcoming retreat.
                </Typography>
                <Box>
                  <Button component={Link} href="/#" variant="contained" color="success" size="large">
                    View more
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 0,
                  '&:after': {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    transform: 'translateY(10%)',
                    borderRadius: '50%',
                    bgcolor: '#FFB48C',
                    display: 'block',
                    p: { md: '50%', xs: '50%' }
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    transform: 'translateY(2%)',
                    '&:after': {
                      content: "''",
                      display: 'block',
                      pb: { md: '80%', xs: '80%' }
                    }
                  }}
                >
                  <Image
                    src="/images/banner-3.png"
                    alt="centered-banner"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="/images/banner-3.png"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
