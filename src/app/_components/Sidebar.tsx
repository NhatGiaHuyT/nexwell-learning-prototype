"use client";

import React from 'react';
import { FaChalkboardTeacher, FaBook, FaEnvelope, FaChartBar, FaCreditCard, FaCog, FaLifeRing, FaTimes, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useSidebar } from './dashboard/SidebarContext';
import { signOut } from 'next-auth/react';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
};

function SidebarItem({ icon, label, active = false, badge, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center px-5 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
        active
          ? 'bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white shadow-md'
          : 'hover:bg-[#2D2D3A] text-gray-300 hover:text-white'
      }`}
      style={{ minHeight: 44 }}
    >
      <span className={`text-lg mr-4 ${active ? 'text-white' : 'text-[#7C3AED]'}`}>{icon}</span>
      <span className={`flex-1 text-sm font-medium tracking-tight ${active ? 'text-white' : 'text-gray-200'}`}>{label}</span>
      {badge !== undefined && (
        <span className="ml-2 bg-[#7C3AED] text-white text-xs rounded-full px-2 py-0.5 font-semibold">
          {badge}
        </span>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  
  const handleLogout = () => {
    signOut({ callbackUrl: '/auth/login' });
  };

  if (!isSidebarOpen) {
    return (
      <div className="fixed left-0 top-1/2 z-30">
        <button 
          onClick={toggleSidebar}
          className="bg-[#18181B] text-white p-3 rounded-r-lg shadow-lg hover:bg-[#232326] transition-all"
          aria-label="Open sidebar"
        >
          <FaBars className="text-xl" />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
        onClick={toggleSidebar}
      ></div>
      <aside className="bg-[#18181B] text-white w-64 h-screen flex flex-col justify-between py-6 px-4 shadow-xl border-r border-[#2D2D3A] fixed top-0 left-0 z-20">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2D2D3A]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Nexwell</span>
            </div>
            <button 
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-[#2D2D3A] transition-all"
              aria-label="Close sidebar"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              <SidebarItem icon={<FaChartBar />} label="Dashboard" active={true} onClick={() => console.log('Dashboard clicked')} />
              <SidebarItem icon={<FaBook />} label="Courses" onClick={() => console.log('Courses clicked')} />
              <SidebarItem icon={<FaChalkboardTeacher />} label="Teachers" onClick={() => console.log('Teachers clicked')} />
              <SidebarItem icon={<FaEnvelope />} label="Messages" badge={8} onClick={() => console.log('Messages clicked')} />
              <SidebarItem icon={<FaChartBar />} label="Analytics" onClick={() => console.log('Analytics clicked')} />
              <SidebarItem icon={<FaCreditCard />} label="Payments" onClick={() => console.log('Payments clicked')} />
            </div>
          </nav>
        </div>
        <div className="space-y-1 pt-4 border-t border-[#2D2D3A]">
          <SidebarItem icon={<FaLifeRing />} label="Support" onClick={() => console.log('Support clicked')} />
          <SidebarItem icon={<FaCog />} label="Settings" onClick={() => console.log('Settings clicked')} />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" onClick={handleLogout} />
        </div>
      </aside>
    </>
  );
}
