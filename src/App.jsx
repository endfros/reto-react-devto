import React from "react";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as BellIcon } from "./assets/bell.svg";
import profilePicture from "./assets/pp.webp";

import "./App.scss";

function App() {
  return (
    <>
      <nav className="main-navigation">
        <section className="desktop-navbar">
          <section className="desktop-navbar__left">
            <img
              className="desktop-navbar__left__image"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="Dev.to Logo"
            />
            <div className="desktop-navbar__left__search ">
              <input type="text" placeholder="Search..." />
              <button>
                <SearchIcon />
              </button>
            </div>
          </section>
          <section className="desktop-navbar__actions">
            <button className="desktop-navbar__actions__create-post">
              Create Post
            </button>
            <button>
              <BellIcon />
            </button>
            <button>
              <img
                className="desktop-navbar__actions__image h-8 w-8 rounded-full"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
                alt="User avatar"
              />
            </button>
          </section>
        </section>
      </nav>
      <section className="layout">
        <aside className="navbars">
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">
                  <HomeIcon />
                  Home
                </div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">
                  <HomeIcon />
                  Home
                </div>
              </li>
            </ul>
          </nav>
          <nav className="navbar">
            <p className="navbar__title">Other</p>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">
                  <HomeIcon />
                  Home
                </div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">
                  <HomeIcon />
                  Home
                </div>
              </li>
            </ul>
          </nav>
          <nav className="navbar">
            <p className="navbar__title">My Tags</p>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#webdev</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#webdev</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#webdev</div>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <ul className="feed">
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
            <li>
              <article className="post">
                <img
                  className="post__image"
                  src={profilePicture}
                  alt="User avatar"
                />
                <section>
                  <section className="post__user">
                    <p>Suraj Vishwakarma</p>
                    <p className="post__user__time">Oct 24 (18 hours ago)</p>
                  </section>
                  <h3 className="post__title">
                    Awesome Websites For UI/UX Inspiration
                  </h3>
                  <section className="post__tags">
                    <div>#javascript</div>
                    <div>#webdev</div>
                    <div>#beginners</div>
                  </section>
                  <section className="post__interactions">
                    <section>
                      <button>153 Reactions</button>
                      <button>2 Comments</button>
                    </section>
                    <button className="post__interactions__reading">
                      19 min read
                    </button>
                  </section>
                </section>
              </article>
            </li>
          </ul>
        </main>
        <aside className="sidebar">
          <section className="card">
            <p className="card__title">Listings</p>
            <section className="sidebar-element">
              <p className="sidebar-element__title">
                Building a Notion-like system with Nest.js, React and Novu
              </p>
              <p className="sidebar-element__category">collabs</p>
            </section>
            <section className="sidebar-element">
              <p className="sidebar-element__title">
                Building a Notion-like system with Nest.js, React and Novu
              </p>
              <p className="sidebar-element__category">collabs</p>
            </section>
          </section>
          <section className="card">
            <p className="card__title">#help</p>
            <section className="sidebar-element">
              <p className="sidebar-element__title">
                Building a Notion-like system with Nest.js, React and Novu
              </p>
              <div className="sidebar-element__new-tag-wrapper">
                <p className="sidebar-element__new-tag">New</p>
              </div>
            </section>
            <section className="sidebar-element">
              <p className="sidebar-element__title">
                Building a Notion-like system with Nest.js, React and Novu
              </p>
              <div className="sidebar-element__new-tag-wrapper">
                <p className="sidebar-element__new-tag">New</p>
              </div>
            </section>
          </section>
        </aside>
      </section>
    </>
  );
}

export default App;
