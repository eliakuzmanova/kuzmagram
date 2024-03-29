import * as request from "./requester";

const baseUrl = "https://kuzmagram-api.onrender.com/posts";

export const getOne = async (profileId) => {
  const post = await request.get(`${baseUrl}/${profileId}/getOne`);

  return post
}

export const getOneWithLikes = async (profileId) => {
  const post = await request.get(`${baseUrl}/${profileId}/getOneWithLikes`);

  return post
}

export const getPostWithComments = async (postId) => {

  const post = await request.get(`${baseUrl}/${postId}/getPostWithComments`);

  return post
}

export const likePost = async (profileId, userId) => {

  const post = await request.post(`${baseUrl}/${profileId}/like`, { userId });
  return post
}

export const dislikePost = async (profileId, userId) => {

  const post = await request.post(`${baseUrl}/${profileId}/dislike`, { userId });
  return post
}

export const postComment = async (comment, userId ,postId) => {
 const result = await request.post(`${baseUrl}/${postId}/comment`, { comment,userId });
 return result
}

export const updatePost = async (postId, description) => {
  const result = await request.post(`${baseUrl}/${postId}/updatePost`, { description });
  return result
 }

 export const deletePost = async (postId) => {
  const result = await request.post(`${baseUrl}/${postId}/deletePost`,{postId});
  return result
 }
