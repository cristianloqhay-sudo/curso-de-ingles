import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { CardGrid } from './components/CardGrid';
import { Quiz } from './components/Quiz';
import { DATA } from './constants';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize with some default progress if needed, or just empty
  useEffect(() => {
    // Sync hash if present
    const hash = window.location.hash.replace('#', '');
    if (hash && (DATA[hash] || hash === 'quiz' || hash === 'home')) {
      setCurrentView(hash);
      if (DATA[hash]) {
        setVisitedModules(prev => new Set(prev).add(hash));
      }
    }
  }, []);

  const handleNavigate = (target: string) => {
    setCurrentView(target);
    window.location.hash = target;
    
    if (DATA[target]) {
      setVisitedModules(prev => new Set(prev).add(target));
    }
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    if (currentView === 'home') {
      return <Dashboard navigate={handleNavigate} />;
    }
    if (currentView === 'quiz') {
      return <Quiz />;
    }
    if (DATA[currentView]) {
      return <CardGrid categoryKey={currentView} data={DATA[currentView]} />;
    }
    return <Dashboard navigate={handleNavigate} />;
  };

  return (
    <div class="flex h-screen overflow-hidden bg-gray-100 flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <header className="md:hidden bg-royal text-white p-4 flex justify-between items-center z-30 shadow-md">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span>🇺🇸/🇬🇧</span> Léxico Inglés
        </h1>
        <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavigate('saludos')}
              className="animate-heartbeat bg-accent hover:bg-accent-hover text-white px-3 py-1 rounded-lg font-bold shadow-md text-sm border border-red-800"
            >
              EMPEZAR
            </button>
            <button onClick={toggleSidebar} className="text-white p-1">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </header>

      {/* Sidebar & Overlay */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        visitedCount={visitedModules.size}
        totalModules={Object.keys(DATA).length}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative p-4 md:p-8 bg-gray-50">
        {renderContent()}
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}