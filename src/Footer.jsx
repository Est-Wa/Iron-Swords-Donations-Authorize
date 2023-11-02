import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const footerStyle = {
  position: 'sticky',
  zIndex: -100,
  bottom: 0,
  width: '98%',
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={footerStyle}>

      <Typography variant="body2" color="#001651" align="center" >
      ♥ ביחד ננצח 
<br/>
      all rights reserved 2023 ©
      <br/>
      {t('footer.text')}
      </Typography>
    </footer>
  );
};

export default Footer;
