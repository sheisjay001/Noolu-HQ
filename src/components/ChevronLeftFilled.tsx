import { ChevronLeft } from "@untitled-ui/icons-react";

interface ChevronLeftFilledProps {
  className?: string;
}

export const ChevronLeftFilled = ({ className }: ChevronLeftFilledProps): JSX.Element => {
  return <ChevronLeft className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
