import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  width: '98%',
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={footerStyle}>
      <Typography variant="h6" align="center" gutterBottom sx={{'color':'whitesmoke'}}>
        ♥ ביחד ננצח 
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" sx={{'color':'whitesmoke'}}>
      all rights reserved 2023 ©
      <br/>
      {t('footer.text')}
      </Typography>
    </footer>
  );
};

export default Footer;
