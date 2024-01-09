import Logo from "../assets/logo.jpeg";
import phoneIcon from "../assets/icons/phone-alt-solid.svg";
import dropdownIcon from "../assets/icons/dropdown.svg";
import menuIcon from "../assets/icons/menu.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="max-w-[1400px] mx-auto bg-white">
      <nav className="flex items-center justify-between h-[70px] p-[10px]">
        <div>
          <Link to="/">
            <img className="w-[180px] sm:w-[255px]" src={Logo} loading="lazy" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <NavLink to="/" className="nav-links">
            home
          </NavLink>
          <NavLink to="/about-us" className="nav-links">
            about us
          </NavLink>
          <NavLink to="/service" className="nav-links">
            service
          </NavLink>
          <NavLink to="/online-text" className="nav-links">
            online test
            <img className="dropdown-icon" src={dropdownIcon} alt="" />
            <span className="submenu-wrap">
              <NavLink to="/online-text/adhd-text" className="submenu">
                ADHD Test
              </NavLink>
              <NavLink to="/online-text/bipolor-text" className="submenu">
                Bipolor Test
              </NavLink>
              <NavLink to="/online-text/bipolor-text" className="submenu">
                Austism Test
              </NavLink>
              <NavLink to="/online-text/bipolor-text" className="submenu">
                Anxiety Test
              </NavLink>
              <NavLink to="/online-text/bipolor-text" className="submenu">
                Depression Test
              </NavLink>
            </span>
          </NavLink>
          <NavLink to="/online-text/bipolor-text" className="nav-links">
            blogs
          </NavLink>
          <NavLink to="/online-text/bipolor-text" className="nav-links">
            register
            <img className="dropdown-icon" src={dropdownIcon} alt="" />
          </NavLink>
          <NavLink to="/online-text/bipolor-text" className="nav-links">
            contact
            <img className="dropdown-icon" src={dropdownIcon} alt="" />
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-[30px]">
          <Link className="header-btn">sign in</Link>
          <Link className="header-btn">
            <img className="h-[13px] pr-1" src={phoneIcon} alt="" />
            +1-8731-0079
          </Link>
        </div>
        <button
          onClick={() => setVisible(!visible)}
          className="flex lg:hidden h-[40px] w-[45px] items-center justify-center active:bg-[rgba(7,216,180,0.2)] rounded-md"
        >
          <img className="h-[33px] w-[33px]" src={menuIcon} alt="" />
        </button>
      </nav>

      {visible && (
        <div className="lg:hidden absolute left-0 top-0 bottom-0 max-w-[350px] w-[90%] z-10 bg-white">
          <Link to="/" className="">
            <img
              className="w-[180px] sm:w-[255px] p-[10px]"
              src={Logo}
              loading="lazy"
            />
          </Link>

          <span className="mobile-link-wrap">
            <NavLink to="home" className="mobile-nav-links">
              home
            </NavLink>
            <NavLink
              to="/online-text/bipolor-text"
              className="mobile-nav-links"
            >
              about us
            </NavLink>
            <NavLink
              to="/online-text/bipolor-text"
              className="mobile-nav-links"
            >
              service
            </NavLink>
            <div className="mobile-nav-links">
              <NavLink to="online-test">
                online test
                <img
                  className="dropdown-icon flex items-end"
                  src={dropdownIcon}
                  alt=""
                />
              </NavLink>
              <span className="mobile-submenu-wrap">
                <NavLink to="/online-test/adha-test" className="mobile-submenu">
                  ADHD Test
                </NavLink>
                <NavLink
                  to="/online-text/bipolor-text"
                  className="mobile-submenu"
                >
                  Bipolor Test
                </NavLink>
                <NavLink
                  to="/online-text/bipolor-text"
                  className="mobile-submenu"
                >
                  Austism Test
                </NavLink>
                <NavLink
                  to="/online-text/bipolor-text"
                  className="mobile-submenu"
                >
                  Anxiety Test
                </NavLink>
                <NavLink
                  to="/online-text/bipolor-text"
                  className="mobile-submenu"
                >
                  Depression Test
                </NavLink>
              </span>
            </div>

            <NavLink
              to="/online-text/bipolor-text"
              className="mobile-nav-links"
            >
              blogs
            </NavLink>
            <NavLink
              to="/online-text/bipolor-text"
              className="mobile-nav-links"
            >
              register
              <img className="dropdown-icon" src={dropdownIcon} alt="" />
            </NavLink>
            <NavLink
              to="/online-text/bipolor-text"
              className="mobile-nav-links"
            >
              contact
              <img className="dropdown-icon" src={dropdownIcon} alt="" />
            </NavLink>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
