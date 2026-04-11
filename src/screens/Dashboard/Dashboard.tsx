import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { DivSubsection } from "./DivSubsection";
import { DivWrapperSubsection } from "./DivWrapperSubsection";
import { FrameSubsection } from "./FrameSubsection";
import { FrameWrapperSubsection } from "./FrameWrapperSubsection";
import { NavSubsection } from "./NavSubsection";

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  const displayName = user?.firstName || user?.email?.split('@')[0] || 'User';

  if (isLoading) {
    return (
      <div className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] relative">
      <FrameSubsection />
      <NavSubsection />
      <div className="absolute top-[123px] left-[245px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-2xl tracking-[0] leading-[normal]">
        Welcome {displayName}
      </div>
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
    </div>
  );
};
