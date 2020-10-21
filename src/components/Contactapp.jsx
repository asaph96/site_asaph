import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Form from './Form/Form';

import { PortfolioProvider } from '../context/context';

import { footerData } from '../mock/data';

function ContactApp() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <Form  />
      <Footer />
    </PortfolioProvider>
  );
}

export default ContactApp;