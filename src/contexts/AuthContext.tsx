
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthUser {
  id: string;
  email: string;
  role: string;
  name?: string | null;
  companyId?: string | null;
}

interface AuthSession {
  token: string;
  user: AuthUser;
}

interface AuthContextValue {
  session: AuthSession | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TOKEN_STORAGE_KEY = "spa_admin_token";

async function fetchProfile(token: string): Promise<AuthUser | null> {
  try {
    const response = await fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { user: AuthUser };
    return data.user;
  } catch (error) {
    console.error("Failed to fetch profile", error);
    return null;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (!token) {
      setLoading(false);
      return;
    }

    let active = true;

    (async () => {
      const user = await fetchProfile(token);
      if (active && user) {
        setSession({ token, user });
      } else {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
      }
      if (active) {
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return false;
      }

      const { token, user } = (await response.json()) as { token: string; user: AuthUser };
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      setSession({ token, user });
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
