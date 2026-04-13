export const FrameWrapperSubsection = (): JSX.Element => {
  const stats = [
    {
      label: "TOTAL REVENUE",
      value: "₦24000.00",
      changeText: "+20%",
      changeColor: "text-[#008000cc]",
      suffix: "",
    },
    {
      label: "CHURNED REVENUE",
      value: "₦2,000.00",
      changeText: "-5%",
      changeColor: "text-[#ff0000cc]",
      suffix: "",
    },
    {
      label: "ACTIVE USERS",
      value: "400",
      changeText: "+20%",
      changeColor: "text-[#008000]",
      suffix: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 lg:p-6 border border-[#3a3a3a1a] shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <div className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3a99] text-xs tracking-[0.24px] leading-[18px]">
              {stat.label}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-lg lg:text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                {stat.value}
              </div>
              <p className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-xs tracking-[0.06px] leading-[18px]">
                <span className={`${stat.changeColor}`}>
                  {stat.changeText}{" "}
                </span>
                <span className="text-[#3a3a3a66]">
                  {stat.suffix}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
