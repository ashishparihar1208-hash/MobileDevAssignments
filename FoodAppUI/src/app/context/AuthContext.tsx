import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  hasSeenOnboarding: boolean;
completeOnboarding: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

 async function checkAuth() {
  try {
    const token = await AsyncStorage.getItem("isLoggedIn");

    const onboarding = await AsyncStorage.getItem(
      "hasSeenOnboarding"
    );

    if (token === "true") {
      setIsAuthenticated(true);
    }

    if (onboarding === "true") {
      setHasSeenOnboarding(true);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

 async function login() {
  console.log("LOGIN FUNCTION CALLED");

  await AsyncStorage.setItem("isLoggedIn", "true");

  setIsAuthenticated(true);
}

  async function logout() {
    await AsyncStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
  }
  async function completeOnboarding() {
  await AsyncStorage.setItem("hasSeenOnboarding", "true");

  setHasSeenOnboarding(true);
}

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        login,
        logout,
        hasSeenOnboarding,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}