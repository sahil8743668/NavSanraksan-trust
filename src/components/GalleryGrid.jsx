import { useState } from 'react';
import { X } from 'lucide-react';
import { gallery } from '../data/siteData.js';

export default function GalleryGrid() {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {gallery.map((img, index) => (
          <button key={img} onClick={() => setActive(img)} className="mb-5 block w-full overflow-hidden rounded-3xl shadow-soft" aria-label={`Open gallery image ${index + 1}`}>
            <img className={`w-full object-cover transition duration-500 hover:scale-105 ${index % 3 === 0 ? 'h-96' : 'h-72'}`} src={img} alt={`NavSanrakshan Trust field work ${index + 1}`} />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-5" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 rounded-full bg-white p-3 text-forest" aria-label="Close lightbox"><X /></button>
          <img className="max-h-[84vh] rounded-3xl object-contain shadow-glow" src={active} alt="Gallery preview" />
        </div>
      )}
    </>
  );
}
