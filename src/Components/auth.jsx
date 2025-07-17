import { Children, createContext } from 'react';

const AuthContext = createContext(null);
export function AuthProvider() {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={(user, login, logout)}>
      {Children}
    </AuthContext.Provider>
  );
}
