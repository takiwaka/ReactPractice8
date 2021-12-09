import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "takiwaka",
  email: "1234@gmail.com",
  address: "東京"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
