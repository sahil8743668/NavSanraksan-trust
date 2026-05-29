import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { collection, doc, getDocs, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { BadgeCheck, BadgeIndianRupee, Mail, Phone, Save, ShieldCheck, UserRound } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { db } from '../firebase.js';
import { isAdminEmail } from '../utils/userProfile.js';

export default function Dashboard() {
  const { user, profile, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [adminCount, setAdminCount] = useState(0);
  const [form, setForm] = useState({ name: '', phoneNumber: '', photoURL: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  const isAdmin = isAdminEmail(user?.email);

  useEffect(() => {
    if (!user) return;
    setForm({
      name: profile?.name || user.displayName || '',
      phoneNumber: profile?.phoneNumber || user.phoneNumber || '',
      photoURL: profile?.photoURL || user.photoURL || '',
    });
  }, [profile, user]);

  useEffect(() => {
    if (!db || !isAdmin) return undefined;

    const loadDashboard = async () => {
      try {
        const usersSnapshot = await getDocs(query(collection(db, 'users'), orderBy('lastLoginAt', 'desc')));
        const adminsSnapshot = await getDocs(collection(db, 'admins'));
        const donationsSnapshot = await getDocs(query(collection(db, 'donations'), orderBy('createdAt', 'desc')));
        setUsers(usersSnapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
        setDonations(donationsSnapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
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

  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const saveProfile = async (event) => {
    event.preventDefault();
    if (!db || !user) return;

    setSaving(true);
    setError('');
    setMessage('');

    try {
      await updateProfile(user, {
        displayName: form.name,
        photoURL: form.photoURL,
      });

      const updatedProfile = {
        name: form.name || user.email || 'Website user',
        email: user.email || '',
        photoURL: form.photoURL || '',
        phoneNumber: form.phoneNumber || '',
        role: isAdmin ? 'admin' : 'user',
        updatedAt: serverTimestamp(),
      };

      if (isAdmin) {
        await setDoc(doc(db, 'admins', user.uid), updatedProfile, { merge: true });
      } else {
        await setDoc(doc(db, 'users', user.uid), updatedProfile, { merge: true });
      }

      setMessage('Profile updated successfully.');
    } catch {
      setError('Profile could not be updated. Check Firestore rules and try again.');
    } finally {
      setSaving(false);
    }
  };

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

        {isAdmin ? (
          <div className="grid gap-5 md:grid-cols-4">
            <div className="glass-card"><ShieldCheck className="text-ember" /><h3>Admin</h3><p>Full website management access</p></div>
            <div className="glass-card"><UserRound className="text-ember" /><h3>{users.length}</h3><p>Website users</p></div>
            <div className="glass-card"><BadgeIndianRupee className="text-ember" /><h3>Rs. {donations.reduce((sum, donation) => sum + Number(donation.amount || 0), 0).toLocaleString('en-IN')}</h3><p>Total donation records</p></div>
            <div className="glass-card"><BadgeCheck className="text-ember" /><h3>{adminCount}</h3><p>Admin accounts</p></div>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            <div className="glass-card"><UserRound className="text-ember" /><h3>User</h3><p>Signed in as {user.email}</p></div>
            <div className="glass-card"><ShieldCheck className="text-ember" /><h3>Profile</h3><p>Manage your own website account details</p></div>
          </div>
        )}

        {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}
        {message && <p className="mt-6 rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-700">{message}</p>}

        <form onSubmit={saveProfile} className="mt-8 glass-panel">
          <div className="flex items-center gap-3">
            <UserRound className="text-ember" />
            <h2 className="font-display text-2xl font-black text-forest dark:text-white">Profile Settings</h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 font-bold text-forest dark:text-white">
              Full name
              <input className="field" value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" />
            </label>
            <label className="grid gap-2 font-bold text-forest dark:text-white">
              Phone number
              <input className="field" value={form.phoneNumber} onChange={(event) => updateField('phoneNumber', event.target.value)} placeholder="Phone number" />
            </label>
            <label className="grid gap-2 font-bold text-forest dark:text-white">
              Email address
              <span className="field flex items-center gap-3 text-ink/60 dark:text-white/60"><Mail size={18} /> {user.email}</span>
            </label>
            <label className="grid gap-2 font-bold text-forest dark:text-white">
              Profile photo URL
              <input className="field" value={form.photoURL} onChange={(event) => updateField('photoURL', event.target.value)} placeholder="https://..." />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" disabled={saving} className="btn-primary disabled:cursor-not-allowed disabled:opacity-50">
              <Save size={18} /> {saving ? 'Saving...' : 'Save Profile'}
            </button>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-bold text-ink/60 dark:bg-white/10 dark:text-white/60">
              <Phone size={16} /> Changes sync to {isAdmin ? 'admins' : 'users'} database
            </span>
          </div>
        </form>

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

        {isAdmin && (
          <div className="mt-8 glass-panel">
            <div className="flex items-center gap-3">
              <BadgeIndianRupee className="text-ember" />
              <h2 className="font-display text-2xl font-black text-forest dark:text-white">Donation Records</h2>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="text-ink/55 dark:text-white/55">
                  <tr>
                    <th className="py-3">Donor</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Campaign</th>
                    <th>Amount</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10 dark:divide-white/10">
                  {donations.map((item) => (
                    <tr key={item.id} className="font-semibold text-ink/75 dark:text-white/75">
                      <td className="py-4">{item.name || 'Donor'}</td>
                      <td>{item.email || '-'}</td>
                      <td>{item.phone || '-'}</td>
                      <td>{item.campaign || 'General support'}</td>
                      <td>Rs. {Number(item.amount || 0).toLocaleString('en-IN')}</td>
                      <td>{item.method || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!donations.length && <p className="py-6 text-ink/60 dark:text-white/60">No donation records saved in Firestore yet.</p>}
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
