import React from "react";
import Searchbar from "./Searchbar";
import "./Navbar.scss";
import { ReactComponent as Newspaper } from "./images/newspaper.svg";

const Navbar = ({ query, setQuery }) => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Newspaper className="newspaper-image" />
        <h3>React News</h3>
        <ul className="nav-items">
          <li>
            <a
              href="https://ikerurle.github.io"
              target="_blank"
              rel="noopener noreferrer">
              About me
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ikerUrle/news-page"
              target="_blank"
              rel="noopener noreferrer">
              Source code
            </a>
          </li>
        </ul>
      </div>
      <Searchbar query={query} setQuery={setQuery} />
    </div>
  );
};

export default Navbar;
