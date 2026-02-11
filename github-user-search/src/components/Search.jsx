import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username);
      setUser(data);
      setError(false);
    } catch (err) {
      setUser(null);
      setError(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
