import React from "react";
import { Link } from "react-router-dom"

export const PostCard = ({id,title,hastags,reactions,readingTime,user}) => {
    return(
    <li>
        <article className="post">
          <img
            className="post__image"
            src={profilePicture}
            alt="User avatar"
          />
          <section>
            <section className="post__user">
              <p>{user}</p>
              <p className="post__user__time">Oct 24 (18 hours ago)</p>
            </section>
            <h3 className="post__title">
              {title}
            </h3>
            <section className="post__tags">
              <div>#{hastags}</div>
            </section>
            <section className="post__interactions">
              <section>
                <button>{reactions} Reactions</button>
                <button>2 Comments</button>
              </section>
              <button className="post__interactions__reading">
                {readingTime} min read
              </button>
            </section>
          </section>
        </article>
    </li>
    )
}