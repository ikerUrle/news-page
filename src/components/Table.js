import React from "react";
import "./Table.scss";

const Table = ({ articles }) => {
  return (
    <div className="table">
      {articles.map((article) => {
        return (
          <div className="table-item">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
