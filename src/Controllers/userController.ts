import { GetUser } from "../Repositories/userRepository.ts";

export const ReturnUser = () => {
    const user = GetUser();
    return user;
  };