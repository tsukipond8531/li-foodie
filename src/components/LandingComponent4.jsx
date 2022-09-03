import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Container, ButtonBase, Box } from '@mui/material';
import { Link } from 'react-router-dom'

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
    url: process.env.REACT_APP_BREAKFAST_URL,
    title: 'Breakfast',
    width: '31%',
  },
  {
    url: process.env.REACT_APP_DESSERT_URL,
    title: 'Dessert',
    width: '34%',
  },
  {
    url: process.env.REACT_APP_DINNER_URL,
    title: 'Dinner',
    width: '35%',
  },
  {
    url: process.env.REACT_APP_DRINKS_URL,
    title: 'Drinks',
    width: '37%',
  },
  {
    url: process.env.REACT_APP_PIZZA_URL,
    title: 'Pizza',
    width: '35%',
  },
  {
    url: process.env.REACT_APP_VEG_URL,
    title: 'Pure Veg',
    width: '28%',
  },
  {
    url: process.env.REACT_APP_SIGNATURE_URL,
    title: 'Signature',
    width: '34%',
  }, 
  {
    url: process.env.REACT_APP_SOUP_URL,
    title: 'Soup',
    width: '31%',
  },
  {
    url: process.env.REACT_APP_STARTER_URL,
    title: 'Starter',
    width: '35%',
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
              <Link to='/sub-menu' state={{from : image.title}}>
                <Box sx={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,backgroundSize: 'cover',backgroundPosition:'center 40%',backgroundImage: `url(${image.url})`,}}/>
                <ImageBackdrop className="imageBackdrop" />
                <Box sx={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'common.white',}}>
                  <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                    {image.title}
                    <div className="imageMarked" />
                  </Typography>
                </Box>
              </Link>
            </ImageIconButton>
          ))}
        </Box>
      </Container>
    </section>
  )  
}