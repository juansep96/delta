import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Silvina Bursaco', rating: 5, comment: 'Realicé una actualización y dos cursos. Los certificados me llegaron súper rápido.', date: 'hace 34 semanas' },
  { id: 2, name: 'Cuervo Nuñez', rating: 5, comment: 'Realicé 4 cursos y son definitivamente recomendables.', date: 'hace 36 semanas' },
  { id: 3, name: 'Seño Cecilia', rating: 5, comment: 'Muy buen asesoramiento y acompañamiento durante la cursada.', date: 'hace 36 semanas' },
  { id: 4, name: 'Jorge Antin', rating: 5, comment: 'La plataforma es muy práctica, el material de estudio muy completo.', date: 'hace 37 semanas' },
  { id: 5, name: 'Chechu Nena Ceci', rating: 5, comment: 'Excelente en todo sentido. Están al pie del cañón y son de gran ayuda.', date: 'hace 1 año' },
  { id: 6, name: 'Emiliano Flores', rating: 5, comment: 'Excelente atención y muy buenas ofertas de formación.', date: 'hace 1 año' },
];

const ReviewsCarousel = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Título */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">Reseñas de Nuestros Graduados</h1>
          <p className="text-xl text-gray-600">Conoce las experiencias de quienes ya se formaron con nosotros</p>
        </motion.div>

        {/* Flechas de navegación */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000 }}
          loop={true} // 🔄 Carrusel infinito
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              if (swiper.params.navigation && prevRef.current && nextRef.current) {
                const navigationOptions = swiper.params.navigation as any;
                navigationOptions.prevEl = prevRef.current;
                navigationOptions.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 100);
          }}
          className="pb-10"
          onSlideChange={() => setIsSwiping(true)}
          onTouchEnd={() => setTimeout(() => setIsSwiping(false), 300)}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer flex flex-col h-full min-h-[200px]"
              onClick={() => !isSwiping && window.open('https://www.facebook.com/deltacapacitaciones/reviews', '_blank')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              {/* 🔥 Esto mantiene el comentario expandido para igualar alturas */}
              <p className="text-gray-600 flex-grow">{review.comment}</p>
              <span className="text-gray-500 text-sm mt-auto">{review.date}</span>
            </motion.div>
          </SwiperSlide>          
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
