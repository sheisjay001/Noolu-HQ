import { SearchLg, Bell01, ChevronDown, User01 } from "@untitled-ui/icons-react";

export const FrameSubsection = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-[221px] w-[1059px] h-[83px] flex justify-between items-center bg-white">
      <div className="inline-flex -mt-px h-6 w-[181px] relative ml-6 items-center gap-2">
        <SearchLg className="w-5 h-5 text-gray-400" />
        <div className="relative w-fit font-medium text-[#3a3a3a99] text-base">
          Search anything...
        </div>
      </div>
      <div className="inline-flex -mt-px h-10 w-[282px] relative mr-10 items-center gap-4">
        <div className="relative w-10 h-10 bg-[#f4f4f4] rounded-full flex items-center justify-center">
          <Bell01 className="w-5 h-5 text-gray-600" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-medium">1</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <User01 className="w-6 h-6 text-white" />
          </div>
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit font-medium text-[#3a3a3acc] text-base">
              Adebanjo Promise
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
