import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { DivSubsection } from "./DivSubsection";
import { DivWrapperSubsection } from "./DivWrapperSubsection";
import { FrameSubsection } from "./FrameSubsection";
import { FrameWrapperSubsection } from "./FrameWrapperSubsection";
import { NavSubsection } from "./NavSubsection";

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  const displayName = user?.firstName || user?.email?.split('@')[0] || 'User';

  if (isLoading) {
    return (
      <div className="bg-gray-50 w-full min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-50 w-full min-h-screen flex">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Responsive */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <NavSubsection onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden px-4 py-3 bg-white border-b">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold text-lg">Noolu HQ</span>
        </div>

        {/* Top Frame Section */}
        <FrameSubsection />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 lg:ml-0 overflow-x-auto">
          {/* Welcome Message */}
          <div className="mb-6 lg:mb-8">
            <h1 className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-xl lg:text-2xl tracking-[0] leading-[normal]">
              Welcome {displayName}
            </h1>
          </div>

          {/* Stats Cards */}
          <div className="mb-6 lg:mb-8">
            <FrameWrapperSubsection />
          </div>

          {/* Additional Stats */}
          <div className="mb-6 lg:mb-8">
            <DivWrapperSubsection />
          </div>

          {/* Latest Signups Table */}
          <div className="w-full">
            <DivSubsection />
          </div>
        </main>
      </div>
    </div>
  );
};
