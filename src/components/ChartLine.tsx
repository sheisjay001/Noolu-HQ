import { LineChartUp01 } from "@untitled-ui/icons-react";

interface ChartLineProps {
  className?: string;
}

export const ChartLine = ({ className }: ChartLineProps): JSX.Element => {
  return <LineChartUp01 className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
