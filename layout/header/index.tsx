/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import UserIcon from "icons/UserIcon";
import css from "styles/layout.module.scss";
import TrustPilotAndContact from "./trust-pilot";
import MenuIcon from "icons/MenuIcon";
import CloseIcon from "icons/CloseIcon";
import useOnClickOutside from "hooks/useclick";
import BagOutline from "icons/BagOutline";
import navigationLinks, { MenuTypes } from "constants/nav-links";

const Header = () => {
  return (
    <header className={css["header"]}>
      <TrustPilotAndContact />
      <LogoAndSearchBar />
      <section className={css.menudiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={css.mainmenu}>
                <nav className={css["nav-container"]}>
                  {navigationLinks.map((data, index) => {
                    return <NavigationLinks key={index} {...data} />;
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;

const LogoAndSearchBar = () => {
  const [isNavigation, setNavigation] = React.useState(false);

  const onClickMenu = React.useCallback(() => {
    setNavigation(!isNavigation);
  }, [isNavigation]);
  // CloseIcon

  const ref = useOnClickOutside(() => setNavigation(false));
  return (
    <>
      <section
        style={{
          transform: `translateX(${isNavigation ? "0%" : "-100%"})`,
        }}
        className={css["navigation-model"]}
      >
        <div ref={ref} className={css["navigation-content"]}>
          <div className={css["close-button"]}>
            <button
              title="close-icon"
              aria-label="close-icon"
              onClick={onClickMenu}
            >
              <CloseIcon size={24} />
            </button>
          </div>
          <div>
            <h1>Hello World</h1>
          </div>
        </div>
      </section>
      <section className={` ${css["search-container"]} container`}>
        <div className={css["item-grid"]}>
          <div className={css["menu-bar"]}>
            <button
              title="menu-icon"
              aria-label="menu-icon"
              onClick={onClickMenu}
            >
              <MenuIcon size={20} />
            </button>
          </div>
          <div className={css["logo"]}>
            <Link href="/">
              <a>
                <img src="/image/wplogo.webp" alt="imge" />
              </a>
            </Link>
          </div>
          <div className={css["searchbar"]}>
            <input type="text" placeholder="Search for products..." />
            <button title="search" aria-label="search-icon">
              <img src="/image/SEARCH.SVG" alt="" />
            </button>
          </div>
          <div className={css["controls"]}>
            <ul>
              <li>
                <Link href={"/account"}>
                  <a>
                    <span>
                      <UserIcon size={32} />
                    </span>
                    <span className={css["texts"]}>My Account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <a>
                    <BagOutline size={32} />
                    <span className={css["texts"]}>My Cart</span>
                    <i className={css["badge"]}>0</i>
                  </a>
                </Link>
              </li>

              {/* <li>
                <MapIcon />
                <span className={css["texts"]}>My basket</span>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

interface NavigationLinksProps {
  path: string;
  name: string;
  active?: string;
  subMenu?: MenuTypes[];
}

const NavigationLinks = ({ name, path, subMenu }: NavigationLinksProps) => {
  return (
    <ul className={css["nav-links"]}>
      <li className={css["link"]}>
        <Link href={path}>{name}</Link>
        <ul className={css["tier-one-menu"]}>
          {subMenu &&
            subMenu.map((data$2, index$2) => (
              <li key={index$2}>
                <Link href={data$2.path}>{data$2.name}</Link>
                {data$2.subMenu &&
                  data$2.subMenu.map((data$3, index$3) => (
                    <ul key={index$3} className={css["tier-two-menu"]}>
                      <li>
                        <Link href={data$3.path}>{data$3.name}</Link>
                      </li>
                    </ul>
                  ))}
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};
