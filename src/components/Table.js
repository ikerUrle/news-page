import React from "react";
import "./Table.scss";
import { ReactComponent as NotFound } from "./images/no-news.svg";
import newspaperImg from "./images/news-photo.png";

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
            <div className="table-item">
              <h3>{article.title}</h3>
              <i>{article.author}</i>
              <p>{article.description}</p>
              {article.image !== "None" && (
                <img src={article.image} alt="Article" />
              )}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Table;
