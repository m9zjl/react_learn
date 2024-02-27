import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import moment from "moment";
import { AuthContext } from "./context/authContent";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Single = () => {
  const [post, setPost] = useState({});

  const localtion = useLocation();

  const postId = localtion.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ret = await axios.post(`/articles`, {
          id: parseInt(postId),
        });
        setPost(ret.data?.articles[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          <img src="https://source.unsplash.com/random/150x150/?img=3" alt="" />
          <div className="info">
            <span>{post?.user?.username}</span>
            <p>Posted {moment(post?.gmtCreate).fromNow()}.</p>
          </div>
          {currentUser && currentUser.username === post?.user?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src="" alt="edit" />
              </Link>
              <img src="" alt="delete" />
            </div>
          )}
        </div>

        <div className="post">
          <h1>{post.title}</h1>
          <Markdown rehypePlugins={[rehypeHighlight]}>{post.desc}</Markdown>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
