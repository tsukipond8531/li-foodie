import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Container, ButtonBase, Box } from '@mui/material';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, background: '#000', opacity: 0.5, transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 180,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: require(`../../css/images/items/burrah-kabab.jpg`),
    title: 'Starter',
    width: '40%',
  },
  {
    url: require(`../../css/images/items/cornflex.jpg`),
    title: 'Breakfast',
    width: '28%',
  },
  {
    url: require(`../../css/images/items/italian-cuisine-pizza.jpg`),
    title: 'Pizza',
    width: '32%',
  },
  {
    url: require(`../../css/images/items/lisa-fotios.jpg`),
    title: 'Drinks',
    width: '30%',
  },
  {
    url: require(`../../css/images/items/punjabi-thali.jpg`),
    title: 'Dinner',
    width: '40%',
  },
  {
    url: require(`../../css/images/items/chicken-stew.jpg`),
    title: 'Soup',
    width: '30%',
  },
  {
    url: require(`../../css/images/items/veg-polao.jpg`),
    title: 'Pure Veg',
    width: '25%',
  },
  {
    url: require(`../../css/images/items/zafrani-biriyani.jpg`),
    title: 'Signature',
    width: '37%',
  },
  {
    url: require(`../../css/images/items/cupcake.jpg`),
    title: 'Dessert',
    width: '38%',
  },
];

export function LandingComponent4() {
  return (
    <section className='min-w-full h-auto bg-gradient-to-b from-slate-200 to-slate-600 pt-8 pb-4'>
      <Container component="section" sx={{ mt: 8, mb: 4 }} style={{minWidth: '80%'}}>
        <h1 className='text-4xl sm:text-5xl txt7 text-center'>
          For all tastes and all desires
        </h1>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title} style={{width: image.width}}>
              <Box sx={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,backgroundSize: 'cover',backgroundPosition:'center 40%',backgroundImage: `url(${image.url})`,}}/>
              <ImageBackdrop className="imageBackdrop" />
              <Box sx={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'common.white',}}>
                <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </ImageIconButton>
          ))}
        </Box>
      </Container>
    </section>
  )  
}