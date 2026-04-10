import { HomeLine } from "@untitled-ui/icons-react";

interface HouseSimpleProps {
  className?: string;
}

export const HouseSimple = ({ className }: HouseSimpleProps): JSX.Element => {
  return <HomeLine className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
