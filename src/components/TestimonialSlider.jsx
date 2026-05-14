import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/siteData.js';

export default function TestimonialSlider() {
  return (
    <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3200 }} pagination={{ clickable: true }} loop className="pb-12">
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/60 bg-white/75 p-8 text-center shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10 md:p-12">
            <Quote className="mx-auto text-ember" size={42} />
            <p className="mt-5 font-display text-2xl font-bold leading-10 text-forest dark:text-white">"{item.quote}"</p>
            <p className="mt-6 font-black text-ink dark:text-white">{item.name}</p>
            <p className="text-sm text-ink/55 dark:text-white/55">{item.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
