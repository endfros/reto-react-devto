import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { ReactComponent as CloseIcon } from "../assets/closeIcon.svg"

import { ReactComponent as ConfigIcon } from "../assets/configIcon.svg"
import "../pages/createPostPage.scss"
import { useState } from "react";

export const CreatePostPage = (props) => {
    
    const [sucessfulPost, setSuccessfulPost] = useState(false);

    console.log(props.token)

    const post = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title")
        const hashtags = [formData.get("hashtags")];
        const body = formData.get("body");

        const newPost = {
            title,
            hashtags,
            body
        }

        console.log(newPost)

        fetch("http://localhost:8080/post",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            },
            body: JSON.stringify(({
                title,
                hashtags,
                body
            }))
        })
         .then((res) => res.json())
         .then((res) => {
            console.log(res)
         })
    }

    return (
        <div className="container">
        <nav className="createPost__nav">
            <Link className="createPost__nav__image" to="/">
            <img
                className="desktop-navbar__left__image"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Dev.to Logo"
            />
            </Link>
            <p className="createPost__nav__title">Create Post</p>
            <p className="createPost__nav__edit">Edit</p>
            <p className="createPost__nav__preview">Preview</p>
            <button><Link to="/"><CloseIcon/></Link></button>
        </nav>
        <section className="createPost__content">
            <button className="createPost__content__imageButton">Add a cover image</button>
            <form className="form" onSubmit={post}>
                <input name="title" className="createPost__content__title" type="text" placeholder="New post title here..." />
                <input name="hashtags" className="createPost__content__tags" type="text" placeholder="Add up to 3 tags..." />
                <input name="body" className="createPost__content__content" type="text" placeholder="Write yout post content here..." />
                <input className="createPost__footer__publish" type="submit" value="Publish" />
            </form>
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