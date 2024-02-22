import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(null);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ret = await axios.post(`/articles${category}`, {
          pageSize:10,
          pageNum:1
        });
        if (ret?.data?.articles) {
          setPosts(ret?.data?.articles);
        } else {
          setErr(ret.data?.error);
          console.log("error", err);
        }
      } catch (err) {
        setErr(err?.response?.data?.error);
        console.log("error", err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="home">
      <div className="posts">
        {posts
          .filter((post) => post.id <= 10) // 过滤掉userId不等于当前用户的帖子
          .map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img
                  src={`https://source.unsplash.com/random/500x500/?img=${post.id}`}
                  alt=""
                />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
