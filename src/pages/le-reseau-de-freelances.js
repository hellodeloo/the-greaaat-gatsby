import React from 'react'

import Page from '../components/Page'

export default () => (
  <Page bodyClass="le-reseau-de-freelances" title="Le réseau de freelances">
    <div className="banner banner--big">
      <div className="wrapper">
        <p className="banner__subtitle">Greaaat</p>
        <h1 className="banner__title">Le réseau de freelances</h1>
      </div>
    </div>

    <div className="wrapper">
      <section className="main__content">
        <p className="lead mbl">Greaaat est un réseau de freelances en qui vous pouvez avoir confiance et spécialisés dans les métiers du web.</p>
        <h2>Nos valeurs</h2>
        <p>Nos valeurs définissent qui nous sommes, notre vision du métier de freelance. Chaque membre a été soigneusement sélectionné suivant les critères ci-dessous.</p>

        <div className="disp-t table">
          <div className="disp-tr">
            <div className="disp-tc">
              <h3 className="title">Confiance</h3>
              <p>Des freelances qui ne laisseront jamais leurs clients en difficultés.</p>
            </div>
            <div className="disp-tc">
              <h3 className="title">Qualité</h3>
              <p>Des freelances qui donneront le meilleur d’eux-mêmes pour leurs clients.</p>
            </div>
          </div>
          <div className="disp-tr">
            <div className="disp-tc">
              <h3 className="title">Partage</h3>
              <p>Des freelances qui aiment partager leurs ressources leur méthodologie.</p>
            </div>
            <div className="disp-tc">
              <h3 className="title">Disponibilité</h3>
              <p>Des freelances à temps plein et passionnés</p>
            </div>
          </div>
        </div>
        <hr />
        <h2>Postuler</h2>
        <p>Si vous voulez postuler, il faut savoir que nous n&rsquo;acceptons plus que les candidatures par recommandation par l&rsquo;un des freelances du réseau.</p>
        <div>&nbsp;</div>
      </section>
    </div>
  </Page>
)
