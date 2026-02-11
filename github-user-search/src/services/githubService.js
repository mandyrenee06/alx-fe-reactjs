import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
  },
});

export const fetchUserData = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubApi.get(
    `/search/users?q=${query}&page=${page}&per_page=10`
  );

  return response.data;
};

export default githubApi;
