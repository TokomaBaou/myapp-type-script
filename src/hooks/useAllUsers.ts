import axios from "axios";
import { User } from "../types/api/users";
import { UserProfile } from "../types/userProfiles";
import { useState } from "react";

export const useAllUsers = () => {
  const [ userProfiles, setUserProfiles ] = useState<Array<UserProfile>>([]);
  const [loding, setLoding ] = useState(false);
  const [ error, setError ] = useState(false);

  const getUsers = () => {
    setLoding(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address}${user.address.suite}${user.address.city}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoding(false);
      });
  };
  return { getUsers, userProfiles, loding, error };
};
