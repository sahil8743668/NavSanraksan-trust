import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { LogIn } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { auth, isFirebaseConfigured } from '../firebase.js';
import { saveUserProfile } from '../utils/userProfile.js';

export default function SignIn() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  if (!loading && user) return <Navigate to="/" replace />;

  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event) => {
    event.preventDefault();
    if (!auth) {
      setError('Firebase config missing. Add Firebase environment variables first.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const credential = await signInWithEmailAndPassword(auth, form.email, form.password);
      await saveUserProfile(credential.user);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password.');
    } finally {
      setSubmitting(false);
    }
  };

  const signInWithGoogle = async () => {
    if (!auth) {
      setError('Firebase config missing. Add Firebase environment variables first.');
      return;
    }

    setGoogleSubmitting(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(auth, provider);
      await saveUserProfile(credential.user);
      navigate('/dashboard');
    } catch {
      setError('Google sign in failed. Check Firebase Google provider and authorized domains.');
    } finally {
      setGoogleSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section className="section flex justify-center py-24">
        <form onSubmit={submit} className="glass-panel w-full max-w-md">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white">
            <LogIn />
          </span>
          <h1 className="mt-5 font-display text-4xl font-black text-forest dark:text-white">Sign In</h1>
          <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">Admin access for managing protected website work.</p>

          {!isFirebaseConfigured && (
            <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-800">
              Firebase is not configured yet. Add the Firebase web app environment variables in local `.env` and Netlify.
            </p>
          )}

          <div className="mt-6 grid gap-4">
            <input className="field" type="email" placeholder="Email address" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
            <input className="field" type="password" placeholder="Password" value={form.password} onChange={(event) => updateField('password', event.target.value)} />
          </div>

          {error && <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}

          <button type="submit" disabled={submitting || !isFirebaseConfigured} className="mt-6 w-full rounded-full bg-forest px-6 py-4 font-black text-white shadow-soft transition hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-50">
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>

          <button type="button" onClick={signInWithGoogle} disabled={googleSubmitting || !isFirebaseConfigured} className="mt-3 w-full rounded-full border border-forest/10 bg-white/75 px-6 py-4 font-black text-forest shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
            {googleSubmitting ? 'Opening Google...' : 'Continue with Google'}
          </button>
        </form>
      </section>
    </PageTransition>
  );
}
