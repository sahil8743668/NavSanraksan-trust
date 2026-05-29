import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LogIn } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { auth, isFirebaseConfigured } from '../firebase.js';

export default function SignIn() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

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
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/');
    } catch {
      setError('Invalid email or password.');
    } finally {
      setSubmitting(false);
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
        </form>
      </section>
    </PageTransition>
  );
}
