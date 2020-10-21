import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { footerData } from '../mock/data';

function ObrigadoApp() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <p>
        <h1 className="thanks-title">Obrigado pela mensagem 💬</h1>
      </p>
      <p>
        <h2 className="thanks-title">Em breve retornarei!!</h2>
      </p>
      <p>
        <a target="_self" rel="noopener noreferrer" className="cta-btn cta-btn--thanks" href="/">
          Voltar
        </a>
      </p>
      <Footer />
    </PortfolioProvider>
  );
}

export default ObrigadoApp;
