import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "takiwaka",
  email: "1234@gmail.com",
  address: "東京"
};

const onClickGetData = () => {};

export default function App() {
  return (
    <div className="App">
      <button onClick={onClickGetData}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
