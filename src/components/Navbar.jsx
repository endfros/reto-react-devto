import React, {useState} from "react";
import { Link } from "react-router-dom"
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
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

export const Navbar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleToggle = () => {
    setSidebarOpen(prev => { 
      document.body.style.overflow = prev ? "hidden" : "unset"
      return !prev
    })
  }

  const closeMenu = () => {
    setSidebarOpen(false)
  }

  return (
    <nav className="main-navigation">
      <section className="desktop-navbar">
        <section className="desktop-navbar__left">
          <button onClick={handleToggle} className="desktop-navbar__left__hamburgerIcon">
            {sidebarOpen ? "" : " "}
            <HamburgerIcon />
          </button>
          <div className={`desktop-navbar__left__sidebarBackground ${sidebarOpen ? " showSidebar" : ""}`}>
            <section className={`desktop-navbar__left__sidebar ${sidebarOpen ? " showSidebar" : ""}`}>
              <header className="desktop-navbar__left__sidebar-header">
                <h2>DEV Community 👩‍💻👨‍💻</h2>
                <button onClick={closeMenu}><CloseIcon/></button>
              </header>
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
              <header className="desktop-navbar__left__sidebar-other">
                <h2>Other</h2>
              </header>
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
            </section>
          </div>
          <Link to="/">
          <img
            className="desktop-navbar__left__image"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Dev.to Logo"
          />
          </Link>
          <div className="desktop-navbar__left__search ">
            <input type="text" placeholder="Search..." />
            <button>
              <SearchIcon />
            </button>
          </div>
        </section>
        <section className="desktop-navbar__actions">
          {/* <button className="desktop-navbar__actions__create-post">
            <Link to="/create-post">Create Post</Link>
          </button> */}
          <div className="desktop-navbar__left__searchIcon">
            <button>
              <SearchIcon />
            </button>
          </div>
          <button className="desktop-navbar__actions__create-account">
            <Link to="/register">Create Account</Link>
          </button>
          {/* <button>
            <BellIcon />
          </button> */}
          {/* <button>
            <img
              className="desktop-navbar__actions__image h-8 w-8 rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
              alt="User avatar"
            />
          </button> */}
        </section>
      </section>
    </nav>
  );
};
