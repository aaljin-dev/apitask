import React, { useEffect, useState } from "react";
import { postFunction } from "../../api/Api";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postdata = async () => {
      const data = await postFunction();
      setPost(data);
    };
    postdata();
  }, []);

  console.log(post);

  return (
    <div>
      <h1 className="mb-10">Home</h1>

      <div>
        <div>
          {post.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center w-[100%] ">
                <div
                  key={item.id}
                  className="w-[50%] border border-red-500 p-5 mb-5"
                >
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                </div>
                <div>
                  <FaHeart className="text-black bg-red-500 border border-amber-700 p-1 rounded-full text-4xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
