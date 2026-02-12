const BASE_URL = "https://api.github.com/search/users?q";

export const fetchAdvancedUsers = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&per_page=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
