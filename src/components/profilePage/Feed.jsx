import React from "react";
import profilePicture from "../../assets/neov.jpeg";
import loveLogo from "../../assets/love.svg";
import commentLogo from "../../assets/comment.svg";
import saveLogo from "../../assets/save.svg";
import "./Feed.scss";

export const Feed = (props) => {
  const { key, title, hashtags, reactions, readingTime, date, user, comment } =
    props;
  return (
    <>
      <li>
        <article className="post" key={key}>
          <img className="post__image" src={profilePicture} alt="User avatar" />
          <section>
            <section className="post__user">
              <p>{user}</p>
              <p className="post__user__time">{date}</p>
            </section>
            <h3 className="post__title">{title}</h3>
            <section className="post__tags">
              {hashtags.map((hashtag) => (
                <div>#{hashtag}</div>
              ))}
            </section>
            <section className="post__interactions">
              <section className="info">
                <button>
                  <img src={loveLogo} className="logos" alt="" />
                  {reactions} Reactions
                </button>
                <button>
                  <img src={commentLogo} className="logos" alt="" />
                  {comment} Comments
                </button>
              </section>
              <button className="post__interactions__reading">
                {readingTime} min read
              </button>
              <button>
                <img src={saveLogo} className="Logos" alt="" />
              </button>
            </section>
          </section>
        </article>
      </li>
    </>
  );
};
