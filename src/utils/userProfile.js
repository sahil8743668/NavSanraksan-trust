import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

const adminEmails = (import.meta.env.VITE_ADMIN_EMAILS || '')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const isAdminEmail = (email) => adminEmails.includes((email || '').toLowerCase());

export async function saveUserProfile(user) {
  if (!db || !user) return null;

  const isAdmin = isAdminEmail(user.email);
  const profile = {
    uid: user.uid,
    name: user.displayName || user.email || 'Website user',
    email: user.email || '',
    photoURL: user.photoURL || '',
    phoneNumber: user.phoneNumber || '',
    provider: user.providerData?.[0]?.providerId || 'password',
    role: isAdmin ? 'admin' : 'user',
    lastLoginAt: serverTimestamp(),
  };

  await setDoc(doc(db, 'users', user.uid), {
    ...profile,
    createdAt: serverTimestamp(),
  }, { merge: true });

  if (isAdmin) {
    await setDoc(doc(db, 'admins', user.uid), {
      ...profile,
      adminSince: serverTimestamp(),
    }, { merge: true });
  }

  return profile;
}
