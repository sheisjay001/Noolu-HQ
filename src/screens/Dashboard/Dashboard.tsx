import { DivSubsection } from "./DivSubsection";
import { DivWrapperSubsection } from "./DivWrapperSubsection";
import { FrameSubsection } from "./FrameSubsection";
import { FrameWrapperSubsection } from "./FrameWrapperSubsection";
import { NavSubsection } from "./NavSubsection";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] relative">
      <FrameSubsection />
      <NavSubsection />
      <div className="absolute top-[123px] left-[245px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-2xl tracking-[0] leading-[normal]">
        Welcome Adebanjo
      </div>
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
    </div>
  );
};
