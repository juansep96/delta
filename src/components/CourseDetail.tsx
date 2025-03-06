import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { icons, courses } from '../Config';
import { Clock, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <p className="text-center text-gray-500 text-lg">Curso no encontrado.</p>;
  }

  const IconComponent = icons[course.icon as keyof typeof icons];

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría recibir más información sobre el curso "${course.title}" (${course.code}).`
  );

  const whatsappLink = `https://wa.me/5492213998450?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-6">
            <IconComponent className="h-12 w-12 text-blue-900 mr-4" />
            <h1 className="text-3xl font-bold text-blue-900">{course.title}</h1>
          </div>
          <p className="text-gray-600 mb-4">{course.category}</p>
          <p className="text-lg text-gray-700 mb-6">{course.description}</p>
          <div className="flex items-center text-blue-900 mb-4">
            <Clock className="h-5 w-5 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-blue-900 mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{course.provinces.join(', ')}</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 text-lg font-semibold"
          >
            <FaWhatsapp className="h-6 w-6 mr-2" />
            Solicitar Información
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;
