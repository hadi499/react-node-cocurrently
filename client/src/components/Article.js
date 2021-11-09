import React, { useState, useEffect } from "react";
import axios from "axios";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname),
      ])
      .catch((err) => console.log(err));
  }, [props]);
  return (
    <div className="container text-center mt-3">
      <h3>{title}</h3>
      <p>{article}</p>
      <span className="badge bg-secondary">{authorname}</span>
    </div>
  );
};

export default Article;
