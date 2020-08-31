import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";
import Sidebar from "./components/Sidebar";

const App = () => {
  const options = ["posts", "comments", "todos"];
  const [articles, setArticles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("posts");

  let url = `https://jsonplaceholder.typicode.com/${selectedOption}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticles(json));
  }, [url]);

  return (
    <div className="app">
      <Sidebar
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Table articles={articles} />
    </div>
  );
};

export default App;
