import axios from "axios";
import { useState } from "react";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { USerProfile } from "./types/UserProfile";

const user = {
  id: 1,
  name: "takiwaka",
  email: "1234@gmail.com",
  address: "東京"
};

export default function App() {
  const [UserProfiles, setUserProfiles] = useState<Array<USerProfile>>([]);
  const onClickGetData = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
      });
  };

  return (
    <div className="App">
      <button onClick={onClickGetData}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
