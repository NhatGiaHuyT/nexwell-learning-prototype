"use client";

import Sidebar from '../_components/Sidebar';
import TopCourses from '../_components/dashboard/TopCourses';
import MyCourses from '../_components/dashboard/MyCourses';
import CalendarPanel from '../_components/dashboard/CalendarPanel';
import OverallInfoPanel from '../_components/dashboard/OverallInfoPanel';
import ProductivityPanel from '../_components/dashboard/ProductivityPanel';
import { useSidebar } from '../_components/dashboard/SidebarContext';

export default function DashboardMain() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex min-h-screen bg-[#F6F6F7]">
      <Sidebar />
      <main 
        className={`flex-1 px-8 py-10 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <div className="w-full max-w-[1600px] flex gap-10 mx-auto pt-4">
          {/* Main content */}
          <div className="flex-1 flex flex-col gap-10">
            <TopCourses />
            <MyCourses />
          </div>
          {/* Right panels */}
          <div className="w-[370px] flex flex-col gap-10">
            <CalendarPanel />
            <OverallInfoPanel />
            <ProductivityPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
