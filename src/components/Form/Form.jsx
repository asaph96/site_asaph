import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Form = () => {

    return (
        <section id="form">
            <Container>
                <Title title="Formulário de contato" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                    <form name="Contato" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <p>
                            <label>Seu Nome: <input type="text" name="nome" /></label>
                        </p>
                        <p>
                            <label>Seu Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Motivo de contato:
                                <select name="motivo">
                                    <option value="1">Colaboração</option>
                                    <option value="2">Networking</option>
                                    <option value="3">Outro</option>
                                </select>
                            </label>
                        </p>
                        <p>
                            <label>Mensagem: <textarea name="message"></textarea></label>
                        </p>
                        <p class="hidden">
                            <label>Não preenxa se voce for humano 🤖: <input name="bot-field" /></label>
                        </p>
                        <p>
                            <button type="submit">Enviar</button>
                        </p>

                    </form>
                    <a
                        target="_self"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href="/"
                    >
                        Voltar
                    </a>
                </Fade>
            </Container>
        </section>
    );
};

export default Form;
