import { ChevronRight } from "@untitled-ui/icons-react";

interface ChevronRightFilledProps {
  className?: string;
}

export const ChevronRightFilled = ({ className }: ChevronRightFilledProps): JSX.Element => {
  return <ChevronRight className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
