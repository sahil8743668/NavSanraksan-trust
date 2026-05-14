import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="grid min-h-[70vh] place-items-center px-4 text-center">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="font-display text-5xl font-black text-forest dark:text-white">This page could not be found.</h1>
          <Link to="/" className="btn-primary mx-auto mt-8 w-fit">Return Home</Link>
        </div>
      </section>
    </PageTransition>
  );
}
