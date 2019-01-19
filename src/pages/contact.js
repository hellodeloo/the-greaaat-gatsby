import React from 'react'

import Page from '../components/Page'

export default () => (
  <Page bodyClass='contact' subFooter={false} title="Contactez-nous">
    <div className="banner banner--big">
      <div className="wrapper">
        <p className="banner__subtitle">Envie de travailler avec nous ?</p>
        <h1 className="banner__title">Nous contacter</h1>
      </div>
    </div>

    <div className="wrapper">
      <section className="main__content">
        <h3>Formulaire de contact</h3>

        <form name="contact" method="post" action="/success" className="form" data-netlify="true" data-netlify-honeypot="url">
          <div className="form-row">
            <label>Prénom <span>*</span>
              <input type="text" name="surname" required />
            </label>

            <label>Nom <span>*</span>
              <input type="text" name="name" required />
            </label>
          </div>

          <div className="form-row">
            <label>E-mail <span>*</span>
              <input type="email" name="email" required />
            </label>

            <label>Téléphone
              <input type="text" name="phone" />
            </label>
          </div>

          <div className="form-row">
            <label>Site web
              <input type="url" name="website" />
            </label>

            <label>Budget
              <select name="budget">
                <option value="Ne sais pas">Ne sais pas</option>
                <option value="Moins de 1 500€">Moins de 1 500€</option>
                <option value="De 1 500€ à 3 000€">De 1 500€ à 3 000€</option>
                <option value="De 3 000€ à 6 000€">De 3 000€ à 6 000€</option>
                <option value="De 6 000€ à 10 000€">De 6 000€ à 10 000€</option>
                <option value="Plus de 10 000€">Plus de 10 000€</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>Sujet <span>*</span>
              <input type="text" name="subject" required />
            </label>
          </div>

          <div className="form-row">
            <label>Message <span>*</span>
              <textarea name="message" rows="10" required></textarea>
            </label>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <div className="form-row-last">
            <label>Url
              <input type="text" name="url" />
            </label>
          </div>

          <div className="form-buttons">
            <input type="hidden" name="form-name" value="contact" />
            <input type="submit" className="btn" value="Envoyer" />
          </div>
        </form>
      </section>
    </div>
  </Page>
)
