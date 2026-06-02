import axios from "axios";

export const postFunction = async () => {
  try {
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts");

    // console.log(post.data);

    return post.data;
  } catch (error) {
    console.log(error);
  }
};

export const filterPost = async (id) => {
  try {
    const singlePost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    if (singlePost.status !== 200) {
      throw new Error("data no ");
    }

    return singlePost.data;
  } catch (error) {
    console.log("work error");

    throw error;
  }
};

export const showComment = async (id) => {
  // console.log("show", id);

  try {
    const comment = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
    );
    if (comment.status !== 200) {
      throw new Error("data no ");
    }
    return comment.data;
  } catch (error) {
    // console.log("work error");
    throw error;
  }
};
