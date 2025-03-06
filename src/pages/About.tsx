import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="About CEPAD"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl">Formando el futuro de la educación en Argentina</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Delta Capacitaciones nos dedicamos a formar docentes de excelencia, comprometidos con la educación 
              y preparados para enfrentar los desafíos del siglo XXI. Nuestra misión es proporcionar 
              una formación integral y de calidad que impacte positivamente en la educación argentina.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Award className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excelencia Académica</h3>
              <p className="text-gray-600">
                Nuestros programas están diseñados bajo los más altos estándares de calidad educativa, 
                garantizando una formación completa y actualizada.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <BookOpen className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Innovación Educativa</h3>
              <p className="text-gray-600">
                Incorporamos las últimas tendencias y metodologías pedagógicas para formar 
                docentes preparados para la educación del futuro.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Users className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Comunidad Educativa</h3>
              <p className="text-gray-600">
                Creamos espacios de intercambio y crecimiento profesional, fomentando una 
                comunidad activa de educadores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Años de Experiencia</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Graduados</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-2">23</div>
              <div className="text-lg">Provincias</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Programas Educativos</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;