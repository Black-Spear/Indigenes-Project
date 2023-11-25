import React from 'react';
import './Popular.css';
import { useTranslation } from 'react-i18next';

export const Popular = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero-section">
        <div className="cardPopular-grid">
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url(https://static.destinationflorence.com/immagini/fc/56/91/0c/blog_scheda_20210928154418.jpg)',
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">{t('popular.category1')}</p>
              <h3 className="cardPopular__heading">{t('popular.heading1')}</h3>
            </div>
          </a>
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1511735643442-503bb3bd348a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXQlMjBjcm9wfGVufDB8fDB8fHww&w=1000&q=80)',
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">{t('popular.category2')}</p>
              <h3 className="cardPopular__heading">{t('popular.heading2')}</h3>
            </div>
          </a>
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url(https://radioalgerie.dz/news/sites/default/files/field/image/dattes2.jpg)',
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">{t('popular.category3')}</p>
              <h3 className="cardPopular__heading">{t('popular.heading3')}</h3>
            </div>
          </a>
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url("https://quietkinetic.files.wordpress.com/2014/05/florida-oranges.jpg")',
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">{t('popular.category4')}</p>
              <h3 className="cardPopular__heading">{t('popular.heading4')}</h3>
            </div>
          </a>
          <div></div>
        </div>
      </section>
    </>
  );
};
