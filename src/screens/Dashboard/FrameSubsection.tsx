import { SearchLg, Bell01, ChevronDown, User01 } from "@untitled-ui/icons-react";

export const FrameSubsection = (): JSX.Element => {
  return (
    <div className="hidden lg:flex h-[83px] justify-between items-center bg-white px-4 lg:px-6 border-b">
      {/* Search - Hidden on smaller screens, shown on lg+ */}
      <div className="hidden lg:inline-flex h-6 w-[181px] items-center gap-2">
        <SearchLg className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <div className="relative w-fit font-medium text-[#3a3a3a99] text-base">
          Search anything...
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3 lg:gap-4 ml-auto">
        {/* Search icon for mobile/tablet */}
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
          <SearchLg className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notifications */}
        <div className="relative w-10 h-10 bg-[#f4f4f4] rounded-full flex items-center justify-center flex-shrink-0">
          <Bell01 className="w-5 h-5 text-gray-600" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-medium">1</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <User01 className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
          </div>
          <div className="hidden sm:inline-flex items-center gap-1">
            <div className="relative w-fit font-medium text-[#3a3a3acc] text-sm lg:text-base">
              Adebanjo Promise
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
