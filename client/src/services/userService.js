import * as request from "./requester";

const baseUrl = "http://localhost:7070/users";

export const getOneUser = async (email) => {

  const user = await request.post(`${baseUrl}/getOne`, {email});
  return user
} 

export const getOneUserWithRelations = async (username) => {

  const user = await request.post(`${baseUrl}/getOneWithRelations`, {username});
  return user
} 

export const deleteUser = async (userId) => {

  const result = await request.post(`${baseUrl}/delete`, {userId});
  return result
} 

