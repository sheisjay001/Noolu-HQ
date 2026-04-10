import { BarChartSquare02 } from "@untitled-ui/icons-react";

interface ChartBarProps {
  className?: string;
}

export const ChartBar = ({ className }: ChartBarProps): JSX.Element => {
  return <BarChartSquare02 className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
