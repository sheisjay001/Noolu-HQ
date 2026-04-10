import { Gift01 } from "@untitled-ui/icons-react";
import { ChartBar } from "../../components/ChartBar";
import { ChartLine } from "../../components/ChartLine";
import { GearSix } from "../../components/GearSix";
import { HouseSimple } from "../../components/HouseSimple";
import { PlugsConnected } from "../../components/PlugsConnected";
import { Users } from "../../components/Users";

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

export const NavSubsection = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-0 w-[221px] h-[1024px] bg-white">
      <div className="absolute top-[133px] left-[30px] w-[191px] h-[43px] bg-[#eeedff66] border-r-2 border-indigo-600" />
      <div className="inline-flex items-center gap-2 absolute top-6 left-10">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
        <div className="relative w-fit font-medium text-[#3a3a3acc] text-[22.6px]">
          DIAG
        </div>
      </div>
      <div className="flex flex-col w-[139px] items-start gap-6 absolute top-[140px] left-10">
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
      <div className="flex flex-col w-[175px] items-start gap-4 p-4 absolute left-[calc(50.00%_-_88px)] bottom-20 bg-gray-50 rounded-2xl border-[0.5px] border-solid border-[#3a3a3a1a]">
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
