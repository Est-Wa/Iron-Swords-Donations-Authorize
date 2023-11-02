import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Layout from './BackgroundLayout';
import backgroundImage from './images/Background-flag.jpg'
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
        backgroundColor: '#7fc7d9', 
        backgroundPosition: 'center',
      }}
    >
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
      >
        {t('app.about')}
      </Typography>
      <Typography variant="body1"  align="center" >  
      {t('app.text.rule1')}
      <br/>
      {t('app.text.rule2')}
      <br/>
      {t('app.text.rule3')}
      <br/>
      {t('app.text.rule4')}
      </Typography>
    <Typography variant="h6"  align="center" marginBottom={'2%'} >
    {t('app.text.contact')} 
    </Typography>

      <Button
        variant="contained"
        size="large"
        component="a"
        href="https://forms.office.com/r/1QhKunhUhk"
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
        href="https://forms.office.com/r/vE69n0MUc6"
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