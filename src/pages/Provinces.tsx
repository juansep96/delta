import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { icons, courses } from '../Config';
import { Clock } from 'lucide-react';

const Provinces = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedProvince = searchParams.get('provincia') ?? '';

  // Filtrar cursos según la provincia seleccionada
  const filteredCourses = courses.filter(course =>
    course.provinces.includes(selectedProvince)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Titulaciones en {selectedProvince || 'Selecciona una provincia'}
          </h1>
          <p className="text-xl text-gray-600">
            Aquí puedes ver las titulaciones disponibles en esta provincia.
          </p>
        </motion.div>

        {selectedProvince ? (
          filteredCourses.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, index) => {
                const IconComponent = icons[course.icon as keyof typeof icons]; // Obtener el icono correcto
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <IconComponent className="h-12 w-12 text-blue-900 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.category}</p>
                    <div className="flex items-center text-blue-900">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <Link to={`/course/${course.id}`}>
                      <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300">
                        Más Información
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No hay titulaciones disponibles en esta provincia.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Selecciona una provincia desde el menú de navegación.
          </p>
        )}
      </div>
    </div>
  );
};

export default Provinces;
