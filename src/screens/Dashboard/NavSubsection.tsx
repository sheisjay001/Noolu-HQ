import { Gift01, X } from "@untitled-ui/icons-react";
import { ChartBar } from "../../components/ChartBar";
import { ChartLine } from "../../components/ChartLine";
import { GearSix } from "../../components/GearSix";
import { HouseSimple } from "../../components/HouseSimple";
import { PlugsConnected } from "../../components/PlugsConnected";
import { Users } from "../../components/Users";

interface NavSubsectionProps {
  onClose?: () => void;
}

const navItems = [
  {
    icon: <HouseSimple className="!relative !w-6 !h-6" />,
    label: "Dashboard",
    active: true,
  },
  {
    icon: <ChartBar className="!relative !w-6 !h-6" />,
    label: "Report",
    active: false,
  },
  {
    icon: <ChartLine className="!relative !w-6 !h-6" />,
    label: "Analytics",
    active: false,
  },
  {
    icon: <Users className="!relative !w-6 !h-6" />,
    label: "Users",
    active: false,
  },
  {
    icon: <PlugsConnected className="!relative !w-6 !h-6" />,
    label: "Integrations",
    active: false,
  },
  {
    icon: <GearSix className="!relative !w-6 !h-6" />,
    label: "Settings",
    active: false,
  },
];

export const NavSubsection = ({ onClose }: NavSubsectionProps): JSX.Element => {
  return (
    <div className="w-[280px] lg:w-[221px] h-full bg-white flex flex-col shadow-lg lg:shadow-none">
      {/* Close button for mobile */}
      <div className="flex items-center justify-between p-4 lg:hidden border-b">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
          <span className="font-medium text-[#3a3a3acc] text-xl">DIAG</span>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Logo for desktop */}
      <div className="hidden lg:flex items-center gap-2 p-6">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
        <div className="relative w-fit font-medium text-[#3a3a3acc] text-[22.6px]">
          DIAG
        </div>
      </div>

      {/* Active indicator for desktop */}
      <div className="hidden lg:block absolute top-[133px] left-[30px] w-[191px] h-[43px] bg-[#eeedff66] border-r-2 border-indigo-600" />

      {/* Navigation Items */}
      <div className="flex flex-col flex-1 p-4 lg:p-6 lg:pt-8 gap-4 lg:gap-6 overflow-y-auto">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
          >
            {item.icon}
            <div
              className={`relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-base tracking-[0] leading-[normal] ${
                item.active ? "text-indigo-600" : "text-[#3a3a3ab2]"
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Trial Banner */}
      <div className="mx-4 mb-4 lg:mx-[calc(50%_-_88px)] lg:mb-20 lg:absolute lg:bottom-0 lg:left-0 flex flex-col w-auto lg:w-[175px] items-start gap-4 p-4 bg-gray-50 rounded-2xl border-[0.5px] border-solid border-[#3a3a3a1a]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Gift01 className="w-6 h-6 text-indigo-600" />
          </div>
          <p className="relative self-stretch [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#3a3a3ae6] text-base tracking-[0.08px] leading-[18px]">
            You&apos;re on a 7-day free trial
          </p>
          <p className="relative self-stretch [font-family:'Montserrat-Light',Helvetica] font-light text-[#3a3a3acc] text-[8px] tracking-[0.04px] leading-[normal]">
            Enjoy full access to all features , no limits, no commitments (yet).
            <br />
            Make the most of it before your trial ends.
          </p>
        </div>
        <div className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] bg-indigo-600 rounded-lg">
          <div className="relative w-28 mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[10px] text-center tracking-[0.05px] leading-[normal]">
            Choose a Plan
          </div>
        </div>
      </div>
    </div>
  );
};
