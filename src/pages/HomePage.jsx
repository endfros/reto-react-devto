import React, {useEffect, useState} from "react";
import axios from "axios";

import { PostCard } from "../components/PostCard";
import "./homePage.scss";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import profilePicture from "../assets/pp.webp";
import { DefaultLayout } from "../layout/DefaultLayout";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg"
import { ReactComponent as CloseIcon } from "../assets/closeIcon.svg"
import { ReactComponent as ReadingIcon } from "../assets/readingIcon.svg"
import { ReactComponent as ListingsIcon } from "../assets/listingsIcon.svg"
import { ReactComponent as PodcastsIcon } from "../assets/podcastsIcon.svg"
import { ReactComponent as VideosIcon } from "../assets/videosIcon.svg"
import { ReactComponent as TagsIcon } from "../assets/tagsIcon.svg"
import { ReactComponent as FaqIcon } from "../assets/faqIcon.svg"
import { ReactComponent as ShopIcon } from "../assets/shopIcon.svg"
import { ReactComponent as SponsorsIcon } from "../assets/sponsorsIcon.svg"
import { ReactComponent as AboutIcon } from "../assets/aboutIcon.svg"
import { ReactComponent as ContactIcon } from "../assets/contactIcon.svg"
import { ReactComponent as GuidesIcon } from "../assets/guidesIcon.svg"
import { ReactComponent as ComparisonsIcon } from "../assets/comparisonsIcon.svg"

import { ReactComponent as ConductIcon } from "../assets/conductIcon.svg"
import { ReactComponent as PolicyIcon } from "../assets/policyIcon.svg"
import { ReactComponent as TermsIcon } from "../assets/termsIcon.svg"


import { ReactComponent as TwitterIcon } from "../assets/twitterIcon.svg"
import { ReactComponent as FacebookIcon } from "../assets/facebookIcon.svg"
import { ReactComponent as GithubIcon } from "../assets/githubIcon.svg"
import { ReactComponent as InstagramIcon } from "../assets/instagramIcon.svg"
import { ReactComponent as TwitchIcon } from "../assets/twitchIcon.svg"

import { ReactComponent as ConfigIcon } from "../assets/configIcon.svg"

import "../App.scss";

export const HomePage = () => {
  const [posts, setPosts] = useState([])

  return (
    <DefaultLayout>
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
                    <ReadingIcon />
                    Reading List
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <ListingsIcon />
                    Listings
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <PodcastsIcon />
                    Podcasts
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <VideosIcon />
                    Videos
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <TagsIcon />
                    Tags
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <FaqIcon />
                    FAQ
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <ShopIcon />
                    Forem Shop
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <SponsorsIcon />
                    Sponsors
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <AboutIcon />
                    About
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <ContactIcon />
                    Contact
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <GuidesIcon />
                    Guides
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <ComparisonsIcon />
                    Software comparisons
                  </div>
                </li>
            </ul>
          </nav>
          <nav className="navbar">
            <p className="navbar__title">Other</p>
            <ul className="navbar__list">
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <ConductIcon />
                    Code of Conduct
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <PolicyIcon />
                    Privacy Policy
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <TermsIcon />
                    Terms of Use
                  </div>
                </li>
            </ul>
          </nav>
          <ul className="navbar__social-icons">
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <TwitterIcon />
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <FacebookIcon />
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <GithubIcon />
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <InstagramIcon />
                  </div>
                </li>
                <li className="navbar__list-item">
                  <div className="navbar__navigation-item">
                    <TwitchIcon />
                  </div>
                </li>
          </ul>
          <nav className="navbar">
            <header className="navbar__tags-header">
              <p className="navbar__title">My Tags</p>
              <button className="navbar__list-item" ><ConfigIcon/></button>
            </header>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#webdev</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#career</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#todayilearned</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#github</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#discuss</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#weeklyretro</div>
              </li>
              <li className="navbar__list-item">
                <div className="navbar__navigation-item">#weeklylearn</div>
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
    </DefaultLayout>
  );
};
