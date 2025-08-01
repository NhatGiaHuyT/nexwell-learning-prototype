import TopCourses from '../_components/dashboard/TopCourses';
import MyCourses from '../_components/dashboard/MyCourses';
import CalendarPanel from '../_components/dashboard/CalendarPanel';
import OverallInfoPanel from '../_components/dashboard/OverallInfoPanel';
import ProductivityPanel from '../_components/dashboard/ProductivityPanel';

export default function DashboardMain() {
  return (
    <main className="w-full min-h-screen px-8 py-10 bg-[#F6F6F7] flex justify-center">
      <div className="w-full max-w-[1600px] flex gap-10">
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
  );
}
