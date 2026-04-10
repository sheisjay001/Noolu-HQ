import { Settings01 } from "@untitled-ui/icons-react";

interface GearSixProps {
  className?: string;
}

export const GearSix = ({ className }: GearSixProps): JSX.Element => {
  return <Settings01 className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
