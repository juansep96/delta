import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

const provinces = [
  'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut',
  'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa',
  'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
  'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
  'Tierra del Fuego', 'Tucumán'
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Delta Capacitaciones</span>
            </Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:bg-blue-800 px-4 py-2 rounded-md">Inicio</Link>
            <Link to="/nosotros" className="hover:bg-blue-800 px-4 py-2 rounded-md">Nosotros</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
              >
                Provincias
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden border z-50">
                  <div className="max-h-96 overflow-y-auto">
                    {provinces.map((province) => (
                      <Link
                        key={province}
                        to={`/provincias?provincia=${encodeURIComponent(province)}`}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {province}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/resenas" className="hover:bg-blue-800 px-4 py-2 rounded-md">Reseñas</Link>
            <Link to="/contacto" className="hover:bg-blue-800 px-4 py-2 rounded-md">Contacto</Link>
          </div>

          {/* Botón Menú Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link to="/" className="block px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/nosotros" className="block px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => setIsOpen(false)}>Nosotros</Link>

            {/* Dropdown Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left flex items-center px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none"
              >
                Provincias
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="max-h-60 overflow-y-auto">
                    {provinces.map((province) => (
                      <Link
                        key={province}
                        to={`/provincias?provincia=${encodeURIComponent(province)}`}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-200 transition"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {province}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/resenas" className="block px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => setIsOpen(false)}>Reseñas</Link>
            <Link to="/contacto" className="block px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => setIsOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
