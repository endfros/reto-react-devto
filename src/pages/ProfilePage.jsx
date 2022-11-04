import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Header } from "../components/profilePage/Header";
import { UserStats } from "../components/profilePage/UserStats";
import { Feed } from "../components/profilePage/Feed";
import "./ProfilePage.scss";

export const ProfilePage = (props) => {
  // const { token } = props;
  useEffect(() => {
    fetch("http://localhost:8080/post/me", {
      headers: { Authorization: props.token },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data.posts);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch("http://localhost:8080/writer/me", {
      headers: { Authorization: props.token },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch("http://localhost:8080/comment/me", {
      headers: { Authorization: props.token },
    })
      .then((res) => res.json())
      .then((res) => {
        setComments(res.data.comment.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState(null);
  return (
    <DefaultLayout>
      <main className="main">
        <Header name={user.name} bio={user.bio} />
        <div className="userFeed">
          <UserStats comments={comments} posts={posts.length} />
          <section className="feedSection">
            <ul className="feed">
              {posts.map((post) => (
                <Feed
                  key={post.id}
                  title={post.title}
                  hashtags={post.hashtags}
                  reactions={post.reactions}
                  readingTime={post.readingTime}
                  date={post.date}
                  user={post.user.name}
                  comment={post.comment.length}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
};
