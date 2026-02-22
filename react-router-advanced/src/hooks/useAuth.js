import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated] = useState(false); // simulate login

  return { isAuthenticated };
};

export default useAuth;