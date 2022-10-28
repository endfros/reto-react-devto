import React from "react";

export const PostPage = () => {
  return (
    <div classnameName="App">
      <nav classname="d-flex justify-content-between align-items-center">
        <div classname="d-flex justify-content-start align-items-center">
          <a href="../index.html">
            <img
              classname="devimg"
              src="./assets/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </a>
          <p classname="create">Create Post</p>
        </div>
        <div classname="">
          <button type="button" classname="edit">
            Edit
          </button>
          <button type="button" classname="preview">
            Preview
          </button>
        </div>
        <a classname="" href="../index.html">
          <button type="button" classname="preview">
            X
          </button>
        </a>
      </nav>
      <div classname="d-flex flex-column align-items-center">
        <section classname="containerpost rounded">
          <div classname="d-flex align-items-center">
            <label
              for="image-input"
              classname="btn btn-outline-secondary text-dark add-img p-2 mb-2 order-1"
            >
              <i classname="fa fa-cloud-upload"></i> Add a cover image
            </label>
            <label
              for="image-input"
              classname="btn btn-outline-secondary text-dark change-img p-2 mb-2 mx-3 order-3"
            >
              <i classname="fa fa-cloud-upload"></i> Change
            </label>
            <input
              classname=""
              type="file"
              id="image-input"
              accept="image/jpeg, image/png, image/jpg"
            />
            <button classname="btn btn-outline-danger remove-img p-2 mb-2 mx-3 order-4">
              Remove
            </button>
            <div id="display-image" classname="order-2 mx-5 ps-3"></div>
          </div>
          <input
            classname="contenido"
            type="text"
            placeholder="New post title here..."
            id="title"
            required
          />
          <input
            classname="tags"
            id="tags"
            type="text"
            placeholder="Add up to 4 tags"
            required
          />
          <nav classname="d-flex navbar bg-light">
            <div classname="container-fluid">
              {/* <a classname="navbar-brand d-flex"> */}
              <button
                type="button"
                classname="btn-btn-light1"
                //   style="font-size: 20px"
              >
                B<figcaption classname="bold">Bold CTRL +B</figcaption>
              </button>
              <button
                type="button"
                classname="btn-btn-light2"
                //   style="font-size: 20px"
              >
                I<figcaption classname="italic">Italic CRTL + I</figcaption>
              </button>
              <button type="button" classname="btn-btn-light3">
                <img src="./assets/icons8-enlazar-16.png" alt="" />
                <figcaption classname="link">Link CTRL + K</figcaption>
              </button>
              <button type="button" classname="btn-btn-light4">
                <img src="./assets/icons8-lista-numerada-26.png" alt="" />
                <figcaption classname="ordered">Ordered list</figcaption>
              </button>
              <button type="button" classname="btn-btn-light5">
                <img src="./assets/icons8-vista-general-3-30.png" alt="" />
                <figcaption classname="unordered">Unordered list</figcaption>
              </button>
              <button type="button" classname="btn-btn-light6">
                <img src="./assets/icons8-h-26.png" alt="" />
                <figcaption classname="heading">Heading</figcaption>
              </button>
              <button type="button" classname="btn-btn-light7">
                <img src="./assets/icons8-quote-left-24.png" alt="" />
                <figcaption classname="quote">Quote</figcaption>
              </button>
              <button type="button" classname="btn-btn-light8">
                <img src="./assets/icons8-picture-48.png" alt="" />
                <figcaption classname="upload">Upload image</figcaption>
              </button>
              <button type="button" classname="btn-btn-light9">
                <img src="./assets/icons8-menú-2-24.png" alt="" />
              </button>
              {/* </a> */}
            </div>
          </nav>
          <textarea
            classname="contenido2"
            name=""
            id="content"
            cols="300"
            rows="180"
            placeholder="Write your post content here..."
          ></textarea>
        </section>
      </div>
      <div classname="">
        <article classname="container-buttons d-flex align-items-center">
          <button classname="publish" id="btnAdd">
            Publish
          </button>
          <button classname="savedraft">Save draft</button>
          <button classname="tuerca">
            <img src="./assets/icons8-production-order-32.png" alt="" />
          </button>
          <button classname="revert">Revert new changes</button>
        </article>
      </div>
    </div>
  );
};
