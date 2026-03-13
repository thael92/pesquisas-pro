import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, List, BookOpen, Lightbulb, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DashboardLayout() {
  const { logout, profile } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Plataformas', path: '/dashboard/platforms', icon: List },
    { name: 'Tutoriais', path: '/dashboard/tutorials', icon: BookOpen },
    { name: 'Estratégias', path: '/dashboard/strategies', icon: Lightbulb },
    { name: 'Perfil', path: '/dashboard/profile', icon: User },
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-800 border-r border-slate-700">
        <div className="p-6 flex items-center justify-center border-b border-slate-700">
          <h1 className="text-xl font-bold text-indigo-500">Pesquisador PRO</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <div className="mb-4 px-4 py-3 bg-slate-900 rounded-xl">
            <p className="text-sm text-slate-400">Plano Atual</p>
            <p className="font-semibold text-green-400 capitalize">{profile?.subscriptionStatus === 'active' ? 'PRO' : profile?.subscriptionStatus}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-red-400 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-4 z-50">
        <h1 className="text-lg font-bold text-indigo-500">Pesquisador PRO</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-16 bg-slate-800 z-40 flex flex-col"
          >
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              ))}
            </nav>
            <div className="p-4 border-t border-slate-700">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 w-full text-left text-red-400 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sair</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 bg-slate-900">
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
