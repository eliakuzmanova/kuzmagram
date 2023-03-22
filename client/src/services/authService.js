import * as request from "./requester";

const baseUrl = "http://localhost:7070/auth";

export const login = async (email, password) => {
  const token = await request.post(`${baseUrl}/login`, { email, password});
  return token
} 

// export const logout = async (accessToken) => {
//     try {
//    const response = await fetch(`${baseUrl}/logout`, { 
//     headers: {
//         "X-Authorization": accessToken
//     }
//    });

//     return response
// } catch (error) {	
//     console.log(error);
// }
// } 

export const register = async (username, email, password) => {
    
 const result = await request.post(`${baseUrl}/register`, {username, email, password});

 return result
} 