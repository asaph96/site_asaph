import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Form = () => {
  return (
    <section id="form">
      <Container>
        <Title title="Formulário de contato" />
        <form
          name="Contato"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/obrigado"
        >
          <input type="hidden" name="form-name" value="Contato" />
          <div>
            <label>
              Seu Nome: <input type="text" name="nome" />
            </label>
          </div>
          <div>
            <label>
              Seu Email: <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Seu Telefone: <input type="telefone" name="telefone" />
            </label>
          </div>
          <div>
            <label>
              Motivo de contato:
              <select name="motivo">
                <option value="Colaboração">Colaboração</option>
                <option value="Networking">Networking</option>
                <option value="Outro">Outro</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Mensagem: <textarea name="message"></textarea>
            </label>
          </div>
          <div>
            <p class="hidden">
              <label>
                Não preencha se for humano 🤖: <input name="bot-field" />
              </label>
            </p>
          </div>
          <div>
            <button type="submit" className="cta-btn cta-btn--hero">
              Enviar
            </button>
          </div>
        </form>
        <br/><br/><br/>
        <a
          target="_self"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href="/"
        >
          Voltar
        </a>
      </Container>
    </section>
  );
};

export default Form;
