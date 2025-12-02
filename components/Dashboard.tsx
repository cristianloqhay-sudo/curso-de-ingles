import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DATA } from '../constants';
import { Camera, Facebook, Music, BookOpen } from 'lucide-react';

interface DashboardProps {
  navigate: (target: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ navigate }) => {
  const chartData = Object.keys(DATA).map(key => ({
    name: DATA[key].title.split(' ')[0], // Short name
    value: DATA[key].items.length
  }));

  const COLORS = ['#1E3A8A', '#2563EB', '#60A5FA', '#DC2626', '#EF4444', '#F87171', '#9CA3AF'];

  return (
    <section className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-royal mb-2">Welcome! Bienvenido.</h2>
        <p className="text-gray-600">Esta aplicación interactiva está diseñada para ayudarte a dominar el vocabulario esencial del inglés. Let's learn English!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-accent">
          <h3 className="font-bold text-xl mb-4 text-royal">Cómo usar esta app</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-accent">➤</span> 
              <span><strong>Paso 1:</strong> Presiona el botón <strong className="text-accent">"¡Empecemos!"</strong> para iniciar tu primera lección.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-accent">➤</span> 
              <span>Navega por los temas libremente usando el menú.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-accent">➤</span> 
              <span><strong>Haz clic en las tarjetas</strong> para revelar la frase de ejemplo.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-accent">➤</span> 
              <span>Practica la pronunciación usando la guía fonética (ej. <em>[jelóu]</em>).</span>
            </li>
            <li className="flex items-start font-bold text-accent">
              <span className="mr-2 text-accent">➤</span> 
              <span>¡Haz el **Test de Vocabulario** para medir tu progreso!</span>
            </li>
          </ul>
        </div>

        {/* Visualization */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center border-t-4 border-royal">
          <h3 className="font-bold text-lg mb-2 text-royal">Composición del Vocabulario</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '10px' }}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200">
        <h3 className="text-royal font-bold text-lg mb-2">¡Únete a la Comunidad y Sigue Aprendiendo!</h3>
        <p className="text-sm text-gray-600 mb-6">Síguenos en redes para más tips y contenido gratuito, o empieza tu curso digital ahora.</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <div className="flex flex-col items-center">
            <a href="https://www.instagram.com/lexigo2.0/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md w-12 h-12 bg-pink-600">
              <Camera size={24} />
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">Instagram</span>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.facebook.com/profile.php?id=61583705050960" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md w-12 h-12 bg-blue-600">
              <Facebook size={24} />
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">Facebook</span>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.tiktok.com/@lexigo2.0" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md w-12 h-12 bg-gray-800">
              <Music size={24} />
            </a>
            <span className="text-xs mt-1 font-semibold text-gray-700">TikTok</span>
          </div>
        </div>

        {/* Digital Course Button */}
        <a href="https://go.hotmart.com/C103156556U" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-lg text-white transition-all duration-200 hover:scale-[1.05] shadow-md bg-accent w-full text-lg font-bold hover:bg-accent-hover mt-4 border border-red-800">
          <BookOpen className="mr-2" size={24} />
          Iniciar Curso Digital
        </a>
      </div>
    </section>
  );
};