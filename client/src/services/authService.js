import * as request from './requester';

const baseUrl = "http://localhost:7070/auth";

export const login = async ({ email, password}) => {
 const token = await request.post(`${baseUrl}/login`, { email, password})
return token
}

export const register = async ({username, email, password}) => {
    await  request.post(`${baseUrl}/register`, {username, email, password})
}

