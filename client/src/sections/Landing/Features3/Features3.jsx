import React from 'react';
import './Features3.css'

export const Features3 = () => {
  return (
    <>
      <title>Card Effect</title>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-windows" />
              <h3>Windows</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="#" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-android" /> <h3>Android</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="#" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-apple" />
              <h3>Apple</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="#" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
