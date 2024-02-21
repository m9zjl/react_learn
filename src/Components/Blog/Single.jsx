import React from "react";
import { Link } from "react-router-dom";


const Single = () => {
  // const article = {
  //   userId: 2,
  //   id: 15,
  //   title: "eveniet quod temporibus",
  //   body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  // };

  return (
    <div className="single">
      <div className="content">
        <img src="https://source.unsplash.com/random/1260x750/?img=1" alt="" />
        <div className="user">
          <img src="https://source.unsplash.com/random/150x150/?img=3" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago.</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="" alt="" />
            </Link>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
