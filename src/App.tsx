import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, UserProfiles, loading, error } = useAllUsers();

  const onClickGetData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickGetData}>データ取得</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {UserProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
