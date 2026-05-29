import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { saveUserProfile } from '../utils/userProfile.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(Boolean(auth));

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return undefined;
    }

    return onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setProfile(null);
      if (currentUser) {
        try {
          const savedProfile = await saveUserProfile(currentUser);
          setProfile(savedProfile);
        } catch {
          setProfile(null);
        }
      }
      setLoading(false);
    });
  }, []);

  const value = useMemo(() => ({
    user,
    profile,
    loading,
    signOut: () => (auth ? signOut(auth) : Promise.resolve()),
  }), [loading, profile, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
