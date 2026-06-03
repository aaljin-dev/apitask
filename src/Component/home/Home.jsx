import React, { useEffect, useState } from "react";
import { postFunction } from "../../api/Api";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const postdata = async () => {
      try {
        const data = await postFunction();
        setPost(data);
      } catch (error) {
        console.log(error, "Done");
        navigate("/error");
      }
    };
    postdata();
    console.log("post loading");
  }, []);

  const handleLike = (id) => {
    const updatedArray = post.map((item) =>
      item.id === id ? { ...item, like: !item.like } : item,
    );

    setPost(updatedArray);
  };

  return (
    <div>
      <h1 className="fixed top-0 left-0 w-full bg-white p-4 border">Home</h1>

      <div className="pt-20">
        <div>
          <div className="flex flex-col items-center w-[100%] ">
            {post.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[50%] border border-red-500 p-5 mb-5"
                >
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                  <div>
                    <FaHeart
                      className={`${item.like ? "text-amber-500" : "text-white"} mt-2 bg-red-500 border
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
