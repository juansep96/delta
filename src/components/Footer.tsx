import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const phoneNumber = '5492213998450';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setMessage('');
  };

  return (
    <footer className="bg-blue-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +54 221 399-8450</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> deltacapacita.gr@gmail.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Buenos Aires, Argentina</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/deltacapacitaciones" className="hover:text-blue-300">Facebook</a>
              <a href="https://www.instagram.com/diplomaturasdelta" className="hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Delta Capacitaciones. Todos los derechos reservados.</p>
        </div>
      </div>
      
      {/* Botón flotante de WhatsApp con ventana de chat */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end">
        {showChat && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-2 w-80 border border-gray-300">
            <div className="bg-green-500 text-white p-3 rounded-t-lg">
              <p className="font-semibold">Delta Capacitaciones</p>
            </div>

            <div className="p-3 space-y-3 text-sm text-gray-800 h-48 overflow-y-auto">
              {/* Mensaje automático */}
              <div className="bg-gray-200 p-3 rounded-lg w-fit">
                <p>👋 ¡Hola! ¿En qué podemos ayudarte?</p>
              </div>

              {/* Mensaje del usuario */}
              {message && (
                <div className="bg-blue-100 p-3 rounded-lg w-fit ml-auto">
                  <p>{message}</p>
                </div>
              )}
            </div>

            <textarea
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 text-sm"
              rows={3}
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex justify-between mt-2">
              <button 
                onClick={() => setShowChat(false)}
                className="text-gray-600 text-xs hover:underline"
              >
                Cerrar
              </button>
              <button 
                onClick={handleSendMessage}
                className="bg-green-500 text-white px-4 py-1 rounded-md text-xs hover:bg-green-600"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={() => setShowChat(!showChat)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="h-8 w-8" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
