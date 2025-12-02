import React from 'react';
import { Home, MessageCircle, User, Hash, Palette, Dog, Plane, Cloud, Brain } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentView: string;
  onNavigate: (view: string) => void;
  visitedCount: number;
  totalModules: number;
  closeSidebar: () => void;
}

const menuItems = [
  { id: 'home', label: 'Inicio / Dashboard', icon: <Home size={20} /> },
  { id: 'saludos', label: 'Saludos', icon: <MessageCircle size={20} /> },
  { id: 'presentacion', label: 'Presentaciones', icon: <User size={20} /> },
  { id: 'numeros', label: 'Números (1-10)', icon: <Hash size={20} /> },
  { id: 'colores', label: 'Colores', icon: <Palette size={20} /> },
  { id: 'animales', label: 'Animales y Casa', icon: <Dog size={20} /> },
  { id: 'viajes', label: 'Viajes y Salud', icon: <Plane size={20} /> },
  { id: 'clima', label: 'Clima y Tiempo', icon: <Cloud size={20} /> },
  { id: 'quiz', label: 'Test de Vocabulario', icon: <Brain size={20} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  currentView, 
  onNavigate, 
  visitedCount, 
  totalModules 
}) => {
  const percent = Math.min(100, Math.round((visitedCount / totalModules) * 100));

  return (
    <nav className={`
      fixed md:relative z-20 w-64 h-full bg-royal text-white flex flex-col shadow-xl transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-6 border-b border-white/20 hidden md:block">
        <h1 className="text-2xl font-bold tracking-wide">
          <span>🇺🇸 Inglés</span>
          <br/>
          <span className="text-sm font-normal text-gray-200">para el Día a Día</span>
        </h1>
      </div>
      
      <div className="px-6 pt-6 pb-2">
        <button 
          onClick={() => onNavigate('saludos')}
          className="animate-heartbeat w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-red-800"
        >
          <span>🚀</span> ¡Empecemos!
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button 
                  onClick={() => onNavigate(item.id)}
                  className={`w-full text-left px-6 py-3 transition-colors flex items-center gap-3
                    ${isActive 
                      ? 'bg-royal-hover border-l-4 border-accent font-semibold' 
                      : 'hover:bg-royal-hover border-l-4 border-transparent'
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-6 bg-royal-hover mt-auto border-t border-white/10">
        <p className="text-xs text-gray-300 mb-2">Progreso de sesión</p>
        <div className="w-full bg-[#0f172a] rounded-full h-2.5 border border-white/10">
          <div 
            className="bg-accent h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="text-xs text-center mt-2 text-gray-300">{visitedCount}/{totalModules} Temas explorados</p>
      </div>
    </nav>
  );
};