import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import moment from "moment";
import { AuthContext } from "./context/authContent";

const Single = () => {
  const [post, setPost] = useState({});

  const localtion = useLocation();

  const postId = localtion.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ret = await axios.get(`/articles`, {
          id: postId,
        });
        setPost(ret.data?.articles[0]);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          <img src="https://source.unsplash.com/random/150x150/?img=3" alt="" />
          <div className="info">
            <span>post?.user?.username</span>
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

          {/* content */}
          <h1>{post.title}</h1>
          {post.desc}
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
