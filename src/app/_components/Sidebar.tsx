import React from 'react';
import { FaChalkboardTeacher, FaBook, FaEnvelope, FaChartBar, FaCreditCard, FaCog, FaLifeRing } from 'react-icons/fa';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
};

function SidebarItem({ icon, label, active = false, badge }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center px-5 py-3 rounded-2xl cursor-pointer transition-all duration-200 shadow-sm border border-transparent ${
        active
          ? 'bg-gradient-to-r from-[#7C3AED] to-[#232326] text-white shadow-lg border-[#7C3AED]'
          : 'bg-[#232326] hover:bg-[#2D2D3A] text-gray-200 hover:shadow-md'
      }`}
      style={{ minHeight: 48 }}
    >
      <span className={`text-xl mr-4 ${active ? 'text-white' : 'text-[#7C3AED]'}`}>{icon}</span>
      <span className={`flex-1 text-base font-semibold tracking-tight ${active ? 'text-white' : 'text-gray-100'}`}>{label}</span>
      {badge !== undefined && (
        <span className="ml-2 bg-[#7C3AED] text-white text-xs rounded-full px-2 py-0.5 font-semibold shadow">{badge}</span>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="bg-[#18181B] text-white w-[270px] min-h-screen flex flex-col justify-between py-10 px-7 shadow-2xl rounded-r-3xl border-l border-[#232326]">
      <div>
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#232326]">
          <img src="/favicon.ico" alt="Nexwell Logo" className="w-12 h-12 rounded-2xl shadow-lg" />
          <span className="text-2xl font-extrabold tracking-tight text-white">Nexwell</span>
        </div>
        <nav className="space-y-2">
          <SidebarItem icon={<FaChartBar />} label="Dashboard" active={true} />
          <SidebarItem icon={<FaBook />} label="Courses" />
          <SidebarItem icon={<FaChalkboardTeacher />} label="Teachers" />
          <SidebarItem icon={<FaEnvelope />} label="Messages" badge={8} />
          <SidebarItem icon={<FaChartBar />} label="Analytics" />
          <SidebarItem icon={<FaCreditCard />} label="Payments" />
        </nav>
      </div>
      <div className="space-y-2 mt-8">
        <SidebarItem icon={<FaLifeRing />} label="Support" />
        <SidebarItem icon={<FaCog />} label="Settings" />
      </div>
    </aside>
  );
}
