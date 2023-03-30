import * as request from "./requester";

const baseUrl = "http://localhost:7070/posts";

export const getOne = async (profileId) => {
    const post = await request.get(`${baseUrl}/${profileId}/getOne`);

    return post
  } 

export const likePost = async (profileId, userId) => {

  const post = await request.post(`${baseUrl}/${profileId}/like`, {userId});
  return post
} 

export const dislikePost = async (profileId, userId) => {

    const post = await request.post(`${baseUrl}/${profileId}/dislike`, {userId});
    return post
  } 