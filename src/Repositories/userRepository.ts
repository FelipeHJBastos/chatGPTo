// src/repositories/songsRepository.ts
export const GetUser = () => {
    // Implement database interaction here
    const user = {
      id: 1,
      title: "User 1",
      email: "LbqJt@example.com",
      password: "123456",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    return user;
  };