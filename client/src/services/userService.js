import * as request from "./requester";

const baseUrl = "http://localhost:7070/users";

export const getOneUser = async (email) => {

  const user = await request.post(`${baseUrl}/getOne`, {email});
  return user
} 

export const getOneUserWithNonFollow = async (id) => {

  const user = await request.post(`${baseUrl}/getOneWithNonFollow`, {id});
  return user
} 

export const getFollowsPosts = async (userId) => {
  const result = await request.post(`${baseUrl}/getFollowsPosts`, {userId});
  return result
}
export const getOneUserWithRelations = async (username) => {

  const user = await request.post(`${baseUrl}/getOneWithRelations`, {username});
  return user
} 

export const deleteUser = async (userId) => {

  const result = await request.post(`${baseUrl}/delete`, {userId});
  return result
} 

export const addFollower = async (email, userId) => {

  const updatedUser = await request.post(`${baseUrl}/addFollower`, {email, userId});
  return updatedUser
} 

export const removeFollower = async (email, userId) => {

  const updatedUser = await request.post(`${baseUrl}/removeFollower`, {email, userId});
  return updatedUser
} 