import { GetUser } from "../Repositories/userRepository.ts";

/**
 * Returns the user obtained from the GetUser function.
 *
 * @return {type} The user object
 */
export const ReturnUser = () => {
    const user = GetUser();
    return user;
  };