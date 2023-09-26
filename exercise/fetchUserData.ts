import axios from "axios";
const fetchUserData = async (userId: number) => {
  try {
    if (typeof userId !== "number") throw new Error("invalid id");
    const { data: userData } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!Object.keys(userData).length) throw new Error("user not found");
    return userData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchUserData;
