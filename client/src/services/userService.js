import * as request from "./requester";

const baseUrl = "http://localhost:7070/users";

export const getOneUser = async ({email}) => {

  const user = await request.post(`${baseUrl}/getOne`, {email});
  return user
} 