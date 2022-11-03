import React from "react";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { ReactComponent as CloseIcon } from "../assets/closeIcon.svg"

import { ReactComponent as ConfigIcon } from "../assets/configIcon.svg"
import "../pages/createPostPage.scss"

export const CreatePostPage = () => {
    return (
        <div className="container">
        <nav className="createPost__nav">
            <p className="createPost__nav__edit">Edit</p>
            <p className="createPost__nav__preview">Preview</p>
            <button><Link to="/"><CloseIcon/></Link></button>
        </nav>
        <section className="createPost__content">
            <button className="createPost__content__imageButton">Add a cover image</button>
            <input className="createPost__content__title" type="text" placeholder="New post title here..." />
            <input className="createPost__content__tags" type="text" placeholder="Add up to 3 tags..." />
            <input className="createPost__content__content" type="text" placeholder="Write yout post content here..." />
        </section>
        <footer className="createPost__footer">
            <button className="createPost__footer__publish">Publish</button>
            <button className="createPost__footer__button createPost__footer__button--save">Save</button>
            <button className="createPost__footer__button"><ConfigIcon/></button>
            <button className="createPost__footer__button createPost__footer__button--revert">Revert</button>
        </footer>
        </div>
    );
};