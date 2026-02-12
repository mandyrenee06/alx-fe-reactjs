import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    try {
      const data = await fetchAdvancedUsers(
        username,
        location,
        minRepos,
        1
      );
      setUsers(data.items);
      setPage(1);
      setError(false);
    } catch (err) {
      setUsers([]);
      setError(true);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await fetchUserData(
      username,
      location,
      minRepos,
      nextPage
    );
    setUsers([...users, ...data.items]);
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Advanced GitHub User Search
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="number"
            placeholder="Minimum Repositories"
            className="w-full p-2 border rounded"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-4">
            Looks like we cant find the user
          </p>
        )}

        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {users.length > 0 && (
          <button
            onClick={loadMore}
            className="mt-4 w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
