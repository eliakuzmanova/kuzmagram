import * as request from "./requester";

const baseUrl = "http://localhost:7070/posts";

export const likePost = async (profileId, userId) => {

  const user = await request.post(`${baseUrl}/${profileId}/like`, {userId});
  return user
} 