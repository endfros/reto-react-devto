import React, {useState, useEffect} from "react";

import "./postPage.scss"
import profilePicture from "../assets/pp.webp";
import  { DefaultLayout } from "../layout/DefaultLayout"

import { ReactComponent as LikeIcon } from "../assets/likeIcon.svg";
import { ReactComponent as CommentIcon } from "../assets/commentIcon.svg";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";
import { ReactComponent as OptionsIcon } from "../assets/optionsIcon.svg";

import { useParams } from 'react-router-dom';

export const PostPage = (props) => {

  const val = useParams()

  const [post, setPost] = useState([])
  const [user, setUser] = useState()
  const [bio, setBio] = useState()
  const [date, setDate] = useState()
  const [comment, setComment] = useState()
  const [commentNumber, setCommentNumber] = useState()
  const [nationality, setNationality] = useState()
  const [hashtags, setHashtags] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/post/${val.postId}`)
        .then((res) =>res.json())
        .then(post => {
          setPost(post.data.cards)
          setUser(post.data.cards.user.name)
          setBio(post.data.cards.user.bio)
          setNationality(post.data.cards.user.nationality)
          setDate(post.data.cards.user.date)
          setHashtags(post.data.cards.hashtags)
          setCommentNumber(post.data.cards.comment.length)
          setComment(post.data.cards.comment)
        })
  },[])

  const addComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text")

    const reactions = 2

    fetch(`http://localhost:8080/comment/post/${val.postId}`,{
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': props.token,
      },
      body: JSON.stringify(({
          text,
          reactions
      }))
  })
   .then((res) => res.json())
   .then((res) => {
      console.log(res)
   })

  }

  return (
  <DefaultLayout>
    <div className="post-layout">
      <aside className="aside-left">
          <button className="post__aside-icon"><LikeIcon/></button>
          <span>{post.reactions}</span>
          <button className="post__aside-icon"><CommentIcon/></button>
          <span>{commentNumber}</span>
          <button className="post__aside-icon"><SaveIcon/></button>
          <button className="post__aside-icon"><OptionsIcon/></button>
      </aside>
      <article className="post">
                            <img
                              className="post__image"
                              src={profilePicture}
                              alt="User avatar"
                            />
                            <section>
                              <section className="post__user">
                                <p>{user}</p>
                                <p className="post__user__time">Posted on: {post.date}</p>
                              </section>

                              <h3 className="post__title--post">
                                  {post.title}
                              </h3>
  
                              <section className="post__tags">
                                {hashtags.map((tag) => (
                                    <div>#{tag}</div>
                                ))}
                              </section>

                              <section className="post__content">
                                  {post.body}
                              </section>
                              <section className="post__comments">
                                <h2>Comments:</h2>
                                  {comment?.map((com,index) => (
                                    <div>{com.text}</div>
                                  ))}
                                <h2>Write a comment:</h2>
                                <form className="post__comments__form" action="" onSubmit={addComment} >
                                  <input name="text" type="text" className="post__comments__form--content" />
                                  <input type="submit" className="card-profile__button" value="Post comment" />
                                </form>
                              </section>
                            </section>
      </article>
      <aside className="aside-right">
        <section className="card">
          <div className="card-profile text-bg-white">
            <img
                className="post__image"
                src={profilePicture}
                alt="User avatar"
            />

            <h5 className="card-profile__title">{user}</h5>

            <div className="">
              <button type="button" className="card-profile__button">Follow</button>
            </div>

            <small className="card-profile__info">
              <ul className="list-group">
                <li className="list-group-itemaside">
                  <p className="fw-light">{bio}</p>
                </li>
                <li className="list-group-itemaside">
                  <p className="">Nationality</p>
                  <p className="">{nationality}</p>

                </li>
                <li className="list-group-itemaside">
                  <p className="">EDUCATION</p>
                  <p className="">University of New Brunswick</p>
                </li>
                <li className="list-group-itemaside">
                  <p className="">JOINED</p>
                  <p className="">{date}</p>
                </li>
              </ul>
            </small>

          </div>
        <section>

  </section>
        </section>
      </aside>
      <footer className="post__footer">
      <button className="post__aside-icon"><LikeIcon/></button>
          <span>{post.reactions}</span>
          <button className="post__aside-icon"><CommentIcon/></button>
          <span>{commentNumber}</span>
          <button className="post__aside-icon"><SaveIcon/></button>
          <button className="post__aside-icon"><OptionsIcon/></button>
      </footer>
    </div>

  </DefaultLayout>
  );
};
