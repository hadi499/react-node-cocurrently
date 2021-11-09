import React, { useState } from "react";
import axios from "axios";

const AddArticle = ({ history }) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();
    const articles = {
      title,
      article,
      authorname,
    };

    axios
      .post("/articles/add", articles)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    history.push("/");
  };
  return (
    <div className="container bottom">
      <div className="row">
        <div className="col-md-6">
          <h3>Add Article</h3>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="authorname" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                name="authorname"
                placeholder="author name"
                className="form-control"
                id="authorname"
                onChange={(e) => setAuthorname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                placeholder="title...."
                className="form-control"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="article" className="form-label">
                Article
              </label>
              <textarea
                className="form-control"
                placeholder="article...."
                id="article"
                name="article"
                onChange={(e) => setArticle(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
