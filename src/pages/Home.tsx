import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formación Docente de Excelencia
            </h1>
            <p className="text-xl mb-8">
             Capacitate con los mejores profesionales en educación.
            </p>
            <a 
              href="/contacto" 
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
            >
              Comenzá Ahora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-semibold mb-2">Títulos Oficiales</h3>
              <p className="text-gray-600">Certificaciones con validez nacional</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-semibold mb-2">Cursos Actualizados</h3>
              <p className="text-gray-600">Contenido adaptado al mercado actual</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-semibold mb-2">Docentes Expertos</h3>
              <p className="text-gray-600">Profesionales con amplia experiencia</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6"
            >
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-semibold mb-2">Horarios Flexibles</h3>
              <p className="text-gray-600">Estudiá a tu propio ritmo</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar tu carrera docente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contamos con más de 20 años de experiencia formando docentes en toda Argentina
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;