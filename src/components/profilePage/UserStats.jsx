import React from "react";
import commentsLogo from "../../assets/comments.svg";
import postsLogo from "../../assets/posts.svg";
import tagsLogo from "../../assets/tags.svg";
import "./UserStats.scss";

export const UserStats = (props) => {
  const { comments, posts } = props;
  return (
    <aside className="stats">
      <p className="stat">
        <img className="imgStats" src={postsLogo} alt="comments logo" />
        <span> {posts} post published</span>
      </p>
      <p className="stat">
        <img className="imgStats" src={commentsLogo} alt="comments logo" />
        <span> {comments} comments written</span>
      </p>
      <p className="stat">
        <img className="imgStats" src={tagsLogo} alt="comments logo" />
        <span> 0 tags followed</span>
      </p>
    </aside>
  );
};
