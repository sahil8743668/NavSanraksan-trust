import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { BadgeCheck, Database, ShieldCheck, UserRound } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { db } from '../firebase.js';
import { isAdminEmail } from '../utils/userProfile.js';

export default function Dashboard() {
  const { user, profile, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [adminCount, setAdminCount] = useState(0);
  const [error, setError] = useState('');
  const isAdmin = isAdminEmail(user?.email);

  useEffect(() => {
    if (!db || !isAdmin) return undefined;

    const loadDashboard = async () => {
      try {
        const usersSnapshot = await getDocs(query(collection(db, 'users'), orderBy('lastLoginAt', 'desc')));
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        setUsers(usersSnapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
        setAdminCount(adminsSnapshot.size);
      } catch {
        setError('Dashboard data could not load. Check Firestore database and security rules.');
      }
    };

    loadDashboard();
    return undefined;
  }, [isAdmin]);

  if (loading) {
    return (
      <PageTransition>
        <section className="section py-24"><div className="glass-panel">Loading dashboard...</div></section>
      </PageTransition>
    );
  }

  if (!user) return <Navigate to="/signin" replace />;

  return (
    <PageTransition>
      <section className="section py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{isAdmin ? 'Admin dashboard' : 'User dashboard'}</p>
            <h1 className="mt-3 font-display text-4xl font-black text-forest dark:text-white md:text-6xl">Welcome, {profile?.name || user.displayName || user.email}</h1>
          </div>
          <Link to="/" className="btn-secondary">Back to Website</Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass-card"><UserRound className="text-ember" /><h3>{profile?.role || (isAdmin ? 'admin' : 'user')}</h3><p>Signed in as {user.email}</p></div>
          <div className="glass-card"><Database className="text-ember" /><h3>{isAdmin ? users.length : 'Saved'}</h3><p>{isAdmin ? 'Registered users in Firestore' : 'Your profile is saved in Firestore'}</p></div>
          <div className="glass-card"><ShieldCheck className="text-ember" /><h3>{isAdmin ? adminCount : 'User'}</h3><p>{isAdmin ? 'Admin records in Firestore' : 'Standard website access'}</p></div>
        </div>

        {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

        {isAdmin ? (
          <div className="mt-8 glass-panel">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-ember" />
              <h2 className="font-display text-2xl font-black text-forest dark:text-white">Login Records</h2>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="text-ink/55 dark:text-white/55">
                  <tr>
                    <th className="py-3">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10 dark:divide-white/10">
                  {users.map((item) => (
                    <tr key={item.id} className="font-semibold text-ink/75 dark:text-white/75">
                      <td className="py-4">{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td>{item.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!users.length && !error && <p className="py-6 text-ink/60 dark:text-white/60">No users saved yet.</p>}
            </div>
          </div>
        ) : (
          <div className="mt-8 glass-panel">
            <h2 className="font-display text-2xl font-black text-forest dark:text-white">Your Account</h2>
            <p className="mt-3 leading-8 text-ink/70 dark:text-white/70">Your login profile has been saved. Admin-only website records are visible only to admin emails.</p>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
