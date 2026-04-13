import { ChevronDown } from "@untitled-ui/icons-react";

const xAxisLabels = [
  "Oct 1",
  "Oct 3",
  "Oct 6",
  "Oct 9",
  "Oct 10",
  "Oct 15",
  "Oct 16",
  "Oct 17",
  "Oct 18",
];

const yAxisLabels = ["₦60k", "₦40k", "₦20k", "₦0"];

const barChartXLabels = ["Free", "Pro", "Business", "Enterprise"];

const yAxisBarLabels = ["300", "200", "100", "0"];

// Bar chart positions using Tailwind arbitrary values
const barData = [
  { top: "top-[69px]", left: "left-[70px]", width: "w-[48px]", height: "h-[122px]" },
  { top: "top-[108px]", left: "left-[144px]", width: "w-[48px]", height: "h-[83px]" },
  { top: "top-[127px]", left: "left-[227px]", width: "w-[48px]", height: "h-[64px]" },
  { top: "top-[127px]", left: "left-[312px]", width: "w-[48px]", height: "h-[64px]" },
];


export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
      {/* Revenue Over Time Chart */}
      <div className="flex flex-col h-[231.22px] items-start gap-[29.74px] bg-white rounded-lg border border-[#3a3a3a1a] shadow-sm overflow-hidden">
        <div className="relative self-stretch w-full h-[231.22px] bg-white rounded-[2.24px] overflow-hidden">
          {/* X Axis Labels */}
          <div className="flex w-[calc(100%_-_62px)] items-start justify-between absolute top-[211px] left-[52px]">
            {xAxisLabels.map((label, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-fit mt-[-0.56px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3ab2] text-[8px] text-center tracking-[-0.08px] leading-[13.5px] whitespace-nowrap"
              >
                {label}
              </div>
            ))}
          </div>
          {/* Chart Area - Line Chart */}
          <div className="absolute w-[calc(100%_-_51px)] top-[54px] left-[50px] h-[138px]">
            <svg className="w-full h-full" viewBox="0 0 340 138" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M0,120 Q30,110 60,100 T120,60 T180,20 T240,50 T300,80 T340,90"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
              <path
                d="M0,120 Q30,110 60,100 T120,60 T180,20 T240,50 T300,80 T340,90 L340,138 L0,138 Z"
                fill="url(#lineGradient)"
              />
            </svg>
          </div>
          {/* Y Axis Labels */}
          <div className="inline-flex flex-col h-[134px] items-start justify-between absolute top-[62px] left-[18px]">
            {yAxisLabels.map((label, index) => (
              <div
                key={index}
                className="relative flex items-center w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3ab2] text-[8px] tracking-[0] leading-[12.3px] whitespace-nowrap"
              >
                {label}
              </div>
            ))}
          </div>
          {/* Grid Lines */}
          <div className="absolute top-[69px] left-11 w-[340px] h-[122px] flex flex-col">
            <div className="w-full h-px bg-gray-200" />
            <div className="mt-[38.3px] w-full h-px bg-gray-200" />
            <div className="mt-[40.5px] w-full h-px bg-gray-200" />
            <div className="mt-[40.5px] w-full h-px bg-gray-200" />
          </div>
          {/* Header */}
          <div className="flex w-[calc(100%_-_2px)] items-start absolute top-px left-px">
            <div className="flex flex-col h-[89.8px] items-start gap-[13.47px] pl-[13.47px] pr-[6.73px] pt-[13.47px] pb-0 relative flex-1 grow">
              <div className="flex flex-col items-start gap-[5.61px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[251.43px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[5.61px] relative flex-1 grow">
                    <div className="relative flex items-center w-fit mt-[-0.56px] mr-[-47.32px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#3a3a3ab2] text-[7.9px] tracking-[0.16px] leading-[10.1px] whitespace-nowrap">
                      REVENUE OVER TIME
                    </div>
                    <div className="absolute top-[17px] left-[88px] w-[81px] h-4" />
                  </div>
                  <div className="inline-flex flex-col items-start px-2 py-0 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-end w-fit [font-family:'DM_Sans-Medium',Helvetica] font-medium text-indigo-600 text-[7px] text-right tracking-[0.14px] leading-[14px] whitespace-nowrap">
                        THIS MONTH
                      </div>
                      <ChevronDown className="w-4 h-4 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tooltip */}
          <div className="flex flex-col w-[134px] items-start gap-0.5 absolute top-[142px] left-[276px]">
            <div className="relative w-1 h-1 bg-indigo-600 rounded-sm aspect-[1]" />
            <div className="flex flex-col w-[77px] items-center justify-center relative flex-[0_0_auto]">
              <div className="flex flex-col items-center p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#0e0696] rounded-lg shadow-drop-shadow-base">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffffb2] text-[6px] tracking-[0] leading-5 whitespace-nowrap">
                    16 Oct 2024
                  </div>
                  <div className="self-stretch [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#ffffffe6] text-[10px] leading-[30px] relative flex items-center tracking-[0]">
                    ₦24,000.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Performing Plans Chart */}
      <div className="flex flex-col h-[231.22px] items-start gap-[29.74px] bg-white rounded-lg border border-[#3a3a3a1a] shadow-sm overflow-hidden">
        <div className="relative self-stretch w-full h-[231.22px] bg-white rounded-[2.24px] overflow-hidden">
          {/* X Axis Labels */}
          <div className="flex w-[calc(100%_-_62px)] items-start justify-between absolute top-[204px] left-[52px]">
            {barChartXLabels.map((label, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center flex-1 mt-[-0.56px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3ab2] text-[8px] text-center tracking-[-0.08px] leading-[13.5px]"
              >
                {label}
              </div>
            ))}
          </div>
          {/* Y Axis with label */}
          <div className="inline-flex items-center gap-2 absolute top-[62px] left-3">
            <div className="relative flex items-center w-fit ml-[-16.00px] rotate-[-90.00deg] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3a99] text-[6px] tracking-[0] leading-[12.3px] whitespace-nowrap">
              Active users
            </div>
            <div className="inline-flex flex-col h-[134px] items-start justify-between relative flex-[0_0_auto]">
              {yAxisBarLabels.map((label, index) => (
                <div
                  key={index}
                  className="relative flex items-center w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#3a3a3ab2] text-[8px] tracking-[0] leading-[12.3px] whitespace-nowrap"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          {/* Grid Lines */}
          <div className="absolute top-[69px] left-11 w-[340px] h-[122px] flex flex-col">
            <div className="w-full h-px bg-gray-200" />
            <div className="mt-[38.3px] w-full h-px bg-gray-200" />
            <div className="mt-[40.5px] w-full h-px bg-gray-200" />
            <div className="mt-[40.5px] w-full h-px bg-gray-200" />
          </div>
          {/* Header */}
          <div className="flex w-[calc(100%_-_2px)] items-start absolute top-px left-px">
            <div className="flex flex-col h-[89.8px] items-start gap-[13.47px] pl-[13.47px] pr-[6.73px] pt-[13.47px] pb-0 relative flex-1 grow">
              <div className="flex flex-col items-start gap-[5.61px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-[251.43px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[5.61px] relative flex-1 grow">
                    <div className="relative flex items-center w-fit mt-[-0.56px] mr-[-63.32px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#3a3a3ab2] text-[7.9px] tracking-[0.16px] leading-[10.1px] whitespace-nowrap">
                      TOP PERFORMING PLANS
                    </div>
                    <div className="absolute top-[17px] left-[88px] w-[81px] h-4" />
                  </div>
                  <div className="inline-flex flex-col items-start px-2 py-0 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-end w-fit [font-family:'DM_Sans-Medium',Helvetica] font-medium text-indigo-600 text-[7px] text-right tracking-[0.14px] leading-[14px] whitespace-nowrap">
                        THIS MONTH
                      </div>
                      <ChevronDown className="w-4 h-4 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bars */}
          {barData.map((bar, index) => (
            <div
              key={index}
              className={`absolute bg-[#bfbcff] rounded-[8px_8px_0px_0px] ${bar.top} ${bar.left} ${bar.width} ${bar.height}`}
            />
          ))}
        </div>
      </div>
      {/* User Distribution By Country */}
      <div className="flex flex-col h-[231.3px] items-start gap-[1.8px] px-[9px] py-[9.45px] bg-white rounded-lg border border-[#3a3a3a1a] shadow-sm overflow-hidden">
        <div className="flex flex-col items-start gap-[7.2px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col h-[14.85px] items-start gap-[13.5px] relative self-stretch w-full">
            <div className="inline-flex items-center gap-[12.6px] relative flex-[0_0_auto]">
              <div className="relative flex items-center w-fit mt-[-0.45px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#3a3a3ab2] text-[7.9px] tracking-[0.16px] leading-[10.1px] whitespace-nowrap">
                USER DISTRIBUTION BY COUNTRY
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {/* Donut Chart */}
            <div className="relative w-[98.55px] h-[95.4px]">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="35" fill="none" stroke="#6366f1" strokeWidth="12" strokeDasharray="88 220" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="66 220" strokeDashoffset="-88" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="44 220" strokeDashoffset="-154" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#06b6d4" strokeWidth="12" strokeDasharray="22 220" strokeDashoffset="-198" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-medium text-gray-700">400</span>
                  <span className="text-[7px] text-gray-400">Total users</span>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col items-start gap-[10.8px] px-1 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                {/* Left Column */}
                <div className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[3.6px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[3.6px] relative flex-[0_0_auto]">
                      <div className="w-3 h-3 rounded-full bg-indigo-500" />
                      <p className="relative flex items-center w-fit text-[8px] text-gray-500 whitespace-nowrap">
                        <span>Nigeria (40%)</span>
                      </p>
                    </div>
                    <div className="relative w-fit font-medium text-[#3a3a3ae6] text-[8px] whitespace-nowrap">
                      160
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-end justify-center gap-[3.6px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[3.6px] relative flex-[0_0_auto]">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <div className="relative flex items-center w-fit text-[8px] text-gray-500 whitespace-nowrap">
                        US (30%)
                      </div>
                    </div>
                    <div className="relative self-stretch font-medium text-[#3a3a3ae6] text-[8px]">
                      120
                    </div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[3.6px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[3.6px] relative flex-[0_0_auto]">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <div className="relative flex items-center w-fit text-[8px] text-gray-500 whitespace-nowrap">
                        UK (20%)
                      </div>
                    </div>
                    <div className="relative w-fit font-medium text-[#3a3a3ae6] text-[8px] whitespace-nowrap">
                      80
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-end justify-center gap-[3.6px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[3.6px] relative flex-[0_0_auto]">
                      <div className="w-3 h-3 rounded-full bg-cyan-500" />
                      <div className="relative flex items-center w-fit text-[8px] text-gray-500 whitespace-nowrap">
                        Others (10%)
                      </div>
                    </div>
                    <div className="relative self-stretch font-medium text-[#3a3a3ae6] text-[8px]">
                      40
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
