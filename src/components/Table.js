import React from "react";
import "./Table.scss";
import { ReactComponent as NotFound } from "./images/no-news.svg";

const Table = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="not-found">
        <h1>No news found</h1>
        <NotFound className="not-found-image" />
      </div>
    );
  } else {
    return (
      <div className="table">
        {articles.map((article) => {
          return (
            <a
              className="table-item"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <i>{article.author}</i>
              <p>{article.description}</p>
              {article.image !== "None" && (
                <img src={article.image} alt="Article" />
              )}
            </a>
          );
        })}
      </div>
    );
  }
};

export default Table;
