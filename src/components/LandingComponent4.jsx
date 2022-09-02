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
    url: 'https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/burrah-kabab.jpg?alt=media&token=a0c79109-0cb1-49b4-812d-86aa0d719725',
    title: 'Starter',
    width: '40%',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cornflakes.jpg?alt=media&token=45835d36-dfb3-4c2e-91aa-9536c35e73f9',
    title: 'Breakfast',
    width: '28%',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/italian-cuisine-pizza.jpg?alt=media&token=0c662184-8650-4008-a309-1179504673a2',
    title: 'Pizza',
    width: '32%',
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/lisa-fotios.jpg?alt=media&token=44f42d48-d2a2-47f0-a3fe-4d29ab9afe92",
    title: 'Drinks',
    width: '30%',
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/punjabi-thali.jpg?alt=media&token=a231b876-f490-4bb4-b071-bb010437c6ef",
    title: 'Dinner',
    width: '40%',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-stew.jpg?alt=media&token=90c15538-6811-433d-b705-c6845a11e3de',
    title: 'Soup',
    width: '30%',
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-polao.jpg?alt=media&token=fa3ce185-ff0a-4846-ae11-b4e7e41cfd09",
    title: 'Pure Veg',
    width: '25%',
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/zafrani-biriyani.jpg?alt=media&token=31e0bc8f-8744-49ea-bc06-ca4ab39d4630",
    title: 'Signature',
    width: '37%',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cupcake.jpg?alt=media&token=eab3b662-1c57-4393-b2ee-90875754780d',
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