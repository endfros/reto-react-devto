import React, { Link } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";

export const Navbar = () => {
  return (
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
            <Link to="/user/1">
              {/* <img
                  className="desktop-navbar__actions__image h-8 w-8 rounded-full"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
                  alt="User avatar"
                /> */}
              newlink
            </Link>
          </button>
        </section>
      </section>
    </nav>
  );
};
