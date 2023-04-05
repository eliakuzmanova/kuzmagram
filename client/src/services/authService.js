import * as request from './requester';

const baseUrl = "https://kuzmagram-api.onrender.com/auth";

export const login = async ({ email, password}) => {
 const token = await request.post(`${baseUrl}/login`, { email, password})
return token
}

export const register = async ({username, email, password}) => {
  const result = await  request.post(`${baseUrl}/register`, {username, email, password})
  return result
}

