import React, { useEffect, useState } from "react";
import { postFunction } from "../../api/Api";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [post, setPost] = useState([]);
  const [like, setLink] = useState([]);

  useEffect(() => {
    const postdata = async () => {
      const data = await postFunction();
      setPost(data);
    };
    postdata();
  }, []);

  const handleLike = (id) => {
    setLink((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };
  console.log(like);

  const findLike = (id) => {
    return like.includes(id);
  };

  return (
    <div>
      <h1 className="mb-10">Home</h1>

      <div>
        <div>
          <div className="flex flex-col justify-center items-center w-[100%] ">
            {post.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[50%] border border-red-500 p-5 mb-5"
                >
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                  <div>
                    <FaHeart
                      className={`${findLike(item.id) ? "text-amber-500" : "text-white"} mt-2 bg-red-500 border
                       border-amber-700 p-1 rounded-full text-4xl`}
                      onClick={() => {
                        handleLike(item.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
