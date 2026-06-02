import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterPost } from "../../api/Api";
import { showComment } from "../../api/Api";

const Post = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [commentControl, setCommentControl] = useState(false);
  const [comment, setComment] = useState({});
  const [commentError, setErrorComment] = useState("");

  //   console.log(comment.body);

  useEffect(() => {
    const postSingle = async () => {
      try {
        setLoading(true);
        const data = await filterPost(id);
        setSingle(data);
      } catch (err) {
        setError("data not found");
      } finally {
        setLoading(false);
      }
    };
    postSingle();
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const commentFunction = () => {
    const commentPost = async () => {
      try {
        const data = await showComment(id);
        setComment(data);
        console.log(data);
      } catch (err) {
        // console.log("200 ", err);
        setErrorComment("error found");
      }
    };
    // console.log(commentError);

    commentPost();
    setCommentControl(!commentControl);
  };

  return (
    <div>
      <div className="flex flex-col items-center w-[100%] ">
        <div className="w-[50%] border border-red-500 p-5 mt-15 mb-3">
          {single.body}
          <div className="flex items-center gap-5 border mt-5">
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded "
                onClick={() => {
                  commentFunction();
                }}
              >
                Click Me
              </button>
            </div>
          </div>
        </div>
        {commentControl && (
          <div className="w-[50%] border border-red-500 p-5 mb-3">
            {commentError ? commentError : comment.body}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
