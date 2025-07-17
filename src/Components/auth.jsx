import { createContext } from "react";

const AuthContext = createContext(null);
export function AuthProvider() {
    const [user, setUser] = useState(null);
}