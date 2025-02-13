import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗</p>
      ) : loading ? (
        <p>Loading..</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard user={user} />
          ))}
        </>
      )}
    </div>
  );
}
