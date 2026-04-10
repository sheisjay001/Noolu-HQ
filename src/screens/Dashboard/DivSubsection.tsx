import { User01 } from "@untitled-ui/icons-react";
import { ChevronLeftFilled } from "../../components/ChevronLeftFilled";
import { ChevronRightFilled } from "../../components/ChevronRightFilled";

const signupData = [
  {
    id: 1,
    name: "Adebanjo Promise",
    email: "Adebanjo@gmail.com",
    plan: "Free",
    joined: "3 days ago",
    avatarColor: "from-pink-400 to-purple-500",
    rowBg: "",
  },
  {
    id: 2,
    name: "Daniel Ololade",
    email: "Adebanjo@gmail.com",
    plan: "Premium",
    joined: "4 days ago",
    avatarColor: "from-green-400 to-teal-500",
    rowBg: "bg-[#f9fbfc]",
  },
  {
    id: 3,
    name: "Daniel Ololade",
    email: "Adebanjo@gmail.com",
    plan: "Premium",
    joined: "4 days ago",
    avatarColor: "from-orange-400 to-red-500",
    rowBg: "bg-[#f9fbfc]",
  },
  {
    id: 4,
    name: "Adebanjo Promise",
    email: "Adebanjo@gmail.com",
    plan: "Free",
    joined: "3 days ago",
    avatarColor: "from-blue-400 to-indigo-500",
    rowBg: "",
  },
];

export const DivSubsection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[995px] items-start gap-6 p-4 absolute top-[568px] left-[247px] bg-white rounded-lg">
      <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-xl tracking-[-0.20px] leading-[30px]">
        Latest Signups
      </div>
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded overflow-hidden">
          <div className="h-12 gap-10 bg-neutralnewneutral-s1 rounded-[4px_4px_0px_0px] flex items-center relative self-stretch w-full border-b [border-bottom-style:solid] border-[#3a3a3a1a]">
            <div className="px-6 py-2 flex-1 grow flex items-center relative self-stretch">
              <div className="relative w-fit [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-sm tracking-[0.02em] leading-[18px] whitespace-nowrap uppercase">
                NAME
              </div>
            </div>
            <div className="px-3 py-2 flex-1 grow flex items-center relative self-stretch">
              <div className="relative w-fit [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-sm tracking-[0.02em] leading-[18px] whitespace-nowrap uppercase">
                EMAIL
              </div>
            </div>
            <div className="px-3 py-2 flex-1 grow flex items-center relative self-stretch">
              <div className="relative w-fit [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-sm tracking-[0.02em] leading-[18px] whitespace-nowrap uppercase">
                PLAN
              </div>
            </div>
            <div className="justify-center px-3 py-2 flex-1 grow flex items-center relative self-stretch">
              <div className="relative w-[151px] ml-[-7.20px] mr-[-7.20px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-sm tracking-[0.02em] leading-[18px] uppercase">
                JOINED
              </div>
            </div>
          </div>
          {signupData.map((row) => (
            <div
              key={row.id}
              className={`h-[60px] justify-between ${row.rowBg} flex items-center relative self-stretch w-full border-b [border-bottom-style:solid] border-[#3a3a3a1a]`}
            >
              <div className="w-[166px] gap-2 px-3 py-2 flex items-center relative self-stretch">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${row.avatarColor} flex items-center justify-center`}>
                  <User01 className="w-4 h-4 text-white" />
                </div>
                <div className="relative w-fit font-medium text-gray-700 text-[10px] whitespace-nowrap">
                  {row.name}
                </div>
              </div>
              <div className="w-[161px] px-3 py-2 flex items-center relative self-stretch">
                <div className="relative w-fit font-medium text-gray-700 text-[10px] whitespace-nowrap">
                  {row.email}
                </div>
              </div>
              <div className="w-[151px] px-3 py-2 flex items-center relative self-stretch">
                <div className="relative flex-1 font-medium text-gray-700 text-[10px]">
                  {row.plan}
                </div>
              </div>
              <div className="w-[173px] px-3 py-2 flex items-center relative self-stretch">
                <div className="relative flex-1 font-medium text-gray-700 text-[10px]">
                  {row.joined}
                </div>
              </div>
            </div>
          ))}

          <div className="justify-end gap-[26px] pl-0 pr-6 py-0.5 w-full flex-[0_0_auto] rounded-[0px_0px_4px_4px] flex items-center relative self-stretch">
            <div className="relative w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3acc] text-sm tracking-[0.07px] leading-[18px] whitespace-nowrap">
              page 1 of 5
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="flex-col items-center justify-center p-2 rounded-[100px] overflow-hidden inline-flex relative flex-[0_0_auto] cursor-pointer hover:bg-gray-100">
                <div className="inline-flex items-start relative flex-[0_0_auto]">
                  <ChevronLeftFilled className="!relative !w-6 !h-6" />
                </div>
              </div>
              <div className="flex-col items-center justify-center p-2 rounded-[100px] overflow-hidden inline-flex relative flex-[0_0_auto] cursor-pointer hover:bg-gray-100">
                <div className="items-start inline-flex relative flex-[0_0_auto]">
                  <ChevronRightFilled className="!relative !w-6 !h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
