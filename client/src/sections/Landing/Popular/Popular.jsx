import React from 'react';
import './Popular.css';

export const Popular = () => {
  return (
    <>
     
      <section className="hero-section">
        <div className="cardPopular-grid">
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url(https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_696,h_522/https://www.selection.ca/wp-content/uploads/2019/03/bienfaits-de-l-huile-d-olive-bon-pour-la-sante-gras.jpg?fit=696,522)',
                  
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">Sfax</p>
              <h3 className="cardPopular__heading">
                The most exquisite olives
              </h3>
            </div>
          </a>
          <a className="cardPopular" href="#">
            <div
              className="cardPopular__background"
              style={{
                backgroundImage:
                  'url(https://ak9.picdn.net/shutterstock/videos/6604289/thumb/1.jpg?ip=x480)',
              }}
            />
            <div className="cardPopular__content">
              <p className="cardPopular__category">Beja</p>
              <h3 className="cardPopular__heading">
                Excellent wheat crops production
              </h3>
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
              <p className="cardPopular__category">Tozeur</p>
              <h3 className="cardPopular__heading">
                World's best date industry
              </h3>
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
              <p className="cardPopular__category">Nabeul</p>
              <h3 className="cardPopular__heading">
                The finest citrus species
              </h3>
            </div>
          </a>
          <div></div>
        </div>
      </section>
    </>
  );
};
