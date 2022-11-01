import React from "react";
import "./post.css"

import devimgn from "../components/assets-post/resized_logo_UQww2soKuUsjaOGNB38o.png";
import link from "../components/assets-post/icons8-enlazar-16.png"
import numlist from "../components/assets-post/icons8-lista-numerada-26.png"
import vistgen from "../components/assets-post/icons8-vista-general-3-30.png"
import lamuda from "../components/assets-post/icons8-h-26.png"
import quote from "../components/assets-post/icons8-quote-left-24.png"
import code from "../components/assets-post/icons8-code-50.png"
import codeblock from "../components/assets-post/icons8-placeholder-thumbnail-xml-24.png"
import tuerca from "../components/assets-post/icons8-production-order-32.png"
// import { foto } from "../assets/resized_logo_UQww2soKuUsjaOGNB38o.png";

export const PostPage = () => {
  return (
    <div className="App">
      
        
      
      <nav className="d-flex justify-content-between align-items-center">
        <div className="graycontain">
          <a href="../index.html">
            <img src={devimgn} className="devimg"  alt="" />
          </a>
          <p className="create">Create Post</p>
        </div>
        <div className="">
          <button type="button" className="edit">
            Edit
          </button>
          <button type="button" className="preview">
            Preview
          </button>
        </div>
        <a className="" href="../index.html">
          <button type="button" className="xpreview">
            X
          </button>
        </a>
      </nav>
      <div className="d-flex flex-column align-items-center">
        <section className="containerpost rounded">
          <div className="d-flex align-items-center">
            <label
              htmlFor="image-input"
              className="btn btn-outline-secondary text-dark add-img p-2 mb-2 order-1"
            >
              <i className="addcover"></i > Add a cover image
            </label>
            
            <div id="display-image" className="order-2 mx-5 ps-3"></div>
          </div>
          <input
            className="contenido"
            type="text"
            placeholder="New post title here..."
            id="title"
            required
          />
          <input
            className="tags"
            id="tags"
            type="text"
            placeholder="Add up to 4 tags"
            required
          />
          <nav className="d-flex navbar bg-light">
            <div className="container-fluid">
              {/* <a className="navbar-brand d-flex"> */}
              <button
                type="button"
                className="btn-btn-light1"
                //   style="font-size: 20px"
              >
                B<figcaption className="bold">Bold CTRL +B</figcaption>
              </button>
              <button
                type="button"
                className="btn-btn-light2"
                //   style="font-size: 20px"
              >
                I<figcaption className="italic">Italic CRTL + I</figcaption>
              </button>
              <button type="button" className="btn-btn-light3">
                <img src={link} alt="" />
                <figcaption className="link">Link CTRL + K</figcaption>
              </button>
              <button type="button" className="btn-btn-light4">
                <img src={numlist} alt="" />
                <figcaption className="ordered">Ordered list</figcaption>
              </button>
              <button type="button" className="btn-btn-light5">
                <img src={vistgen} alt="" />
                <figcaption className="unordered">Unordered list</figcaption>
              </button>
              <button type="button" className="btn-btn-light6">
                <img src={lamuda} alt="" />
                <figcaption className="heading">Heading</figcaption>
              </button>
              <button type="button" className="btn-btn-light7">
                <img src={quote} alt="" />
                <figcaption className="quote">Quote</figcaption>
              </button>
              <button type="button" className="btn-btn-light8">
                <img src={code} alt="" />
                <figcaption className="upload">Upload image</figcaption>
              </button>
              <button type="button" className="btn-btn-light9">
                <img src={codeblock} alt="" />
              </button>
              {/* </a> */}
            </div>
          </nav>
          <textarea
            className="contenido2"
            name=""
            id="content"
            cols="300"
            rows="180"
            placeholder="Write your post content here..."
          ></textarea>
        </section>
      </div>
      <div className="">
        <article className="container-buttons d-flex align-items-center">
          <button className="publish" id="btnAdd">
            Publish
          </button>
          <button className="savedraft">Save draft</button>
          <button className="tuerca">
            <img src={tuerca} alt="" />
          </button>
          <button className="revert">Revert new changes</button>
        </article>
      </div>
      
    </div>
  );
};
