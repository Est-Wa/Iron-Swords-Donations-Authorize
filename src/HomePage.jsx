import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Layout from './BackgroundLayout';
import backgroundImage from './images/israel-flag.jpg'
import Footer from './Footer.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';




export default function Product() {
    const { t } = useTranslation();

  return (
    <>
    <Layout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
        <LanguageSelector />
      <Typography color="inherit" align="center" variant="h2" marked="center"  >
      {t('app.title')}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {t('app.about')}
      </Typography>

      <Button
        variant="contained"
        size="large"
        component="a"
        href="https://forms.office.com/r/1QhKunhUhk?origin=lprLink"
        sx={{ minWidth: 200 ,
        backgroundColor: 'white',
      color:'#001651'}}
      >
        {t('button.receive')}
      </Button>

      <Button
        variant="contained"
        size="large"
        component="a"
        href="https://forms.office.com/r/vE69n0MUc6?origin=lprLink"
        sx={{ minWidth: 200 ,
        backgroundColor: 'white',
      color:'#001651',
      margin: '10px', // Add margin for space
    }}
      >
        {t('button.donate')}
      </Button>
    </Layout>
          <Footer />
          </>
  );
}