import Sidebar from './_components/Sidebar';
import DashboardMain from './dashboard/DashboardMain';

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#F6F6F7]">
      <Sidebar />
      <div className="flex-1">
        <DashboardMain />
      </div>
    </div>
  );
}
