import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

// export const user ={
//     name:"マドカダイゴ",
//     email:"1234@gmail.com",
//     address:"ADSRESS",
// };

export default function App() {
  const { getUsers, userProfiles, loding, error } = useAllUsers();

  const onClickFechUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFechUser}>データ取得</button>
      <br />
      {/* いつもコンポーネントに引数を設定するのを忘れがち */}
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loding ? (
        <p>Loding...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
