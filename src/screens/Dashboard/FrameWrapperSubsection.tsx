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
    <div className="flex w-[995px] items-start gap-6 absolute top-44 left-[245px]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative flex-1 grow h-[105px] bg-white rounded-[3px] overflow-hidden border-[0.5px] border-solid border-[#3a3a3a1a]"
        >
          <div className="flex flex-col w-[calc(100%_-_30px)] items-start gap-1 relative top-6 left-4">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-around gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3a99] text-xs tracking-[0.24px] leading-[18px]">
                  {stat.label}
                </div>
              </div>
              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#3a3a3ae6] text-[20px] tracking-[0] leading-[30px] align-middle whitespace-nowrap">
                  {stat.value}
                </div>
                <p className="relative flex items-center w-fit [font-family:'DM_Sans-Medium',Helvetica] font-medium text-transparent text-xs tracking-[0.06px] leading-[18px] whitespace-nowrap">
                  <span className={`${stat.changeColor} tracking-[0.01px]`}>
                    {stat.changeText}{" "}
                  </span>
                  <span className="text-[#3a3a3a66] tracking-[0.01px]">
                    {stat.suffix}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
