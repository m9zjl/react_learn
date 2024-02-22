import { useState } from "react";
import ReactQuill from "react-quill";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import MdEditor from "for-editor";
import axios from "axios";

function Write() {
  const [mdContent, setMdContent] = useState("");
  const [title, setTitle] = useState("");

  function uploadImg(file) {
    console.log("file", file);
  }

  function handleEditorChange(value) {
    setMdContent(value);
  }

  const handleEditorSave = async (e) => {
    if (title === "" || mdContent === "") {
      alert(title === "" ? "title is empty" : "article is empty");
      return;
    }
    try {
      const ret = await axios.put("article", {
        title: title,
        desc: mdContent,
      });
      console.log(ret);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      <div className="content">
        <input
          type="text"
          className="title"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="contentArea">
          <MdEditor
            placeholder=""
            height={600}
            lineNum={false}
            value={mdContent}
            onChange={handleEditorChange}
            onSave={handleEditorSave}
            addImg={uploadImg}
          />
        </div>
      </div>
      <div className="menu">
        <div className="publish">
          <h1>Publish</h1>
          <div className="status">
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b>Public
            </span>
          </div>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className="category">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art1" />
            <label htmlFor="art1">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art2" />
            <label htmlFor="art2">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art3" />
            <label htmlFor="art3">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
